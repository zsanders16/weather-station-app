// DEPRICTED....
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHighChart from 'react-highchart'
import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

// Custom Styled Component
const ChartArea = styled(Segment)`
  height: 400px;
`
class HumidityChart extends Component {
  state = {}

  render(){
    return (
      <ChartArea>
        <ReactHighchart config={this.state} />
      </ChartArea>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    series: state.humidities
  }
}

export default connect(mapStateToProps)(HumidityChart)
