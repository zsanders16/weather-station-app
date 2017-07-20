import React from 'react'
import ReactHighcharts from 'react-highcharts'
import { Grid } from 'semantic-ui-react';
import moment from 'moment'

class ForecastChart extends React.Component{
  state = {
    chart: {type: 'area'},
    title: {text: 'Comparison of Temperature by City'},
    xAxis: {allowDecimals: false,
            type: 'datetime',
            
            },
    yAxis: {title: {text: 'Degrees in Fahrenheit'},
                    labels: {formatter: function () {
                              return this.value + '° F';
                            }
                    }
            },
    tooltip: {pointFormat: `{series.name} will hava a high of <b>{point.y:,.0f}° F`},
    plotOptions: {area: {pointStart: 1,
                          pointInterval: 24 * 3600 * 1000, // one day
                          marker: {enabled: false,
                                    symbol: 'circle',
                                    radius: 2,
                                    states: {hover: {enabled: true}}
                                  }
                        }
                  },
    series: []
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.series !== nextProps.series){
      if(nextProps.series.length){
        let { startTime } = nextProps.series[0]
        let options = {area: {pointStart: startTime,
                            pointInterval: 24 * 3600 * 1000, // one day
                            marker: {enabled: false,
                                      symbol: 'circle',
                                      radius: 2,
                                      states: {hover: {nabled: true}}
                                    }
                          
                      }
                }
        let displayString = `{series.name} will hava a ${nextProps.byTemp} of <b>{point.y:,.0f}° F`
        this.setState({series: nextProps.series, plotOptions: options, tooltip: {pointFormat: displayString} } )
      }
    }else{
      this.setState({series: []})
    }
  }



  render(){
    return(
      <Grid.Column width={12}>
        <ReactHighcharts config={ this.state } />
      </Grid.Column>
    )
  }
}

export default ForecastChart
