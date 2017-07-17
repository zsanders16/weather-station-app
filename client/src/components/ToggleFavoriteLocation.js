import React from 'react'
import { Segment, Checkbox } from 'semantic-ui-react';

class ToggleFavoriteLocation extends React.Component {
  render(){

    return(
      <Segment raised>
        <Checkbox slider onChange={this.props.catchToggle} label={<label>{this.props.fav.city}</label>}/>
      </Segment>
    )
  }
}

export default ToggleFavoriteLocation
