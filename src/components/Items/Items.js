import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Items() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <>
      <h2>Items</h2>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </>
  );
}
