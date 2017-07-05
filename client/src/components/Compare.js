import React from 'react';
import { Segment } from 'semantic-ui-react';
import ReactHighcharts from 'react-highcharts';

class Compare extends React.Component{
  state = { data: null }

  chart = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Area chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
    };

  render(){
    return(
      <Segment basic>
        <ReactHighcharts config={ this.chart } />
      </Segment>
    )
  }
}

export default Compare;
