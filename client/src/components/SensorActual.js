import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Form, Checkbox } from 'semantic-ui-react'
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
        state: true,
      },
      historical: {
        callback: sensorHistorical,
        state: false,
      },
    },
    start_date: moment().subtract(2, 'day'),
    // end_date: moment().add(1,'day'),
    end_date: moment(),
    limit: 30,
    ...sensorChartConfig,
  }

  // timestamp format for querying the remote database
  postgresql = 'YYYY-MM-DD HH:mm:ss'

  componentDidMount = () => {
    this.setHistoricalChartType()
    this.setActualChartType()
  }
  //
  // setChartTypes = () => {
  //   let { sensor: { actual , historical }, dispatch } = this.props
  //   let { chart_type, start_date, end_date } = this.state
  //   // Collect any required data from remote database
  //   if( !historical || historical.length <= 0 ){
  //     // Check if activated
  //     if( chart_type.historical.state ) {
  //       dispatch(chart_type.historical.callback({
  //         start_date: start_date.format(this.postgresql),
  //         end_date: end_date.format(this.postgresql),
  //       }))
  //     }
  //   }
  //   if( !actual || actual.length <= 0 ){
  //     if( chart_type.actual.state ) {
  //       dispatch(chart_type.actual.callback({
  //         start_date: start_date.format(this.postgresql),
  //         end_date: end_date.format(this.postgresql),
  //       }))
  //     }
  //   }
  // }

  setHistoricalChartType = () => {
    let { sensor: { historical }, dispatch } = this.props
    let { chart_type, start_date, end_date } = this.state
    // Collect any required data from remote database
    if( !historical || historical.length <= 0 ){
      // Check if activated
      if( chart_type.historical.state ) {
        dispatch(chart_type.historical.callback({
          start_date: start_date.format(this.postgresql),
          end_date: end_date.format(this.postgresql),
        }))
      }
    }
  }

  setActualChartType = () => {
    let { sensor: { actual }, dispatch } = this.props
    let { chart_type, start_date, end_date } = this.state
    if( !actual || actual.length <= 0 ){
      if( chart_type.actual.state ) {
        dispatch(chart_type.actual.callback({
          start_date: start_date.format(this.postgresql),
          end_date: end_date.format(this.postgresql),
        }))
      }
    }
  }


  setChartData = () => {
    let { sensor: { actual, historical } } = this.props
    let { chart_type } = this.state
    this.state.series = []
    if( chart_type.historical.state ) {
      if( historical && historical.length > 0 ) {
        this.setDataSeries(historical, 'Hist.')
      }
    }
    if( chart_type.actual.state ) {
      if( actual && actual.length > 0) {
        this.setDataSeries(actual, 'Act.')
      }
    }
  }

  // historical is an array of data objects
  setDataSeries = ( data, type = '' ) => {
    let { series, views, chart_type } = this.state
    let { categories } = this.state.xAxis
    if( data && data.length > 0 ) {
      // Grab each view, i.e. F,C,K
      for( let view in views ){
        if( views[view] ) {
          switch(view) {
            case 'celsius':
              series.push({
                name: type + ' - Celsius',
                data: this.parseTempData( data, 'celsius', categories ),
              })
              break;
            case 'fahrenheit':
              series.push({
                name: type + ' - Fahrenheit',
                data: this.parseTempData( data, 'fahrenheit', categories ),
              })
              break;
            case 'kelvin':
              series.push({
                name: type + ' - Kelvin',
                data: this.parseTempData( data, 'kelvin', categories ),
              })
              break;
            default:
              series.push({
                name: type + ' - Celsius',
                data: this.parseTempData( data, 'celsius', categories ),
              })
          }
        }
      }
    }
  }

  parseTempData = ( data, view, categories ) => {
    return data.map( ( data ) => {
      // TODO: Determine a set of categories that will work with all datasets types
      // categories.push( moment(data.created_at).format('mm:ss') )
      return data[view]
    })
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
    let { id, checked } = data
    let chartType = this.state.chart_type

    chartType[id].state = !chartType[id].state
    this.setState({ chart_type: chartType })

    if( id === 'actual' && checked === true ){
      this.setActualChartType()
    } else if( id === 'historical' && checked === true ) {
      this.setHistoricalChartType()
    }
  }

  render(){
    this.setChartData()
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
  return { sensor: state.sensor }
}

export default connect(mapStateToProps)(SensorActual)
