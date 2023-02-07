import { client } from './client.js';

export async function createItem(newItem) {
  return await client.from('todos').insert({ description: newItem }).single();
}
export async function fetchItems() {
  return await client.from('todos').select('*').order('created_at', { ascending: false });
}
