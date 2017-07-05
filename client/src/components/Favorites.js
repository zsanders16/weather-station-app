import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Message, Button, Divider } from 'semantic-ui-react'
import Favorite from './Favorite'
import { favoritesIndex } from '../actions/favorites'

class Favorites extends Component {
  state = { favorites: [] }

  componentDidMount = () => {
    let { favorites, dispatch } = this.props
    // Place locations in local state
    if( this.props.favorites ) {
      this.setState({ ...this.props.favorites
      })
    }
    if( favorites.length <= 0) {
      // Set initial Favorites
      dispatch(favoritesIndex())
    }
  }

  displayFavorites = () => {
    let { favorites } = this.props
    if( favorites.length > 0 ){
      // return favorites.map( ( loc ) => {
      //   return ( <Favorite {...favorites} /> )
      // })
      return favorites.map( ( fav, i ) => {
        return ( <Favorite key={i} favorite={favorites} /> )
      })
    } else {
      return (
        <Message>
          <Message.Header>
            Favorites Not Set
          </Message.Header>
          <Divider />
          <p>
            Please set a favorite<br />using the buttons below.
          </p>
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
              <Button icon='add' content='Add' />
              <Button icon='remove' content='Remove' />
              <Button icon='edit' content='edit'/>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  // TODO: this is just a prototype
  return { favorites: state.favorites }
}

export default connect(mapStateToProps)(Favorites)
