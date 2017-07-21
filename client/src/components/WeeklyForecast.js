import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Segment, Dimmer, Loader, Header, Card } from 'semantic-ui-react'
import moment from 'moment'
import DayForecast from './DayForecast'

const options = [
  { key: 1, text: '1 Days Out', value: 1 },
  { key: 2, text: '2 Days Out', value: 2 },
  { key: 3, text: '3 Days Out', value: 3 },
  { key: 4, text: '4 Days Out', value: 4 },
  { key: 5, text: '5 Days Out', value: 5 },
  { key: 6, text: '6 Days Out', value: 6 },
]

class WeeklyForecast extends React.Component {
  state = { forecastDays: 1, city: this.props.cities[0]}

  componentDidMount() {

  }

  //display each forecasted day
  displayDays = (days) => {
    return days.map( (day) => {
      return(
        <Grid.Column  key={day.number} width={4}>
          <Card.Group style={{marginBottom: '10px'}}>
            <DayForecast  data={day} />
          </Card.Group>
        </Grid.Column>
      );
    });
  }


  //remove the current day from the api forecast
  selectDays = (city = null) => {
    let { forecastDays, viewState } = this.state
    let totalViews = forecastDays * 2

    let days = []
    if(moment().hour() < 18){
      for(let i=2;i<totalViews + 2;i++){
        days.push(city.days[i])
      }
      return this.displayDays(days)
    }else{
      for(let i=1;i<totalViews + 1;i++){
        days.push(city.days[i])
      }
      return this.displayDays(days)
    }
  }

  //pull the correct city to display out of all cities in redux state
  selectCity = () => {
    let { cities, cityView } = this.props
    if(cities.length > 0){
      let index = 0
      cities.forEach( (city, i) => {
        if(city.city === cityView){
          index = i
        }
      })
      return this.selectDays(cities[index])
    }else{
      return(
        <Grid.Column width={16}>
          <Segment style={{height: '150px'}}>
          <Dimmer active>
            <Loader indeterminate>Getting Forecast Data</Loader>
          </Dimmer>
        </Segment>
        </Grid.Column>
      )
    }

    
  }

  handleChange = (e, data) => {
    this.setState({ forecastDays: data.value})
  }

  displayForecast = () => {
    let { cityView } = this.props
    return(
      <Segment raised>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={10} textAlign='right'>
              <Header as='h1'>Forecast for {cityView}</Header>
            </Grid.Column>
            <Grid.Column width={6} textAlign='right'>
              <Dropdown onChange={this.handleChange} placeholder='Number of Days' search selection options={options} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.selectCity()}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render(){
    return(
      this.displayForecast()
    )
  }
}

const mapStateToProps = (state) => {
  return { cities: state.weatherForecasts.weekly, cityView: state.weatherForecasts.cityView }

}

export default connect(mapStateToProps)(WeeklyForecast);
