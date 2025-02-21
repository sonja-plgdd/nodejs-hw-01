import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    return data.length;
  } catch (err) {
    console.error = err;
  }
};

console.log(await countContacts());
