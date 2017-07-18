import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import moment from 'moment'

// Settings and Objects for HighChart
import { settingsHumidities } from '../charts/humidities'
import { loadInitialSeriesData, loadNewData } from '../actions/humidities'

// Custom Styled Elements
const ChartArea = styled(Segment)`
  width: 60% !important;
  margin: 0 20% !important;
`

class Humidities extends Component {
  state = {
    refreshPeriod: 10000,
    ...settingsHumidities
  }
  callback = null

  componentWillUnmount = () => {
    clearTimeout(this.callback)
  }

  componentDidMount = () => {
    let { series, dispatch } = this.props
    if( !series || series.length <= 0 ) {
      dispatch(loadInitialSeriesData(null, this.refreshDataSeries))
    }
  }

  refreshDataSeries = () => {
    let { dispatch } = this.props
    const dates = { startDates: null, endDate: null }
    dates.endDate = moment()
    dates.startDate = dates.endDate.clone().subtract(1, 'hour')
    dispatch(loadNewData(dates))
    this.callback = setTimeout(this.refreshDataSeries, this.state.refreshPeriod)
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
  return { humidities: state.humidities.actual }
}
export default connect(mapStateToProps)(Humidities)
