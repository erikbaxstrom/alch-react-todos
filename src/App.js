import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Switch>
        <Route path="/auth/:loginType" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
