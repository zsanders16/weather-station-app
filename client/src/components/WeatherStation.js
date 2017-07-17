import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Button, Divider } from 'semantic-ui-react';
import Compare from './Compare';
import Favorites from './Favorites'
import SensorActual from './SensorActual'
import CurrentLocation from './CurrentLocation'
import WeeklyForecast from './WeeklyForecast'
import { set_current_location } from '../actions/locations'
import TodaysWeather from './TodaysWeather'
import ReactHighcharts from 'react-highcharts';
import ToggleFavoriteLocation  from './ToggleFavoriteLocation'


class WeatherStation extends Component {
  state = {cityView: 'Salt Lake City', view: true, citySeries: [], series: [] }

  componentDidMount() {

    //ensure you have your current location
    let { currentLocation, cityView } = this.props
    if(!currentLocation.latitude){
      this.getLocation()
    }
    this.setState({cityView: cityView })
  }

  //calls you currently don't have weather for current location it call set_current_location action
  setPosition = (latitude, longitude) => {
    let { dispatch, weather } = this.props
      if(weather.length){
        dispatch(set_current_location(latitude, longitude))
      }else{
        dispatch(set_current_location(latitude, longitude, false))
      }
  }

  //Gets user lat long and calls setPosition
  getLocation = () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition( (position) => {
       let latitude = position.coords.latitude;
       let longitude = position.coords.longitude;
       this.setPosition(latitude, longitude)
       })
    }else{
      console.log('Your browser doesnt support this')
    }
  }

  setViewToTrue = () => {
    this.setState({view: true})
  }

  setViewToFalse = () => {
    this.setState({view: false})
  }

  showForecast = () => {
    return (
      <Grid.Row >
        <Grid.Column width={12} >
          <WeeklyForecast cityView={this.state.cityView}/>
        </Grid.Column>
        <Grid.Column width={4} className='ws_area'>
          <Favorites updateDisplay={this.updateDisplay}/>
        </Grid.Column>
      </Grid.Row>
    )
  }

    chart = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Comparison of Temperature by City'
      },
      subtitle: {
          text: 'Temperature by City'
      },
      xAxis: {
          allowDecimals: false,
          labels: {
              formatter: function () {
                  return this.value; // clean, unformatted number for year
              }
          }
      },
      yAxis: {
          title: {
              text: 'Nuclear weapon states'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000 + 'k';
              }
          }
      },
      tooltip: {
          pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'USA',
          data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
              1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
              27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
              26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
              24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
              22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
              10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
      }, {
          name: 'USSR/Russia',
          data: [null, null, null, null, null, null, null, null, null, null,
              5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
              4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
              15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
              33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
              35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
              21000, 20000, 19000, 18000, 18000, 17000, 16000]
      }]
     }

  catchToggle = (e) => {
    let { weatherForecasts } = this.props
    let { citySeries } = this.state
    let exists = false
    let changedCity = e.target.innerText


    citySeries.forEach( (city) => {
      if(city === changedCity ){
        exists = true
      }
    })

    if(exists){
      let index = citySeries.indexOf(changedCity)
      if (index !== -1) {
        citySeries.splice(index, 1)
      }

      this.setState({citySeries: [...citySeries]})
    }else{
      this.setState({citySeries: [...this.state.citySeries, changedCity]})
    }
  }

  displayToggles = () => {
    let { weatherForecasts } = this.props
    return weatherForecasts.weekly.map( (fav, i) => {
      return <ToggleFavoriteLocation key={i} fav={fav} catchToggle={this.catchToggle}/>
    })
  }





  setClickHigh = () => {
    let { weatherForecasts } = this.props
    let { series, citySeries} = this.state
    let data = []
    debugger

    for(let i=0;i<citySeries.length;i++){
      debugger
      for(let j=0;j<weatherForecasts.weekly.length;j++){
        debugger
        if(citySeries[i] === weatherForecasts.weekly[j].city){
          debugger
          for(let m=0;m<weatherForecasts.weekly[j].days;m++){
            debugger
            if(weatherForecasts.weekly[j].days[m].temperature){
              debugger
              data.push(weatherForecasts.weekly[j].day[m].temperature)
            }
          }
        }
      }
    }
    this.setState({series: data})
  }

  setClickLow = () => {

  }


  showCompare = () => {
    let { weekly } = this.props.weatherForecasts
    let { byTemp } = this.state
    return(
      <Grid.Row >
        <Grid.Column width={12}>
          <ReactHighcharts config={ this.chart } />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button.Group>
            <Button primary onClick={this.setClickHigh}>Highs</Button>
            <Button.Or />
            <Button secondary onClick={this.setClickLow}>Lows</Button>
          </Button.Group>
          <Divider />
          {this.displayToggles()}
        </Grid.Column>
      </Grid.Row>
    )
  }

  render(){
    let { view } = this.state
    return (
      <Container>
        <Grid>
          <Grid.Row >
            <Grid.Column width={16}>
              <CurrentLocation />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <TodaysWeather/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width={10}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Button.Group>
                <Button primary onClick={this.setViewToTrue}>Forecast</Button>
                <Button.Or />
                <Button secondary onClick={this.setViewToFalse}>Compare</Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          { view ? this.showForecast() : this.showCompare()}
        </Grid>
      </Container>
    )

  }
}

const mapStateToProps = (state) => {
  return { navbarItem: state.navbar,
            weather: state.weather,
            currentLocation: state.currentLocation,
            location_weather: state.weather,
            addresses: state.addresses,
            cityView: state.weatherForecasts.cityView,
            weatherForecasts: state.weatherForecasts
          };

}

export default connect(mapStateToProps)(WeatherStation);
