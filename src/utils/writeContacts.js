import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
    console.log('success');
  } catch (err) {
    console.error(err);
  }
};
