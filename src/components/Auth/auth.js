import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginType } = useParams();

  const { submitAuthHandler } = useUser();

  return (
    <>
      <h2>Auth Page</h2>
      <div>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitAuthHandler(email, password, loginType);
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
