import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { addresses } from '../actions/addresses'
import AddressForm from './AddressForm'
import AddressDelete from './AddressDelete'
import AddressAll from './AddressAll'

// NOTE:
// Routes:
// > /address/:id/:cmd
// > :id will be 0 if adding or creating a new address
class Address extends Component {

  componentDidMount = () => {
    let { addresses: addressSet, dispatch, history } = this.props
    // load addresses from the database
    if( addressSet.length <= 0 ) {
      dispatch(addresses())
      history.push('/address/add')
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={16}>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>

            <Switch>
              <Route exact path='/address/all' component={AddressAll} />
              <Route exact path='/address/:id/edit' component={AddressForm} />
              <Route exact path='/address/add' component={AddressForm} />
              <Route exact path='/address/:id/delete' component={AddressDelete} />
            </Switch>

          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { addresses: state.addresses }
}

export default connect(mapStateToProps)(Address);
