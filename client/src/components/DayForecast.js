import React from 'react'
import { Card, Image, Popup, Button } from 'semantic-ui-react'

class DayForecast extends React.Component{

  render(){
    let data = this.props.data
    return(
        <Card raised>
          <Image src={data.icon} width={100} centered />
          <Card.Content>
            <Card.Header>
              {data.name}
            </Card.Header>
            <Card.Meta>
              <span >
                From { data.isDaytime ? <span>6 am to 6 pm</span> : <span>6 pm to 6 am</span> }
              </span>
            </Card.Meta>
            <Card.Description style={{height: '75px'}}>
              {data.shortForecast}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Popup
              trigger={<Button color='teal'>Detailed Forecast</Button>}
              content={data.detailedForecast}
          />
          </Card.Content>
        </Card>
    )
  }
}

export default DayForecast;
