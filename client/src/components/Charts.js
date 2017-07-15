import React from 'react'
import { Grid } from 'semantic-ui-react'
import SensorActual from './SensorActual'

class Charts extends React.Component {
  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <SensorActual />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Charts;
