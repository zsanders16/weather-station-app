import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Grid, Segment,
  Form, Checkbox,
  Divider, Header,
  Loader,
} from 'semantic-ui-react'
import {
  // sensorActual,
  // sensorHistorical,
  sensorReset,
} from '../actions/sensor'
import { clearObservations } from '../actions/observations'
import ReactHighcharts from 'react-highcharts'
import Datetime from 'react-datetime'
import moment from 'moment'
import {
  sensorChartConfig,
  sensorSettings,
} from '../charts/sensor'
import Stations from './Stations'
import { GridArea } from './ChartStyles'
import DatePicker from './DatePicker'

import 'react-datetime/css/react-datetime.css'

class SensorActual extends Component {

  // Tracker for chart display options selected by the user
  state = {
    stations: [],
    ...sensorChartConfig,
    ...sensorSettings,
  }

  // timestamp format for querying the remote database
  postgresql = 'YYYY-MM-DD HH:mm:ss'

  /*
   * Makes Async calls to the database and retrieve real-time
   * temp information as it is pulled from the arduino
   */
  updateStatus = { canUpdate: true }
  timer = null
  seconds = 1000
  minutes = this.seconds * 60

  updateActual = ( waitPeriod = (1*this.minutes) ) => {
    // // wait for 10 seconds tight at first
    // const dates = { start_date: moment().utc().format() }
    this.setActualChartType()
    // console.log(`Updated: ${dates.start_date}`)
    if( this.updateStatus.canUpdate )
      this.timmer = setTimeout( () => this.updateActual(), waitPeriod )
  }

  /*
   * Creation of the displayed elements
   */
  componentWillUnmount = () => {
    this.updateStatus.canUpdate = false
    clearTimeout(this.timer)
  }

  componentDidMount = () => {
    this.setChartTypes()
  }

  setChartTypes = () => {
    this.setHistoricalChartType()
    this.updateActual()
  }

  validDates = () => {
    // let { settings: { actual: act, historical: hist }} = this.state
    if( this.props.datePicker.actual ) {
      let { datePicker: { actual: act, historical: hist }} = this.props
      let sameStartMonth = act.start_date.month() === hist.start_date.month()
      let sameStartDay = act.start_date.date() === hist.start_date.date()
      return sameStartMonth && sameStartDay
    }
  }

  setHistoricalChartType = () => {
    if(this.validDates()){
      let { dispatch } = this.props
      let { display } = this.state.settings.historical
      let { start_date, end_date } = this.props.datePicker.historical
      let { stations } = this.state
      if( display.state ) {
        stations.forEach( (sta) => {
          dispatch(display.callback({
            stationId: sta.id,
            // startDate: start_date.utc().format(),
            // endDate: end_date.utc().format(),
            startDate: start_date.toISOString(),
            endDate: end_date.toISOString(),
            // startDate: start_date.format(this.postgresql),
            // endDate: end_date.format(this.postgresql),
            limit: 30,
          }))
        })
      }
    }
  }

  setActualChartType = () => {
    if(this.validDates()){
      let { dispatch } = this.props
      let { display } = this.state.settings.actual
      let { start_date, end_date } = this.props.datePicker.actual
      if( display.state ) {
        dispatch(display.callback({
          // start_date: start_date.format(this.postgresql),
          // end_date: end_date.format(this.postgresql),
          // start_date: start_date.format(),
          // end_date: end_date.format(),
          start_date: start_date.format(),
          end_date: end_date.format(),
        }))
      }
    }
  }



  setChartData = () => {
    let { sensor: { actual, historical }, observations: obs } = this.props
    let { actual: act, historical: hist } = this.state.settings
    // clear the existing series data
    this.state.series = []

    if( hist.display.state ) {
      if( historical && historical.length > 0 ) {
        this.setDataSeries(historical, hist, 'Hist.')
      }
      if( obs && obs.length > 0 ){
        obs.forEach( (o) => {
          this.setDataSeries( o.data, hist, o.id )
        })
      }
    }
    if( act.display.state ) {
      if( actual && actual.length > 0) {
        this.setDataSeries(actual, act, 'Act.')
      }
    }
  }

  // historical is an array of data objects
  setDataSeries = ( data, settings, type = '' ) => {
    let { series } = this.state
    if( data && data.length > 0 ) {
      // Grab each view, i.e. F,C,K
      for( let view in settings.tempViews ){
        if( settings.tempViews[view] ) {
          // console.log(data[0])
          let seriesData = this.parseTempData( data, view )
          // This must be done to eliminate race conditions form happening
          // in the render method
          series.push({
            name: type + ' - ' + view.charAt().toUpperCase() + view.substr(1),
            data: seriesData,
          })
        }
      }
    }
  }

  parseTempData = ( data, view, dir = 'ASC' ) => {
    // ASC or DESC order
    let { start_date } = this.props.datePicker.actual
    return data.map( ( data ) => {
      let created_at = moment.utc(data.created_at)
      if(created_at.isSameOrAfter(start_date)) {
        let point = data[view]
        return [ created_at.valueOf(), point ]
      } else {
        null
      }
    })
    .filter( set => set !== null )
    .sort( (a, b) => {
      if( dir === 'ASC' ) {
        // ASC
        return moment(a[0]).isBefore(b[0]) ? -1 :
          moment(a[0]).isAfter(b[0]) ? 1 : 0
      } else {
        // DESC
        return moment(a[0]).isBefore(b[0]) ? 1 :
          moment(a[0]).isAfter(b[0]) ? -1 : 0
      }
    })
  }

  /*
   * NOTE: Controls for determining which data sets will be displayed
   */

   // Change the Temperature Views that are being displayed
  actViewChanged = (event,data) => {
    let { id } = data
    let settings = this.state.settings
    settings.actual.tempViews[id] = !settings.actual.tempViews[id]
    this.setState({ settings })
  }
  histViewChanged = (event,data) => {
    let { id } = data
    let settings = this.state.settings
    settings.historical.tempViews[id] = !settings.historical.tempViews[id]
    this.setState({ settings })
  }

  // Change the Timestamps being used to query the data to display
  // handleActStartDate = ( moment ) => {
  //   let { dispatch } = this.props
  //   let settings = this.state.settings
  //   settings.actual.start_date = moment
  //   this.setState({ settings }, () => {
  //     this.setActualChartType()
  //     this.setChartTypes()
  //   })
  // }
  // handleHistStartDate = ( moment ) => {
  //   let { dispatch } = this.props
  //   let settings = this.state.settings
  //   settings.historical.start_date = moment
  //   this.setState({ settings }, () => {
  //     this.setHistoricalChartType()
  //     this.setChartTypes()
  //   })
  // }
  //
  // handleActEndDate = ( moment ) => {
  //   let { dispatch } = this.props
  //   let settings = this.state.settings
  //   settings.actual.end_date = moment
  //   this.setState({ settings }, () => {
  //     this.setActualChartType()
  //     this.setChartTypes()
  //   })
  // }
  // handleHistEndDate = ( moment ) => {
  //   let { dispatch } = this.props
  //   let settings = this.state.settings
  //   settings.historical.end_date = moment
  //   this.setState({ settings }, () => {
  //     this.setHistoricalChartType()
  //     this.setChartTypes()
  //   })
  // }

  // Change the charts that will be displayed on the graph
  handleActDisplay = (event,data) => {
    let { checked } = data

    let settings = this.state.settings
    settings.actual.display.state = !settings.actual.display.state
    this.setState({ settings })

    if( checked === true ){
      this.setActualChartType()
    }
  }
  handleHistDisplay = (event,data) => {
    let { checked } = data

    let settings = this.state.settings
    settings.historical.display.state = !settings.historical.display.state
    this.setState({ settings })

    if( checked === true ) {
      this.setHistoricalChartType()
    }
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
    dispatch(clearObservations())
    this.setHistoricalChartType()
  }

  /*
   * Rendering of the Chart and the Control/Settings panel
   */
  render(){
    this.setChartData()
    let { actual: act, historical: hist } = this.state.settings
    return (
      <GridArea>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <Segment>
              { this.state.series.length <= 0 &&
                <Loader
                  active
                  content='Please wait while data updates! This may take up to a minute.' />
              }
              <ReactHighcharts config={this.state} />
            </Segment>
            <Segment>
            <Form>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column width={8}>
                    <Header as='h4'>Actual Realtime Data</Header>
                    <Divider />
                    <Form.Field>
                      <label>Display</label>
                      <Checkbox
                        id='actual'
                        label='Actual'
                        checked={act.display.state}
                        onChange={this.handleActDisplay} /> &nbsp;
                    </Form.Field>
                    <Form.Field>
                      <label>Temperatures</label> &nbsp;
                      <Checkbox
                        id='celsius'
                        label='Celsius'
                        checked={act.tempViews.celsius}
                        onChange={this.actViewChanged} /> &nbsp;
                      <Checkbox
                        id='fahrenheit'
                        label='Fahrenheit'
                        checked={act.tempViews.fahrenheit}
                        onChange={this.actViewChanged} /> &nbsp;
                      <Checkbox
                        id='kelvin'
                        label='Kelvin'
                        checked={act.tempViews.kelvin}
                        onChange={this.actViewChanged} />
                    </Form.Field>
                    <Form.Field>
                      <label>Start Date</label>
                      <DatePicker
                        dataType='actual'
                        dateType='start_date' />
                      <label>End Date</label>
                      <DatePicker
                        dataType='actual'
                        dateType='end_date' />
                    </Form.Field>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Header as='h4'>Historical Data</Header>
                    <Divider />
                    <Form.Field>
                    <label>Display</label>
                    <Checkbox
                      id='historical'
                      label='Historical'
                      checked={hist.display.state}
                      onChange={this.handleHistDisplay} />
                    </Form.Field>
                    <Form.Field>
                      <label>Temperatures</label> &nbsp;
                      <Checkbox
                        id='celsius'
                        label='Celsius'
                        checked={hist.tempViews.celsius}
                        onChange={this.histViewChanged} /> &nbsp;
                      <Checkbox
                        id='fahrenheit'
                        label='Fahrenheit'
                        checked={hist.tempViews.fahrenheit}
                        onChange={this.histViewChanged} /> &nbsp;
                      <Checkbox
                        id='kelvin'
                        label='Kelvin'
                        checked={hist.tempViews.kelvin}
                        onChange={this.histViewChanged} />
                    </Form.Field>
                    <Form.Field>
                      <label>Start Date</label>
                      <DatePicker
                        dataType='historical'
                        dateType='start_date' />
                      <label>End Date</label>
                      <DatePicker
                        dataType='historical'
                        dateType='end_date' />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Stations
              handleStation={this.handleStation}
              loadStations={this.loadStations} />
          </Grid.Column>
        </Grid.Row>
      </GridArea>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    sensor: state.sensor,
    observations: state.observations,
    datePicker: state.datePicker,
  }
}

export default connect(mapStateToProps)(SensorActual)
