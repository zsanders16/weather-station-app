import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm, Segment, Button, Message } from 'semantic-ui-react'
import { setFlash } from '../actions/flash'
import { addressDelete } from '../actions/addresses'

class AddressDelete extends Component {
  state = { open: false }

  show = () => {
    this.setState({ open: true })
  }

  handleNo = () => {
    let { dispatch, history } = this.props
    dispatch(setFlash('Delete Address Canceled!', 'success'))
    history.push('/address/all')
  }

  handleYes = () => {
    let { id, dispatch, history } = this.props
    dispatch(addressDelete(id))
    history.push('/address/all')
  }

  displayContent = () => {
    let { street1, street2, city, state, zipcode } = this.props.address
    let content = "Are You Sure You want to Delete this Address?\n"
    return content + `\t${street1} ${street2}, ${city}, ${state} ${zipcode}`
  }

  render(){
    let { address } = this.props
    return (
      <Segment basic>
        <Message>
          <Message.Header>Delete Address</Message.Header>
          <p>
            {`${address.city} ${address.state}, ${address.zipcode}`}
          </p>
        </Message>
        <Button onClick={this.show}>Delete</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.handleNo}
          onConfirm={this.handleYes}
        />
      </Segment>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  let { id } = props.match.params
  let address = state.addresses.find( (address) => {
    return parseInt(address.id,10) === parseInt(id,10)
  })
  return { id, address }
}

export default connect(mapStateToProps)(AddressDelete)
