import React from 'react'
import { Grid, Card, Icon, Image, Accordion } from 'semantic-ui-react'

class DayForecast extends React.Component{

  render(){
    let data = this.props.data
    return(
        <Card>
          <Image src={data.icon} width={100} centered />
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
    )
  }
}

export default DayForecast;
