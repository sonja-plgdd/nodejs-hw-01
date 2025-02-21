import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const fileData = await readContacts();
      contacts = fileData;
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
    contacts.push(createFakeContact());
    await writeContacts(JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
