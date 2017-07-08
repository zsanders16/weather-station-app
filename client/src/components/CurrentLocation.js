import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CurrentAddress from './CurrentAddress'

class CurrentLocation extends React.Component{
  // state = {address: '', latitude: '', longitude: ''}


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
      const { address } = this.props.currentLocation
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
