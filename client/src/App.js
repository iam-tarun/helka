import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PrivateRoute from "./components/protectRoutes/PrivateRoute"
import Dashboard from './components/Screens/Dashboard'
import Landing from './components/Screens/Landing';
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
