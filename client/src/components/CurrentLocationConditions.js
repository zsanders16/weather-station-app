import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import DayForecast from './DayForecast'
import moment from 'moment'

class CurrentLocationConditions extends React.Component {


  displayDays = (days) => {
    return days.map( day => {
      return(<DayForecast key={day.number} data={day}/>)
    })
  }

  selectDays = () => {
    let data = this.props.weather
    if(data.length){
      let days = []
      if(moment().hour() < 18){
        for(let i=2;i<data.length;i++){
          days.push(data[i])
        }
        this.displayDays(days)
      }else{
        debugger
        for(let i=1;i<data.length;i++){
          days.push(data[i])
        }
        this.displayDays(days)
      }
    }else{
      return(
        <Segment>
          <Dimmer active>
            <Loader content='Loading' />
          </Dimmer>
        </Segment>
      )
    }
  }

  render(){
    debugger
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

export default connect(mapStateToProps)(CurrentLocationConditions);
