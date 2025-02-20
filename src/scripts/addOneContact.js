import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const fileData = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(fileData);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
    contacts.push(createFakeContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
