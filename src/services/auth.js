import { client } from './client.js';

export async function authUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  if (response.error) throw response.error;

  return response.user;
}
