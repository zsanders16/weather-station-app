import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodaysWeather extends Component {
  render() {
    console.log(this.props.weather)
    return(
      <ul>
        <li>TodaysWeather</li>
      </ul>
    )
  }
}
const mapStateToProps = (state) => {
  return { weather: state.weather }
}


export default connect(mapStateToProps)(TodaysWeather)
