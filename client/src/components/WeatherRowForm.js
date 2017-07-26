import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Button, Input, Form } from 'semantic-ui-react'
import axios from 'axios'
import { updateHumidityRecord } from '../actions/weatherRecordings'

class WeatherRowForm extends Component {
  state = { id: '', rel_humidity: '', created_at: '' }

  componentDidMount = () => {
    this.setState({
      ...this.props.recData
    })
  }

  handleInputChange = ( event ) => {
    let { target: { id, value }} = event
    this.setState({ [id]: value })
  }

  handleSubmit = ( event ) => {
    event.preventDefault()
    let { dispatch } = this.props
    dispatch(updateHumidityRecord(this.state))
    this.props.toggleForm()
  }

  render() {
    let { rel_humidity, created_at } = this.state
    return (
      <Segment basic>
        <Form onSubmit={this.handleSubmit}>
          <Grid>
            <Grid.Row columns={3} >
              <Grid.Column width={6}>
                <Input
                  label='%RH'
                  id='rel_humidity'
                  value={rel_humidity}
                  onChange={this.handleInputChange} />
              </Grid.Column>
              <Grid.Column width={6}>
                <Input
                  label='Date'
                  id='created_at'
                  value={created_at}
                  onChange={this.handleInputChange} />
              </Grid.Column>
              <Grid.Column width={4}>
                <Button.Group size='mini' floated='right'>
                  <Button icon='save' />
                  <Button
                    icon='close'
                    onClick={this.props.toggleForm} />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    )
  }
}

export default connect()(WeatherRowForm)
