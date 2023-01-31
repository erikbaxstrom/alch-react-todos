import { client } from './client.js';

export function getUser() {
  return client.auth.currentUser;
}

export async function authUser(email, password, loginType) {
  let response;
  if (loginType === 'sign-up') {
    response = await client.auth.signUp({ email, password });
  } else {
    response = await client.auth.signIn({ email, password });
  }

  if (response.error) {
    throw response.error;
  }

  return response.user;
}

export async function signOut() {
  await client.auth.signOut();
}
