import { client } from './client.js';

export async function createItem(newItem) {
  //   console.log('item', newItem);
  return await client.from('todos').insert({ description: newItem }).single();
}
