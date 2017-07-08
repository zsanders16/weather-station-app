import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

class Sensor extends Component {


  render(){
    // TODO: Render the sensor data obtained
    <Segment>
      Sensor Data
    </Segment>
  }
}

const mapStateToProps = ( state ) => {
  return { sensor: state.sensor }
}

export default connect(mapStateToProps)(Sensor)
