import { useState } from 'react';
import { useUser } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { submitAuthHandler } = useUser();

  return (
    <>
      <h2>Auth</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitAuthHandler(email, password);
        }}
      >
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  );
}
