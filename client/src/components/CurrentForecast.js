import React from 'react'
import { Segment, Image, Button, Header, List, Icon } from 'semantic-ui-react'
import moment from 'moment'
import styled from 'styled-components';

const CurrentForecast = ({ data, changeView }) => {
  const date = moment(data.startTime)

  let background = ''
  
  if(data.isDaytime){
    if(data.detailedForecast.includes('rain')){
      background = 'rainyDay'
    }else if(data.detailedForecast.includes('snow')){
      background = 'snowyDay'
    }else if(data.detailedForecast.includes('windy')){
      background = 'windyDay'
    }else{
      background = 'clearDay'
    }
  }else{
    if(data.detailedForecast.includes('rain')){
      background = 'rainyNight'
    }else if(data.detailedForecast.includes('snow')){
      background = 'snowyNight'
    }else if(data.detailedForecast.includes('windy')){
      background = 'windyNight'
    }else{
      background = 'clearNight'
    }
  }

  let imgString = require(`../images/${background}.gif`)

  const BackGroundStyle = styled.div`
    background: url(${imgString});
    background-repeat: no-repeat;
    background-position: center; 
  `
  
  return(
    <BackGroundStyle basic>
      <Image src={data.icon} width={100} centered shape='circular'/>
      <Segment basic textAlign='center'>
        <Button.Group size='mini' compact>
          <Button
            onClick={() => changeView('Day')}>
            Day
          </Button>
          <Button.Or />
          <Button
            positive
            onClick={() => changeView('Night')}>
            Night
          </Button>
        </Button.Group>
      </Segment>
      <Segment basic textAlign='center'>
        <Header as='h3'>{ data.detailedForecast }</Header>
      </Segment>
      <Segment basic textAlign='center'>
        <List>
          <List.Item>
            { date.calendar().trim() }
            &nbsp;Between:&nbsp;{ data.isDaytime ? <span>6 am to 6 pm</span> : <span>6 pm to 6 am</span> }
          </List.Item>
          <List.Item>
            <Icon name='thermometer three quarters' />&nbsp;
              { data.isDaytime ? 'Daily High' : 'Nightly Low' }&nbsp;
            Temperature:&nbsp;{ data.temperature }&deg;{ data.temperatureUnit }
          </List.Item>
          <List.Item>
            <Icon name='flag outline' />&nbsp;
              Wind Dirrection: { data.windDirection }
          </List.Item>
          <List.Item>
            <Icon name='bathtub' />&nbsp;
            Wind Speed: { data.windSpeed }
          </List.Item>
        </List>
      </Segment>
    </BackGroundStyle>
  )
}

export default CurrentForecast;

// Object {number: 1, name: "Today", startTime: "2017-07-11T08:00:00-06:00", endTime: "2017-07-11T18:00:00-06:00", isDaytime: true…}
// detailedForecast
// :
// "Mostly sunny, with a high near 95. South southwest wind around 7 mph."
// endTime
// :
// "2017-07-11T18:00:00-06:00"
// icon
// :
// "https://api.weather.gov/icons/land/day/sct?size=medium"
// isDaytime
// :
// true
// name
// :
// "Today"
// number
// :
// 1
// shortForecast
// :
// "Mostly Sunny"
// startTime
// :
// "2017-07-11T08:00:00-06:00"
// temperature
// :
// 95
// temperatureTrend
// :
// null
// temperatureUnit
// :
// "F"
// windDirection
// :
// "SSW"
// windSpeed
// :
// "7 mph"
