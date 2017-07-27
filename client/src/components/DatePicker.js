import React, { Component } from 'react'
import { connect } from 'react-redux'
import Datetime from 'react-datetime'
import moment from 'moment'
import styled from 'styled-components'
import { setDatePickerDate } from '../actions/datePicker'

import 'react-datetime/css/react-datetime.css'

const DateTime = styled(Datetime)`
  width: 30% !important;
`

class DatePicker extends Component {
  state = { date: null }

  componentDidMount = () => {
    let { dispatch, dataType, dateType } = this.props
    let initial_date = null
    if( dateType === 'start_date' ) {
      initial_date = moment.utc().subtract(1,'hours')
    } else {
      initial_date = moment.utc()
    }
    this.setState({ date: initial_date }, () => {
      dispatch(setDatePickerDate( this.state.date, dataType, dateType ))
    })
  }

  handleDateChange = ( moment ) => {
    let { dispatch, dataType, dateType } = this.props
    this.setState({ date: moment }, () => {
      dispatch(setDatePickerDate( this.state.date, dataType, dateType ))
    })
  }

  selectedDate = () => {
    return this.state.date
  }

  render() {
    return (
      <DateTime compact
        value={ this.state.date }
        input={true}
        onChange={this.handleDateChange} />
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return { datePicker: state.datePicker }
}

export default connect(mapStateToProps)(DatePicker)
