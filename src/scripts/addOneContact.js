import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

async function addOneContact() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('One contact added.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
}

addOneContact();
