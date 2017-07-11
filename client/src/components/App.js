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
import { connect } from 'react-redux'
import { weatherForecast } from '../actions/weather'
import { set_lat_long } from '../actions/locations'
import Charts from './Charts'
import { Link } from 'react-router-dom'
import Address from './Address'


class App extends Component {

  // componentDidMount() {
  //   this.GetLocation()
  // }
  //
  // setPosition = (latitude, longitude) => {
  //   let { dispatch } = this.props
  //     dispatch(set_lat_long([latitude, longitude], dispatch))
  //     dispatch(weatherForecast([latitude, longitude] ))
  // }
  //
  // GetLocation = () => {
  //   if (navigator.geolocation) {
  //      navigator.geolocation.getCurrentPosition( (position) => {
  //      let latitude = position.coords.latitude;
  //      let longitude = position.coords.longitude;
  //      this.setPosition(latitude, longitude)
  //      })
  //    }else{
  //     console.log('Your browser doesnt support  this')
  //   }
  // }

  render() {
    return (

      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/weatherstation' component={WeatherStation} />
            <ProtectedRoute path='/charts' component={Charts} />
            <ProtectedRoute path='/address' component={Address} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default connect()(App);
