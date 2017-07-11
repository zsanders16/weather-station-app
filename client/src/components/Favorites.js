import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Segment, Message, Button } from 'semantic-ui-react'
import AddressAll from './AddressAll'
import { addresses } from '../actions/addresses'

class Favorites extends Component {
  state = { favorites: [] }

  componentDidMount = () => {
    let { addresses: addSet, dispatch } = this.props
    // load addresses from the database
    if( addSet.length <= 0 ) {
      dispatch(addresses())
    }
      
  }

  displayFavorites = () => {
    if( this.props.addresses.length > 0 ){
      return <AddressAll />
    }else{
      return (
        <Message>
          <Message.Header>Please Create Your Favorites</Message.Header>
          <p>You have no favorites, please add one. Click below!</p>
        </Message>
      )
    }
  }

  render(){
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment raised className='fav-scroll'>
              { this.displayFavorites() }
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button.Group size='mini' floated='right'>
              <Button
                icon='add'
                content='Add'
                as={ Link }
                to={`/address/add`}
              />
              <Button
                icon='remove'
                content='Remove'
                as={ Link }
                to={`/address/all`}
              />
              <Button
                icon='edit'
                content='Delete'
                as={ Link }
                to={`/address/all`}
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  // TODO: this is just a prototype
  return { favorites: state.favorites, addresses: state.addresses }
}

export default connect(mapStateToProps)(Favorites)
