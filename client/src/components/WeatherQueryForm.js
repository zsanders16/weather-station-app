import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Form, Button } from 'semantic-ui-react'
import Datetime from 'react-datetime'
import moment from 'moment'
import { queryHumidityRecords } from '../actions/weatherRecordings'

import 'react-datetime/css/react-datetime.css'

class WeatherQueryForm extends Component {
  state={ startDate: moment.utc(), endDate: moment.utc() }

  handleStartDateChange = ( moment ) => {
    this.setState({
      startDate: moment
    })
  }

  handleEndDateChange = ( moment ) => {
    this.setState({
      endDate: moment
    })
  }

  handleSubmit = ( event ) => {
    event.preventDefault()
    let { dispatch } = this.props
    dispatch(queryHumidityRecords(this.state))
  }

  render() {
    return (
      <Grid.Row columns={1}>
        <Grid.Column width={16}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Field>
                <label>Start Date</label>
                <Datetime
                  compact
                  value={ this.state.startDate }
                  input={true}
                  onChange={this.handleStartDateChange} />
              </Form.Field>
              <Form.Field>
                <label>End Date</label>
                <Datetime
                  compact
                  value={ this.state.endDate }
                  input={true}
                  onChange={this.handleEndDateChange} />
              </Form.Field>
              <Form.Field>
                <Button type='submit' size='mini' compact>Run</Button>
              </Form.Field>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default connect()(WeatherQueryForm)
