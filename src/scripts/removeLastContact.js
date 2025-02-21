import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fileData = await readContacts();
    const contacts = fileData;
    if (contacts.length > 0) {
      const newContacts = contacts.slice(0, -1);
      try {
        await writeContacts(JSON.stringify(newContacts, null, 2));
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
