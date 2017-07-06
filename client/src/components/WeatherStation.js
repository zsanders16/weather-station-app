import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import CurrentConditions from './CurrentConditions';
import Compare from './Compare';
import Favorites from './Favorites'
import CurrentLocation from './CurrentLocation'


class WeatherStation extends Component {

  showHome = () => (
    <Grid.Row columns={16}>
      <Grid.Column width={16}>
        <CurrentLocation />
      </Grid.Column>
      <Grid.Column width={12} className='ws_area'>
        <CurrentConditions />
      </Grid.Column>
      <Grid.Column width={4} className='ws_area'>
        <Favorites />
      </Grid.Column>
    </Grid.Row>
  )

  changeOnNav = () => {
    let { navbarItem } = this.props
    switch (navbarItem) {
        case 'home':
          return this.showHome();
        case 'historical':
          return <Compare />
        default:
          return <h1>Component has not been made yet</h1>
    }
  }

  render(){
    return(
      <Container>
        <Grid>
          {this.changeOnNav()}
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {navbarItem: state.navbar};
}

export default connect(mapStateToProps)(WeatherStation);
