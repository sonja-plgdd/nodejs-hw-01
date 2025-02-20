import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileData);
    if (contacts.length > 0) {
      const newContacts = contacts.slice(0, -1);
      try {
        await fs.writeFile(PATH_DB, JSON.stringify(newContacts), 'utf8');
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
