import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts('[]');
    console.log('data deleted');
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();
