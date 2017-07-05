import React, { component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Address extends Component {
  state = {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
  }

  constructor(props) {
    super(props);
    this.selectAddress = this.selectAddress.bind(this);
  }

  selectAddress(e) {
    e.preventDefault();
  }

  render() {
    let { street1, street2, city, state, zipcode } = this.state
    return (
      <form ref='Address' onSubmit={this.selectAddress}>
        <Form.Input label='Street 1'
                    id='street1'
                    value={street1}
                    placeholder='Street Address 1'
                    onChange={this.onChange} />
        <Form.Input label='Street 2'
                    id='street2'
                    value={street2}
                    placeholder='Street Address 2'
                    onChange={this.onChange} />
        <Form.Input label='City'
                    id='city'
                    value={city}
                    placeholder='city'
                    onChange={this.onChange} />
        <Form.Input label='State'
                    id='state'
                    value={state}
                    placeholder='State'
                    onChange={this.onChange} />
        <Form.Input label='Zip Code'
                    id='zipcode'
                    value={zipcode}
                    placeholder='Zip Code'
                    onChange={this.onChange} />
        <Button type='submit'>Submit</Button>
      </form>
    );
  }
}

//onSubmit method
//onChange method

export default connect()(Address);
