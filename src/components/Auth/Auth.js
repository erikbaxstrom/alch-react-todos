import { useState } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginType } = useParams();

  const { submitAuthHandler, user } = useUser();

  if (user) {
    return <Redirect to="/items" />;
  }
  return (
    <>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
