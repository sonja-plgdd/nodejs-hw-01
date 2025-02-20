import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('data deleted');
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
