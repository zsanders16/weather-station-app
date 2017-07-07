import React from 'react';
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { set_current_location } from '../actions/locations'
import CurrentAddress from './CurrentAddress'
import Lat from './Lat'
import Long from './Long'

class CurrentLocation extends React.Component{
  // state = {address: '', latitude: '', longitude: ''}
  componentDidMount() {

    this.GetLocation()
    // this.setState({address: this.props.add})
  }

  setPosition = (latitude, longitude) => {
    let { dispatch } = this.props
      dispatch(set_current_location(latitude, longitude))
    }


  GetLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position) => {

           let latitude = position.coords.latitude;
           let longitude = position.coords.longitude;
           console.log( latitude)
           console.log(longitude)

           this.setPosition(latitude, longitude)
    })

  }else{
    console.log('Your browser doesnt support  this')
  }
}

  render(){
    if(!this.props.currentLocation.address){
      return(
        <Segment style={ {height: "100px"}}>
          <Dimmer active>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }else{
      const { address, latitude, longitude } = this.props.currentLocation
      return(
        <Segment padded='very' style={ {height: "100px"}} >
          <CurrentAddress address={address} />

        </Segment>
      )
    }
  }


}

const mapStateToProps = (state) => {
  return { currentLocation: state.currentLocation }
}

export default connect(mapStateToProps)(CurrentLocation);
