import React, { Component } from 'react'
import { connect } from 'react-redux'
import Datetime from 'react-datetime'
import moment from 'moment'

import { setDatePickerDate } from '../actions/datePicker'

class DatePicker extends Component {
  state = { date: moment.utc() }

  componentDidMount = () => {
    let { dispatch, dataType, dateType } = this.props
    if( dateType === 'start_date' )
      this.setState({ date: moment.utc().subtract(1,'hours') }, () => {
        dispatch(setDatePickerDate( this.state.date, dataType, dateType ))
      })
    dispatch(setDatePickerDate( this.state.date, dataType, dateType ))
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
      <Datetime compact
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
