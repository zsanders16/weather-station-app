import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Button, Input, Form } from 'semantic-ui-react'
import { updateHumidityRecord } from '../actions/weatherRecordings'
import styled from 'styled-components'

/**
 * Custom Styled Components
 */
const InputColumn = styled(Grid.Column)`
  padding-left: 0 !important;
`

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
        <Form onBlur={this.handleSubmit}>
          <Grid>
            <Grid.Row columns={3} >
              <InputColumn width={8}>
                <Input
                  id='rel_humidity'
                  value={rel_humidity}
                  onChange={this.handleInputChange} />
              </InputColumn>
              <InputColumn width={8}>
                <Input
                  id='created_at'
                  value={created_at}
                  onChange={this.handleInputChange} />
              </InputColumn>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    )
  }
}

export default connect()(WeatherRowForm)
