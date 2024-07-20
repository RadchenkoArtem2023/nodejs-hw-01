import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

async function generateContacts(count) {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`${count} contacts added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}

const count = 5; // змініть це значення для різної кількості контактів
generateContacts(count);
