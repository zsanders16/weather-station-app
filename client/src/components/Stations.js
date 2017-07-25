import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Button, Divider } from 'semantic-ui-react'
import Station from './Station'
import { listStationsAll } from '../actions/stations'
import styled from 'styled-components'

const Output = styled(Segment)`
  border: 1px solid lightgrey;
  border-radius: 3px;
`
const OutputText = styled.span`
  font-size: 0.7rem;
  color: blue;
`

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
    let { coords: stations } = this.state
    handleStation({ id, coords })
    const found = stations.find( station => station.id === id )
    if( !found ) {
      this.setState({ coords: [ ...stations, { id, coords } ] })
    } else {
      let keepers = stations.filter( sta => sta.id !== id )
      this.setState({ coords: keepers })
    }
  }

  handleHide = ( id, coords ) => {
    let { handleStation } = this.props
    handleStation({ id, coords })
    let newCoords = this.state.coords.filter( station => station.id !== id )
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

  displayStationIdentifiers = () => {
    let { coords } = this.state
    if( coords && coords.length > 0 ) {
      let strs = coords.map( coord => {
        return coord.id
      })
      return ( <span>{strs.join(', ')}</span>)
    }
  }

  render(){
    return (
      <Segment compact>
        <Grid padded={false}>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Button size='mini'
                onClick={this.props.loadStations} color='blue'>Load Stations</Button>
            </Grid.Column>
            <Grid.Column width={10}>
              <Output>
                <OutputText>
                  { this.displayStationIdentifiers() }
                </OutputText>
              </Output>
            </Grid.Column>
          </Grid.Row>
          <br />
        </Grid>
        { this.displayStations() }
      </Segment>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { dataSeries: state.stations.data, geolocation: state.currentLocation }
}

export default connect(mapStateToProps)(Stations)
