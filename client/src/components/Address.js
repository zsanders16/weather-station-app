import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addressDelete, addressUpdate, addressCreate } from '../actions/address'

// NOTE:
// Routes:
// > /address/:id/:cmd
// > :id will be 0 if adding or creating a new address
class Address extends Component {
  defaults = { street1: '', street2: '', city: '', state: '', zipcode: null }
  state = { ...this.defaults }

  componentDidMount = () => {
    // NOTE: Check for deleting item before rendering
    let { id, cmd } = this.props.match
    let { dispatch, history } = this.props
    if( cmd === 'delete' ){
      dispatch(addressDelete(id))
    } else if( cmd === 'edit' ){
      // filter the addresses
      let address = this.props.addresses.find( (address) => {
        return parseInt(address.id,10) === parseInt(id,10)
      })
      this.setState({ address })
    }
    // TODO: determine where to push to
    history.push('/address')
  }

  onChange = (event) => {
    let { target: { id, value }} = event
    this.setState({ [id]: value })
  }

  onSubmit = () => {
    let { dispatch, history } = this.props
    let { cmd } = this.props.match
    // NOTE: the 'cmd' should be received as part of the route
    if( cmd === 'create'){
      dispatch(addressCreate(this.state))
    } else if ( cmd === 'edit' ) {
      dispatch(addressUpdate(this.state))
    }
    // TODO: Where should history be pushed to??
    history.push('/address')
  }

  render() {
    let { street1, street2, city, state, zipcode } = this.state
    return (
      <Form onSubmit={this.selectAddress}>
        <Form.Input label='Street'
                    id='street1'
                    value={street1}
                    placeholder='4800 N 2300 S'
                    required
                    onChange={this.onChange} />
        <Form.Input label='Street'
                    id='street2'
                    value={street2}
                    placeholder='APT #2334'
                    onChange={this.onChange} />
        <Form.Input label='City'
                    id='city'
                    value={city}
                    placeholder='City'
                    required
                    onChange={this.onChange} />
        <Form.Input label='State'
                    id='state'
                    value={state}
                    placeholder='State'
                    required
                    onChange={this.onChange} />
        <Form.Input label='Zip Code'
                    id='zipcode'
                    value={zipcode}
                    placeholder='Zip Code'
                    required
                    onChange={this.onChange} />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { addresses: this.state.addresses }
}

export default connect(mapStateToProps)(Address);
