import React, { Component } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment'

class DatePicker extends Component {
  state = { date: null }

  componentDidMount = () => {
    let { dateCallbackSetter } = this.props
    if( typeof dateCallbackSetter === 'function' )
      // this callback setter is passed down from its parent component
      dateCallbackSetter(this.selectedDateCallback)
  }

  handleDateChange = ( moment ) => {
    this.setState({ date: moment })
  }

  // Callback Function used for accessing/returning the current selected date
  // to the parent component
  // @return {object} with attributes; date, dataType, dateType
  selectedDateCallback = () => {
    let { dataType, dateType } = this.props
    return {
      getter: this.selectedDate, // gives access to the component's set date
      dataType: dataType, // set by parent component, neede for tracking
      dateType: dateType, // set by parent component, neede for tracking
    }
  }

  selectedDate = () => {
    return this.state.date
  }

  render() {
    let { date } = this.state
    return (
      <Datetime compact
        value={ date ? date : moment() }
        input={true}
        onChange={this.handleDateChange} />
    )
  }
}

export default DatePicker
