import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { addressCreate, addressUpdate } from '../actions/addresses'

class AddressForm extends Component {
  defaults = { street1: '', street2: '', city: '', state: '', zipcode: ''}

  state = { ...this.defaults }

  componentDidMount = () => {
    // address is passed down from HOC through props
    let { item } = this.props
    if( item ){

      this.setState({ street1: item.street1, city: item.city, state: item.state, zipcode: item.zipcode})
    }
  }

  renderButton = () => {
    // cmd from HOC

    // edit if 'id' exists
    if( this.props.item ) {
      return ( <Button type='submit'>Update</Button> )
    } else {
      return ( <Button type='submit'>Create</Button> )
    }
  }

  onChange = (event) => {
    let { target: { id, value }} = event
    this.setState({ [id]: value })
  }

  onSubmit = () => {
    let { dispatch, item, handleClose } = this.props
    debugger
    if( !item){
      dispatch(addressCreate(this.state))
      this.setState({...this.defaults })
      handleClose()
    } else if ( item ) {
      dispatch(addressUpdate(this.state, item.id))
      this.setState({...this.defaults})
      handleClose()
    }
  }


  render(){
    let { street1, street2, city, state, zipcode } = this.state
    let { handleClose } = this.props
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label='Street'
          id='street1'
          value={street1}
          placeholder='4800 N 2300 S'
          required
          onChange={this.onChange} />
        <Form.Input
          label='Street'
          id='street2'
          value={street2}
          placeholder='APT #2334'
          onChange={this.onChange} />
        <Form.Input
          label='City'
          id='city'
          value={city}
          placeholder='City'
          required
          onChange={this.onChange} />
        <Form.Input
          label='State'
          id='state'
          value={state}
          placeholder='State'
          required
          onChange={this.onChange} />
        <Form.Input
          label='Zip Code'
          id='zipcode'
          value={zipcode}
          placeholder='Zip Code'
          required
          onChange={this.onChange} />
        { this.renderButton() }
        <Button onClick={handleClose}>Cancel</Button>
      </Form>
    )
  }
}


export default connect()(AddressForm)
