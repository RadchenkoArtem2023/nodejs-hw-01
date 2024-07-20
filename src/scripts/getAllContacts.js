import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

async function getAllContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
}

getAllContacts();
