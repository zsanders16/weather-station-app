import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import moment from 'moment'
import DayForecast from './DayForecast'

class WeeklyForecast extends React.Component {

  //display each forecasted day
  displayDays = (days) => {
    debugger
    return days.map( (day) => {

      return(
        <DayForecast key={day.number} data={day} />
      );
    });
  }


  //remove the current day from the api forecast
  selectDays = () => {
    let data = this.props.weather
    if(data){
      let days = []
      if(moment().hour() < 18){
        for(let i=2;i<data.length;i++){
          days.push(data[i])
        }
        this.displayDays(days)
      }else{
        for(let i=1;i<data.length;i++){
          days.push(data[i])
        }
        this.displayDays(days)
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

  render(){
    return(
      <Segment raised>
        <Grid>
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
