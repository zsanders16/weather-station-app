import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CurrentAddress from './CurrentAddress'

class CurrentLocation extends React.Component{

  dimmer = () => {
    return(
      <Segment style={ {height: "100px"}}>
        <Dimmer active>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
      </Segment>
    )
  }

  location = () => {
    return(
    <Segment padded='very' style={ {height: "100px"}} >
      <CurrentAddress address={this.props.currentLocation.address} />
    </Segment>
  )
}

  render(){
    let { loaded } = this.props.currentLocation
    return(
      <div>
      { loaded ? this.location() : this.dimmer() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLocation: state.currentLocation }
}

export default connect(mapStateToProps)(CurrentLocation);
