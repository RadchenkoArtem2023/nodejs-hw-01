import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

async function countContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
}

countContacts();
