import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'

// Settings and Objects for HighChart
import { settingsHumidities } from '../chart/humidities'
import { loadInitialSeriesData, refreshDataSeries } from '../actions/humidities'

// Custom Styled Elements
const ChartArea = styled(Segment)`
  height: 400px;
`

class Humidities extends Component {
  state = {
    refreshPeriod: 10000,
    ...settingsHumidities
  }

  componentDidMount = () => {
    let { series, dispatch } = this.props
    if( !series || series.length <= 0 ) {
      dispatch(loadInitialSeriesData())
    }
    // start the initial data refreshing
    this.updateDataSeries()
  }

  updateDataSeries = () => {
    let { dispatch } = this.props
    dispatch(refreshDataSeries())

    setTimeout(this.updateDataSeries, this.state.refreshPeriod )
  }

  render(){
    return (
      <ChartArea>
        <ReactHighcharts config={this.state} />
      </ChartArea>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { humidities: state.humidities }
}
export default connect(mapStateToProps)(Humidities)
