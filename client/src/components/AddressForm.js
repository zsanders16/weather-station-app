import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import { addressCreate, addressUpdate } from '../actions/addresses'

class AddressForm extends Component {
  defaults = { street1: '', street2: '', city: '', state: '', zipcode: '' }
  state = { ...this.defaults }

  componentDidMount = () => {
    // address is passed down from HOC through props
    let { address } = this.props
    if( address ){
      this.setState({ ...address })
    }
  }

  renderButton = () => {
    // cmd from HOC
    let { id } = this.props
    // edit if 'id' exists
    if( id ) {
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
    let { id, dispatch, history } = this.props
    // create if no id indicating to edit
    if( !id ){
      dispatch(addressCreate(this.state))
    } else if ( id ) {
      dispatch(addressUpdate(this.state))
    }
    // return to the HOC
    history.push(`/address`)
  }

  render(){
    let { street1, street2, city, state, zipcode } = this.state
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
        <Button as={ Link } to={`/address/all`}>Cancel</Button>
      </Form>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  let { id } = props.match.params
  let address = {}
  if( id ) {
    address = state.addresses.find( (address) => {
      return parseInt(address.id,10) === parseInt(id,10)
    })
  }
  return { address, id }
}

export default connect(mapStateToProps)(AddressForm)
