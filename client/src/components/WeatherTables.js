import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { humidityRecords } from '../actions/weatherRecordings'
import styled from 'styled-components'

import WeatherReadings from './WeatherReadings'

const TableArea = styled.div`
  height: 125vh !important;
  padding: 3% 0 !important;
`

class WeatherTables extends Component {

  componentDidMount = () => {
    let { weatherRecordings: wc, match: { params: { name }}, dispatch } = this.props
    if( name === 'humidity' ){
      // if( !wc.humidities || wc.humidities.records.length <= 0)
        // get the first page of humidity data points
        dispatch(humidityRecords())
    }
  }

  render() {
    return (
      <TableArea>
        <Route exact path='/tables/humidity' component={WeatherReadings} />
      </TableArea>
    )
  }
}

const mapStateToProps = ( redux ) => {
  return { weatherRecordings: redux.weatherRecordings || {} }
}

export default connect(mapStateToProps)(WeatherTables)
