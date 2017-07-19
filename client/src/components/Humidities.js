import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import moment from 'moment'
import Stations from './Stations'

// Settings and Objects for HighChart
import { settingsHumidities } from '../charts/humidities'
import {
  loadInitialSeriesData,
  loadNewData,
  loadHistoricalData,
} from '../actions/humidities'

// Custom Styled Elements
const ChartArea = styled(Segment)`
  width: 100% !important;
`

class Humidities extends Component {
  state = {
    refreshPeriod: 60000, // 1 minute intervals
    stations: [], // holder for the selected stations
    dates: { // holder for constant updated dates
      startDate: null,
      endDate: null,
    },
    ...settingsHumidities // Highcharts settings for graph
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
    dispatch(loadNewData(dates, () => this.updateSingleDataSeries(dates,'actual') ))
    this.callback = setTimeout(this.refreshDataSeries, this.state.refreshPeriod)
  }

  updateSingleDataSeries = ( dates, dataSetType = 'actual' ) => {
    let { humidities } = this.props
    let { series } = this.state
    let newHumidities = [], dataSet = { data: [] }
    // create the new data set of values to update with
    humidities[dataSetType].forEach( set => {
      newHumidities.push( [
        // NOTE: Needed format for Highcharts displaying of data and time
        //       Unix Milliseconds
        moment(set.created_at).valueOf(),
        set.rel_humidity
      ])
    })

    // filter old set of values
    if( series )
      dataSet = series.filter( set => set.name !== dataSetType )
    // update the entire dataset
    // TODO: update the existing dataset and shorten it, so length is same
    this.setState({
      series: [
        ...dataSet,
        {
          name: dataSetType.charAt(0).toUpperCase() + dataSetType.substr(1),
          data: [
            ...dataSet.data,
            ...newHumidities
          ].sort(this.sortDates)
        }
      ],
      dates: dates
     })
  }

  updateMultipleDataSeries = ( dates, dataSetType = 'historical' ) => {
    let { humidities } = this.props
    let { series } = this.state
    let newHumidities = [], dataSet = []
    // create the new data set of values to update with
    humidities[dataSetType].forEach ( subSet => {
      // process each subset individually
      const subHumidities = []
      subSet.forEach( set => {
        console.log(set.created_at)
        subHumidities.push( [
          // NOTE: Needed format for Highcharts displaying of data and time
          //       Unix Milliseconds
          moment(set.created_at).valueOf(),
          set.rel_humidity
        ])
      })
      // Add new data set object
      newHumidities.push({
        name: dataSetType.charAt(0).toUpperCase() + dataSetType.substr(1),
        data: subHumidities.sort(this.sortDates)
      })
    })

    // remove old set of values
    if( series )
      dataSet = series.filter( set => set.name !== dataSetType )
    // update the entire dataset
    // TODO: update the existing dataset and shorten it, so length is same
    this.setState({
      series: [
        ...dataSet,
        ...newHumidities
      ],
      dates: dates
     })
  }

  sortDates = ( a, b ) => {
    // ASC
    return moment(a[0]).isBefore(b[0]) ? -1 :
      moment(a[0]).isAfter(b[0]) ? 1 : 0
  }

  /*
   * Stations object handling methods
   */

  // Can accept a flag for adding and subtractign stations from the dataset
  handleStation = ( station, flag = 'add' ) => {
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
    let { stations } = this.state
    let dates = { // get most recent data
      startDate: moment().subtract(1,'hours'),
      endDate: moment()
    }
    // Remotely acquire the data sets for each Station
    dispatch(loadHistoricalData(dates,stations, () => {
      this.updateMultipleDataSeries(dates, 'historical')
    }))
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
