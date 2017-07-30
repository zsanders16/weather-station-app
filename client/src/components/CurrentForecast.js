import React from 'react'
import { Segment, Image, Button, Header, List, Icon } from 'semantic-ui-react'
import moment from 'moment'
import { connect } from 'react-redux';
import styled from 'styled-components';

const BackGroundStyle = styled.div`
  background: url(${props => props.imgString});
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`
const DetailedForecast = styled(Segment)`
  width: 60% !important;
  margin: 0 20% !important;
`

class CurrentForecast extends React.Component {
  state = { city: this.props.cities[0], view: 0, time: 'day', imgString: '' }

  componentDidMount() {
    this.selectCity()
    if(moment().hour() >= 18){
        this.setState({view: 1, time: 'night'})
    }
    this.selectBackgroundImage()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cityView !== this.props.cityView){
      this.selectCity(nextProps.cityView)
    }
    if(nextProps.tempData !== this.props.tempData){
      if(nextProps.tempData.days){
        this.setState({city: nextProps.tempData})
      }else{
        this.selectCity()
      }
    }
  }

  selectBackgroundImage = () => {
    let { city, view } = this.state
    let data = city.days[view]
    let background = ''

    if(view === 0){
      if(data.detailedForecast.includes('rainy')){
        background = 'rainyDay'
      }else if(data.detailedForecast.includes('snowy')){
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
    this.setState({imgString})
  }

  selectCity = (cityView = this.props.cityView) => {
    let { cities, tempData } = this.props
      let index = 0
      cities.forEach( (city, i) => {
        if(city.city === cityView){
          index = i
        }
      })
      this.setState({city: cities[index]})
    
  }

  changeView = ( flag ) => {
    if( flag === 'Night' ){
      this.setState({view: 1, time: 'night'}, this.selectBackgroundImage)
    }else if ( flag === 'Day') {
      this.setState({view: 0, time: 'day'}, this.selectBackgroundImage)
    }
  }

  buttonValue = () => {
    let { time } = this.state
    if( time === 'day'){
      return 'Night'
    }else if( time === 'night'){
      return 'Day'
    }
  }

  render(){
    let { city, view } = this.state
    let data = city.days[view]
    let date = moment(data.startTime)
    return(
      <BackGroundStyle imgString={this.state.imgString} >
        <Image src={data.icon} width={100} centered shape='circular'/>
        <Segment basic textAlign='center'>
          <Button.Group size='mini' compact>
            <Button
              onClick={() => this.changeView('Day')}>
              Day
            </Button>
            <Button.Or />
            <Button
              color='blue'
              onClick={() => this.changeView('Night')}>
              Night
            </Button>
          </Button.Group>
        </Segment>
        <DetailedForecast basic textAlign='center'>
          <Header as='h3' style={{color: 'white'}}>{ data.detailedForecast }</Header>
        </DetailedForecast>
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
              <Icon name='pied piper hat' />&nbsp;
              Wind Speed: { data.windSpeed }
            </List.Item>
          </List>
        </Segment>
      </BackGroundStyle>
    )
  }
}

const mapStateToProps = (state) => {
  return{ cities: state.weatherForecasts.weekly, cityView: state.weatherForecasts.cityView, tempData: state.tempData }
}

export default connect(mapStateToProps)(CurrentForecast);
