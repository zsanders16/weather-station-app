import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Form, Checkbox, Radio } from 'semantic-ui-react'
import { sensorActual, sensorHistorical } from '../actions/sensor'
import ReactHighcharts from 'react-highcharts'
import Datetime from 'react-datetime'
import moment from 'moment'
import { sensorChartConfig } from '../charts/sensor'

import 'react-datetime/css/react-datetime.css'

class SensorActual extends Component {
  // Tracker for chart display options selected by the user
  state = {
    views: {
      celsius: true,
      fahrenheit: false,
      kelvin: false,
    },
    chart_type: {
      actual: {
        callback: sensorActual,
        state: false,
      },
      historical: {
        callback: sensorHistorical,
        state: true,
      },
    },
    start_date: moment().subtract(1, 'day'),
    // end_date: moment().add(1,'day'),
    end_date: moment(),
    limit: 30,
    ...sensorChartConfig,
  }

  // timestamp format for querying the remote database
  postgresql = 'YYYY-MM-DD HH:mm:ss'

  componentDidMount = () => {
    let { sensor, dispatch } = this.props
    let { chart_type, start_date, end_date } = this.state
    if( sensor.length <= 0 ){
      // NOTE: for testing only
      // dispatch(sensorActual({start: this.timestamp()}))
      dispatch(chart_type.historical.callback({
        start_date: start_date.format(this.postgresql),
        end_date: end_date.format(this.postgresql),
      }))
    }
  }

  setDataSeries = () => {
    let { sensor } = this.props
    let categories = []
    if( sensor.length > 0 ) {
      let data_C = this.props.sensor.historical.map( ( data ) => {
        // return [ Date.parse(data.created_at).toString('mm:ss'), data.celsius ]
        categories.push( moment(data.created_at).format('mm:ss') )
        return data.celsius
      })
      // TODO: uncomment with actual time series
      // this.state.xAxis.categories = categories
      let data_F = this.props.sensor.historical.map( ( data ) => {
        return data.fahrenheit
      })
      let { series } = this.state
      series[0] = { name: 'Celsius', data: data_C }
      series[1] = { name: 'Fahrenheit', data: data_F }
    } else {
      return `Missing Sensor Data`
    }
  }

  processSensorData = () => {
    let series = []
    // Process the sensor data types included from the sensor
    // Data Types: actual or historical
    let { sensor: data } = this.props
    for( let dataType in data ) {

    }
  }

  viewChanged = (event,data) => {
    let { id } = data
    let viewSelection = this.state.views
    viewSelection[id] = !viewSelection[id]
    this.setState({ views: viewSelection })
  }

  handleStartDate = ( moment ) => {
    this.setState({ start_date: moment })
  }

  handleEndDate = ( moment ) => {
    this.setState({ end_date: moment })
  }

  handleChartType = (event,data) => {
    let { id } = data
    let chartType = this.state.chart_type
    chartType[id].state = !chartType[id].state
    this.setState({ chart_type: chartType })
  }

  render(){
    this.setDataSeries()
    let { views, start_date, end_date, chart_type } = this.state
    return (
      <Segment>
        <ReactHighcharts config={this.state} />
        <Form>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={8}>
                <Form.Field>
                  <label>Chart Type</label>
                  <Checkbox
                    id='actual'
                    label='Actual'
                    checked={chart_type.actual.state}
                    onChange={this.handleChartType} /> &nbsp;
                  <Checkbox
                    id='historical'
                    label='Historical'
                    checked={chart_type.historical.state}
                    onChange={this.handleChartType} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Field>
                  <label>Temperatures</label> &nbsp;
                  <Checkbox
                    id='celsius'
                    label='Celsius'
                    checked={views.celsius}
                    onChange={this.viewChanged} /> &nbsp;
                  <Checkbox
                    id='fahrenheit'
                    label='Fahrenheit'
                    checked={views.fahrenheit}
                    onChange={this.viewChanged} /> &nbsp;
                  <Checkbox
                    id='kelvin'
                    label='Kelvin'
                    checked={views.kelvin}
                    onChange={this.viewChanged} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column width={6}></Grid.Column>
              <Grid.Column width={4}>
                <Form.Field>
                  <label>Start</label>
                  <Datetime compact
                    value={start_date}
                    input={true}
                    onChange={this.handleStartDate} />
                  <label>End Date</label>
                  <Datetime compact
                    value={end_date}
                    input={true}
                    onChange={this.handleEndDate} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={6}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = ( state ) => {
  let start = Date.now()
  return { sensor: state.sensor, dates: { start } }
}

export default connect(mapStateToProps)(SensorActual)
