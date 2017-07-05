import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ReactHighcharts from 'react-highcharts'

class CurrentConditions extends Component {
  state = { data: null }
  chart = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
  }
  render(){
    return (
      <Segment raised id='current_conditions' className='cc-container'>
        <ReactHighcharts config={ this.chart } />
      </Segment>
    )
  }
}

export default CurrentConditions
