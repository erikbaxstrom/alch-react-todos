import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Items from './components/Items/Items';
import { useUser } from './context/UserContext.js';

import './App.css';

function App() {
  const { handleLogout, user } = useUser();

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <div>
          <span>{user && `Hello, ${user.email}`}</span>
          {user && <button onClick={handleLogout}>Sign Out</button>}
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/auth/:loginType" component={Auth} />
          <Route path="/items" component={Items} />
          <Route path="/">
            <>
              {user && <Redirect to="/items" />}
              {!user && <Redirect to="/auth/sign-in" />}
            </>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
