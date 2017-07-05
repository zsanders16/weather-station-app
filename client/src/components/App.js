import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import WeatherStation from './WeatherStation'
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Grid>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={WeatherStation} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Grid>
    );
  }
}

export default App;
