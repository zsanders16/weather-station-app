import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import DayForecast from './DayForecast'

class CurrentLocationConditions extends React.Component {
  render(){
    const { data} = this.props.weather
    return(
      <Segment raised>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(CurrentLocationConditions);
