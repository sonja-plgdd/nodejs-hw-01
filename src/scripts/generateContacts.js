import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const fileData = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(fileData);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');

    console.log(`${number} contacts added`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
