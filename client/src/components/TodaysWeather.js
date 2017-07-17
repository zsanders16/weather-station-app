import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Button } from 'semantic-ui-react'
import DayForecast from './DayForecast'
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

  changeView = () => {
    let { view } = this.state
    if( view === 0 ){
      this.setState({view: 1, time: 'night'})
    }else if ( view === 1) {
      this.setState({view: 0, time: 'day'})
    }
  }

  buttonValue = () => {
    let { time } = this.state
    if(time === 'day'){
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
        <Grid centered columns={1} >
          <Grid.Row >
            <Header as='h1'>Today's Weather in {cityView}</Header>
            <Button size='small' color='teal' onClick={this.changeView}>{this.buttonValue()}</Button>
          </Grid.Row>
          <Grid.Row centered columns={4} >
            <Grid.Column >
              <DayForecast data={city.days[view]} />
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
