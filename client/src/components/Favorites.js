import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Message, Button, Header, Divider, Modal, Dimmer, Loader } from 'semantic-ui-react'
import { addressesGet, addCurrentToAddress } from '../actions/addresses'
import AddressSingle from './AddressSingle'
import AddressForm from './AddressForm'

class Favorites extends Component {
  state = { favorites: [], modalOpen: false }

  componentDidMount = () => {
    let { addresses, dispatch } = this.props
    // load addresses from the database
    if( addresses.length <= 1 ) {
      // dispatch(addCurrentToAddress(currentLocation.address, dispatch))
      dispatch(addressesGet())
    }
  }

  displayFavorites = () => {
    let { addresses } = this.props
    if( addresses.length > 0 ){
      return addresses.map( (address, i) => {
        return <AddressSingle key={i} address={address} handleClose={this.handleClose} handleOpen={this.handleOpen} modalOpen={this.state.modalOpen} />
      })
    }else{
      return (
        <Message>
          <Message.Header>Please Create Your Favorites</Message.Header>
          <p>You have no favorites, please add one. Click below!</p>
        </Message>
      )
    }
  }

  displayButtons = () => {
    return(
      <Segment basic >
        <Header as='h2' textAlign='center'>Saved Locations</Header>
        <Modal trigger={<Button
            color='teal'
            icon='add'
            content='Add'
            fluid
            onClick={this.handleOpen}
            />}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
          <Modal.Header>Add a New Contact</Modal.Header>
          <Modal.Content>
            <Modal.Description>
               <AddressForm handleClose={this.handleClose} handleOpen={this.handleOpen}/> 
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })


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
    let { addresses } = this.props
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment raised>
               { this.displayButtons() }  
            <Divider />
               { addresses.length > 0 ? this.displayFavorites() : this.displayLoader() } 
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { favorites: state.favorites,
           addresses: state.addresses,
           currentLocation: state.currentLocation }
}

export default connect(mapStateToProps)(Favorites)
