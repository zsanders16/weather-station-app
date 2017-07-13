import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import '../styles/Station.css'

const GridRow = styled(Grid.Row)`
  padding: 0 !important;
  margin: 0 !important;
  &:nth-child(even) { border-bottom: 1px solid lightgrey; }
`
const Location = styled.p `
  padding: 3px 0;
  font-size: 0.rem;
  color: lightgrey;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Station = ({ name, stationIdentifier, id, coords, handleShow, handleHide }) => {
  return (
    <Segment basic compact className="underline">
      <Grid>
        <GridRow columns={2}>
          <Grid.Column floated='left'>
            {stationIdentifier}
          </Grid.Column>
          <Grid.Column floated='right'>
            <Button.Group size='mini'>
              <Button
                onClick={() => handleShow(stationIdentifier,coords)}>
                Add
              </Button>
              <Button.Or />
              <Button
                onClick={() => handleHide(stationIdentifier,coords)}>
                Sub
              </Button>
            </Button.Group>
          </Grid.Column>
        </GridRow>
        <GridRow>
          <Location>
            {name}
          </Location>
        </GridRow>
      </Grid>
    </Segment>
  )
}

const mapStateToProps = ( state, props ) => {
  return { ...props }
}

export default connect(mapStateToProps)(Station)
