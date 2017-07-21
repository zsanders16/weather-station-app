import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar2 from './NavBar2';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import WeatherStation from './WeatherStation'
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import HomePage from './HomePage';
import Charts from './Charts'
import { Link } from 'react-router-dom'
import Humidities from './Humidities'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100% !important;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+34,1e5799+34,2989d8+50,7db9e8+59,207cca+70 */
  background: #1e5799; /* Old browsers */
  background: -moz-linear-gradient(45deg, #1e5799 34%, #1e5799 34%, #2989d8 50%, #7db9e8 59%, #207cca 70%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #1e5799 34%,#1e5799 34%,#2989d8 50%,#7db9e8 59%,#207cca 70%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #1e5799 34%,#1e5799 34%,#2989d8 50%,#7db9e8 59%,#207cca 70%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#207cca',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`

class App extends Component {


  render() {
    return (

      <AppContainer>
        <NavBar2 />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/weatherstation' component={WeatherStation} />
            <ProtectedRoute path='/charts/temperatures' component={Charts} />
            <ProtectedRoute path='/charts/humidities' component={Humidities} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </AppContainer>
    );
  }
}

export default App;
