import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Station = ({ name, stationIdentifier, id, coords, handleShow, handleHide }) => {
  return (
    <Segment basic compact>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column floated='left'>
            {stationIdentifier}
          </Grid.Column>
          <Grid.Column floated='right'>
            <Button.Group size='mini'>
              <Button
                onClick={() => handleShow(id,coords)}>
                Add
              </Button>
              <Button.Or />
              <Button
                onClick={() => handleHide(id,coords)}>
                Sub
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {name}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const mapStateToProps = ( state, props ) => {
  return { ...props }
}

export default connect(mapStateToProps)(Station)