import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Grid, Segment,
  Checkbox, Loader,
  Form, Divider
} from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import moment from 'moment'
import Stations from './Stations'
import DatePicker from './DatePicker'
import WeatherReadings from './WeatherReadings'

// Settings and Objects for HighChart
import { settingsHumidities } from '../charts/humidities'
import {
  loadInitialSeriesData,
  loadNewData,
  loadHistoricalDataSeries,
} from '../actions/humidities'

// Custom Styled Elements
import { GridArea, ChartArea, DatesArea } from './ChartStyles'
const Line = styled(Divider)`
  width: 30% !important;
`


class Humidities extends Component {
  state = {
    checkbox: {
      Actual: true,
      Historical: true,
    },
    stations: [],
    refreshPeriod: 60000, // 1 minute intervals
    ...settingsHumidities,
  }
  callback = null

  componentWillUnmount = () => {
    clearTimeout(this.callback)
  }

  componentDidMount = () => {
    let { series, dispatch } = this.props
    let dates = {}
    dates.end_date = moment.utc()
    dates.start_date = dates.end_date.clone().subtract(1,'hours')
    if( !series || series.length <= 0 ) {
      dispatch(loadInitialSeriesData(dates, this.refreshDataSeries))
    }
  }

  refreshDataSeries = () => {
    let { dispatch, datePicker: { humidity: dates } } = this.props
    let { Actual: showActual } = this.state.checkbox
    if( showActual ){
      dispatch(loadNewData(dates))
      this.updateDataSeries(dates)
      this.callback = setTimeout(this.refreshDataSeries, this.state.refreshPeriod)
    }
  }

  updateDataSeries = ( dates ) => {
    let { humidities } = this.props
    let { series } = this.state
    let newHumidities = [], actual = { data: [] }, historical = []
    // create the new data set of values to update with
    humidities.actual.forEach( set => {
      newHumidities.push( [
        // NOTE: Needed format for Highcharts displaying of data and time
        moment(set.created_at).valueOf(),
        set.rel_humidity
      ])
    })
    // locate the old actual data set of values
    if( series )
      actual = series.find( set => set.name === 'Actual' )
    // filter out the historical data sets
    if( actual && series )
      historical = series.filter( set => set.name !== 'Actual' )
    // update the entire dataset
    this.setState({
      series: [
        // reload the historical data sets
        ...historical,
        // update the new actual data set
        {
          name: 'Actual',
          data: [
            ...(actual ? actual.data : []),
            ...newHumidities
          ].sort(this.sortDates)
        }
      ],
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
    let { dispatch, datePicker: { humidity } } = this.props
    let { stations, checkbox: { Historical: showHistorical } } = this.state
    if( showHistorical ){
      let stationSet = stations.map( sta => sta.id )
      dispatch(loadHistoricalDataSeries(stationSet, humidity, () => {
        this.updateHistoricalDataSeries()
      }))
    }
  }

  updateHistoricalDataSeries = () => {
    let { humidities } = this.props
    let { series } = this.state
    let keepers = []
    // change the date format of the values
    let historicals = humidities.historical.map ( histSet => {
      return {
        name: histSet.name,
        data: histSet.data.map( set => {
          return [
            moment(set[0]).valueOf(),
            set[1]
          ]
        }).sort(this.sortDates)
      }

    })
    // let historicals = humidities.historical
    if( series )
      keepers = this.state.series.filter( set => set.name === 'Actual' )
    this.setState({
      series: [
        ...keepers,
        ...historicals,
      ],
    })
    console.log(`Updating the historical data seriesl locally`)
  }

handleCheckbox = ( event, data ) => {
  this.setState({
    ...this.state,
    checkbox: {
      ...this.state.checkbox,
      [data.name]: data.checked
    },
  }, () => {
    if( !data.checked ){
      this.cleanUpSeriesData(data.name)
    } else {
      if( data.name === 'Actual' ) {
        this.refreshDataSeries()
      } else if( data.name === 'Historical' ) {
        this.loadStations()
      }
    }
  })
}

/**
 * Removes unwanted data from the charts displayed data series
 * @param {String} dataType - String representation of the removed dataType
 */
cleanUpSeriesData = ( dataType ) => {
  const { series } = this.state
  let newSeries = []
  if( dataType === 'Actual' ) {
    newSeries = series.filter( (data) => {
      return data.name !== dataType
    })
  } else {
    newSeries = series.filter( data => { return data.name === 'Actual' })
  }
  this.setState({
    ...this.state,
    series: newSeries
  })
}

  render(){
    return (
      <GridArea>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <ChartArea>
              { !this.state.series &&
                <Loader
                  active
                  content='Please wait while data loads! This may take up to a minute.' />
              }
              <ReactHighcharts config={this.state} />
            </ChartArea>
            <DatesArea>
              <Form>
                <Checkbox
                  name='Actual'
                  value='Actual'
                  label='Actual'
                  checked={this.state.checkbox.Actual}
                  onChange={this.handleCheckbox} />
                &nbsp;
                <Checkbox
                  name='Historical'
                  value='Historical'
                  label='Historical'
                  checked={this.state.checkbox.Historical}
                  onChange={this.handleCheckbox} />
                <Line />
                <label>Start Date</label>
                <DatePicker
                  dataType='humidity'
                  dateType='start_date'/>
                <label>End Date</label>
                <DatePicker
                  dataType='humidity'
                  dateType='end_date'/>
              </Form>
            </DatesArea>
          </Grid.Column>
          <Grid.Column width={6}>
            <Stations
              handleStation={this.handleStation}
              loadStations={this.loadStations} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <WeatherReadings  series={this.props.series} dataType='humidities' dataSet='actual' />
          </Grid.Column>
        </Grid.Row>
      </GridArea>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    humidities: state.humidities,
    datePicker: state.datePicker,
  }
}
export default connect(mapStateToProps)(Humidities)
