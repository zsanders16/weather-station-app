import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import Station from './Station'
import { listStationsAll } from '../actions/stations'


class Stations extends Component {
  state = {
    coords: []
  }

  componentDidMount = () => {
    let { dataSeries, geolocation, dispatch } = this.props
    if( !dataSeries || dataSeries.length < 0 )
      dispatch(listStationsAll(geolocation))
  }

  handleShow = ( id, coords ) => {
    let { handleStation } = this.props
    handleStation({ id, coords })
    this.setState({ coords: [{ id, coords }, ...this.state.coords] })
  }

  handleHide = ( id, coords ) => {
    let { handleStation } = this.props
    handleStation({ id, coords })
    let newCoords = this.state.coords.filter( (station) => {
      return station.id !== id
    })
    this.setState({ coords: newCoords })
  }

  displayStations = () => {
    let { dataSeries } = this.props
    if( dataSeries && dataSeries.length > 0 ){
      return dataSeries.map( (station) => {
        return (
          <Station
            key={station.id}
            id={station.id}
            name={station.properties.name}
            coords={station.geometry.coordinates}
            stationIdentifier={station.properties.stationIdentifier}
            handleShow={this.handleShow}
            handleHide={this.handleHide} />
        )
      })
    }
  }

  render(){
    return (
      <Segment compact>
        { this.displayStations() }
      </Segment>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { dataSeries: state.stations.data, geolocation: state.currentLocation }
}

export default connect(mapStateToProps)(Stations)
