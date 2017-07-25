import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

/**
 * Custom Styled Components
 */
const DataContainer = styled(Segment)`
  padding-bottom: 0 !important;
`
const DataRow = styled(Grid.Row)`
  padding: 0 0 !important;
  margin: 0 0 !important;
`
const DataField = styled(Grid.Column)`
  padding: 0.2rem 0 !important;
  margin: 0 0 !important;
`

const WeatherRowStatic = ({ recData, toggleForm }) => (
  <DataContainer basic onClick={toggleForm}>
    <Grid stretched={false}>
      <DataRow columns={3}>
        <DataField width={6}>
          { recData.rel_humidity.toPrecision(4) }
        </DataField>
        <DataField width={6}>
          { recData.created_at }
        </DataField>
        <DataField width={4}></DataField>
      </DataRow>
    </Grid>
  </DataContainer>
)

export default WeatherRowStatic
