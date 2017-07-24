import React from 'react'
import Favorites from './Favorites'
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

class SavedLocations extends React.Component {

    displayFavorites = () => {
        return(
            <div>
                <Favorites />
            </div>
        )
    }

    displayLoader = () => {
    return(
      <Segment style={ {height: "120px"}}>
        <Dimmer active>
          <Loader size='medium'>Loading Saved Locations</Loader>
        </Dimmer>
      </Segment>
    )
  }

    render(){
        let { cityView } = this.props
        return(
            <div>
                { cityView ?  this.displayFavorites() : this.displayLoader() }
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return { cityView: state.weatherForecasts.cityView }
}

export default connect(mapStateToProps)(SavedLocations)