import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Button } from 'semantic-ui-react'
import CurrentForecast from './CurrentForecast'
import moment from 'moment'


class TodaysWeather extends Component {
  state = {city: this.props.cities[0], view: 0, time: 'day'}

  componentDidMount() {
    this.selectCity();
    if(moment().hour() >= 18){
        this.setState({view: 1, time: 'night'})

    }
  }


  selectCity = () => {
    let { cities, cityView } = this.props
    let index = 0
    cities.forEach( (city, i) => {
      if(city.city === cityView){
        index = i
      }
    })
    this.setState({city: cities[index]})
  }

  changeView = ( flag ) => {
    let { view } = this.state
    if( flag === 'Night' ){
      this.setState({view: 1, time: 'night'})
    }else if ( flag === 'Day') {
      this.setState({view: 0, time: 'day'})
    }
  }

  buttonValue = () => {
    let { time } = this.state
    if( time === 'day'){
      return 'Night'
    }else if( time === 'night'){
      return 'Day'
    }
  }


  render(){
    let { cityView } = this.props
    let { city, view } = this.state
    return(
      <Segment raised>
        <Grid centered >
          <Grid.Row columns={1}>
            <Grid.Column width={16} textAlign='center'>
              <Header as='h1'>Today's Weather in {cityView}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column width={16}>
              <CurrentForecast
                data={city.days[view]}
                changeView={this.changeView}
                buttonValue={this.buttonValue} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}


const mapStateToProps = (state) => {
  return{ cities: state.weatherForecasts.weekly, cityView: state.weatherForecasts.cityView }
}


export default connect(mapStateToProps)(TodaysWeather)
