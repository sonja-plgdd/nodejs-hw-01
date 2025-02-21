import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const fileData = await readContacts();
      contacts = fileData;
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);

    await writeContacts(JSON.stringify(contacts, null, 2));

    console.log(`${number} contacts added`);
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
