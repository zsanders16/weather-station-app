import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Segment, Dimmer, Loader, Header, Menu } from 'semantic-ui-react'
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
  state = { forecastDays: 1 }





  //display each forecasted day
  displayDays = (days) => {
    return days.map( (day) => {
      return(
        <Grid.Column width={4}>
          <DayForecast key={day.number} data={day} />
        </Grid.Column>
      );
    });
  }


  //remove the current day from the api forecast
  selectDays = () => {
    let data = this.props.weather
    let { forecastDays } = this.state
    let totalViews = forecastDays * 2
    if(data){
      let days = []
      if(moment().hour() < 18){
        for(let i=2;i<totalViews + 2;i++){
          days.push(data[i])
        }
        return this.displayDays(days)
      }else{
        for(let i=1;i<totalViews + 1;i++){
          days.push(data[i])
        }
        return this.displayDays(days)
      }
    }else{
      return(
        <Grid.Column width={15}>
          <Dimmer active>
            <Loader content='Loading' />
          </Dimmer>
        </Grid.Column>
      )
    }
  }

  handleChange = (e, data) => {
    this.setState({ forecastDays: data.value})
  }

  render(){
    // let { days } = this.state
    return(
      <Segment raised>

        <Grid>
          <Grid.Row centered>
            <Header as='h1'>Forecast</Header>
            <Dropdown onChange={this.handleChange} placeholder='Number of Days' search selection options={options} />
          </Grid.Row>
          <Grid.Row>
            {this.selectDays()}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeeklyForecast);
