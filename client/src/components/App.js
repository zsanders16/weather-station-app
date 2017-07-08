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
import HomePage from './HomePage';

// NOTE: for testing only
import WeatherApi from './WeatherApi'
import Address from './Address'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <ProtectedRoute exact path='/weatherstation' component={WeatherStation} />
            <ProtectedRoute path='/address' component={Address} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/weather_api' component={WeatherApi} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
