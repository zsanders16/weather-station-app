import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Form, Checkbox, Divider, Header } from 'semantic-ui-react'
import { sensorActual, sensorHistorical, sensorReset } from '../actions/sensor'
import ReactHighcharts from 'react-highcharts'
import Datetime from 'react-datetime'
import moment from 'moment'
import {
  sensorChartConfig, sensorSettings, validDates,
  setActualChartType, setHistoricalChartType,
 } from '../charts/sensor'

import 'react-datetime/css/react-datetime.css'

class SensorActual extends Component {

  // Tracker for chart display options selected by the user
  state = {
    ...sensorChartConfig,
    ...sensorSettings,
  }

  // timestamp format for querying the remote database
  postgresql = 'YYYY-MM-DD HH:mm:ss'



  componentDidMount = () => {
    this.setChartTypes()
  }

  setChartTypes = () => {
    setHistoricalChartType(this)
    setActualChartType(this)
  }




  setChartData = () => {
    let { sensor: { actual, historical } } = this.props
    let { actual: act, historical: hist } = this.state.settings

    // clear the existing series data
    this.state.series = []

    if( hist.display.state ) {
      if( historical && historical.length > 0 ) {
        this.setDataSeries(historical, hist, 'Hist.')
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
          series.push({
            name: type + ' - ' + view.charAt().toUpperCase() + view.substr(1),
            data: this.parseTempData( data, view ),
          })
        }
      }
    }
  }

  parseTempData = ( data, view ) => {
    return data.map( ( data ) => {
      // TODO: Determine a set of categories that will work with all datasets types
      // categories.push( moment(data.created_at).format('mm:ss') )
      let category = moment(data.created_at).format('mm:ss')
      let point = data[view]
      return [ category, point ]
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
  handleActStartDate = ( moment ) => {
    let { dispatch } = this.props
    let settings = this.state.settings
    settings.historical.start_date = moment
    this.setState({ settings })
    dispatch(sensorReset())
    this.setChartTypes()
  }
  handleHistStartDate = ( moment ) => {
    let { dispatch } = this.props
    let settings = this.state.settings
    settings.historical.start_date = moment
    this.setState({ settings })
    dispatch(sensorReset())
    this.setChartTypes()
  }

  handleActEndDate = ( moment ) => {
    let { dispatch } = this.props
    let settings = this.state.settings
    settings.actual.end_date = moment
    this.setState({ settings })
    dispatch(sensorReset())
    this.setChartTypes()
  }
  handleHistEndDate = ( moment ) => {
    let { dispatch } = this.props
    let settings = this.state.settings
    settings.historical.end_date = moment
    this.setState({ settings })
    dispatch(sensorReset())
    this.setChartTypes()
  }

  // Change the charts that will be displayed on the graph
  handleActDisplay = (event,data) => {
    let { checked } = data

    let settings = this.state.settings
    settings.actual.display.state = !settings.actual.display.state
    this.setState({ settings })

    if( checked === true ){
      setActualChartType(this)
    }
  }
  handleHistDisplay = (event,data) => {
    let { checked } = data

    let settings = this.state.settings
    settings.historical.display.state = !settings.historical.display.state
    this.setState({ settings })

    if( checked === true ) {
      setHistoricalChartType(this)
    }
  }

  /*
   * Rendering of the Chart and the Control/Settings panel
   */
  render(){
    this.setChartData()
    let { actual: act, historical: hist } = this.state.settings
    return (
      <Segment basic compact>
        <Segment>
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
                    <label>Start</label>
                    <Datetime compact
                      value={act.start_date}
                      input={true}
                      onChange={this.handleActStartDate} />
                    <label>End Date</label>
                    <Datetime compact
                      value={act.end_date}
                      input={true}
                      onChange={this.handleActEndDate} />
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
                    <label>Start</label>
                    <Datetime compact
                      value={hist.start_date}
                      input={true}
                      onChange={this.handleHistStartDate} />
                    <label>End Date</label>
                    <Datetime compact
                      value={hist.end_date}
                      input={true}
                      onChange={this.handleHistEndDate} />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>
      </Segment>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { sensor: state.sensor }
}

export default connect(mapStateToProps)(SensorActual)
