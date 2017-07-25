import React, { Component } from 'react'
import WeatherRowStatic from './WeatherRowStatic'
import WeatherRowForm from './WeatherRowForm'

class WeatherRecRow extends Component {
  state={ showForm: false }

  toggleForm = ( event ) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    let { data } = this.props
    if( this.state.showForm ) {
      return (
        <WeatherRowForm
          recData={data}
          toggleForm={this.toggleForm} /> )
    } else {
      return (
        <WeatherRowStatic
          recData={data}
          toggleForm={this.toggleForm} />
      )
    }
  }
}

export default WeatherRecRow
