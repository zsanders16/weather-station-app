import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Header, Button, Icon } from 'semantic-ui-react'

const AddressAll = ({ addresses }) => {
  let addressSet = addresses.map( (address) => {
    return (
      <Segment basic compact key={address.id}>
        <Header as='h5'>
          {address.city}, {address.state} {address.zipcode}
        </Header>
        <Button.Group size='mini'>
          <Button icon as={ Link } to='/address/map'>
            <Icon name='world' />
          </Button>
          <Button icon as={ Link } to={`/address/${address.id}/edit`}>
            <Icon name='edit' />
          </Button>
          <Button icon as={ Link } to={`/address/${address.id}/delete`}>
            <Icon name='trash' />
          </Button>
          <Button icon as={ Link } to={`/address/${address.id}/settings`}>
            <Icon name='settings' />
          </Button>
        </Button.Group>
      </Segment>
    )
  })

  return (
    <Segment basic compact>
      { addressSet }
    </Segment>
  )
}

const mapStateToProps = ( state ) => {
  return { addresses: state.addresses }
}

export default connect(mapStateToProps)(AddressAll)
