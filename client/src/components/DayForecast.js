import React from 'react'
import { Grid, Card, Icon, Image, Accordion } from 'semantic-ui-react'

class DayForecast extends React.Component {


  render(){

    const { data } = this.props
    debugger
    return(
      <Grid.Column width={4}>
        <Card>
          <Image src={data.icon} />
          <Card.Content>
            <Card.Header>
              {data.name}
            </Card.Header>
            <Card.Meta>
              <span >
                From {data.startTime} to {data.endTime}
              </span>
            </Card.Meta>
            <Card.Description>
              {data.shortForecast}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Accordion>
            <Accordion.Title>
              <Icon name='dropdown' />
              DetailedForecast
            </Accordion.Title>
            <Accordion.Content>
              <p>
                {data.detailedForecast}
              </p>
            </Accordion.Content>
          </Accordion>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default DayForecast;
