import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import moment from 'moment'
import Stations from './Stations'

// Settings and Objects for HighChart
import { settingsHumidities } from '../charts/humidities'
import { loadInitialSeriesData, loadNewData } from '../actions/humidities'

// Custom Styled Elements
const ChartArea = styled(Segment)`
  width: 100% !important;
`

class Humidities extends Component {
  state = {
    refreshPeriod: 60000, // 1 minute intervals
    dates: {
      startDate: null,
      endDate: null,
    },
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
    let { dates } = this.state
    if( !dates.startDate ) {
      dates.endDate = moment()
      dates.startDate = dates.endDate.clone().subtract(2, 'minutes')
    } else if( dates.endDate ){
      // set time span to just the last dataset
      dates.startDate = dates.endDate.clone()
      dates.endDate = moment()
    }
    dispatch(loadNewData(dates))
    this.updateDataSeries(dates)
    this.callback = setTimeout(this.refreshDataSeries, this.state.refreshPeriod)
  }

  updateDataSeries = ( dates ) => {
    let { humidities } = this.props
    let { series } = this.state
    let newHumidities = [], actual = { data: [] }
    // create the new data set of values to update with
    humidities.actual.forEach( set => {
      newHumidities.push( [
        // NOTE: Needed format for Highcharts displaying of data and time
        moment(set.created_at).valueOf(),
        set.rel_humidity
      ])
    })
    // locate the old set of values
    if( series )
      actual = series.find( set => set.name === 'Actual' )
    // update the entire dataset
    // TODO: update the existing dataset and shorten it, so length is same
    this.setState({
      series: [{
        name: 'Actual',
        data: [
          ...actual.data,
          ...newHumidities
        ].sort(this.sortDates)
      }],
      dates: dates
     })
  }

  sortDates = ( a, b ) => {
    // ASC
    return moment(a[0]).isBefore(b[0]) ? -1 :
      moment(a[0]).isAfter(b[0]) ? 1 : 0
  }

  handleStation = ( station ) => {
    let { stations } = this.state
    let found = stations.find( (sta) => sta.id === station.id )
    if( found ) {
      let keep = stations.filter( (sta) => sta.id !== station.id )
      this.setState({ stations: keep })
    } else {
      this.setState({ stations: [ ...stations, station ] })
    }
  }

  loadStations = () => {
    let { dispatch } = this.props
    this.setHistoricalDataSeries()()
    this.setState({ series: [] }) // clear the stations set
  }

  setHistoricalDataSeries = () => {
    // Remotely acquire the data sets for each Station
    // format the returned data sets
    // append the formatted data sets to the existing set
  }

  render(){
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <ChartArea>
              <ReactHighcharts config={this.state} />
            </ChartArea>
          </Grid.Column>
          <Grid.Column width={6}>
            <Stations
              handleStation={this.handleStation}
              loadStations={this.loadStations} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { humidities: state.humidities }
}
export default connect(mapStateToProps)(Humidities)
