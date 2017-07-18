const settingsHumidities = {
  chart: {
    type: 'spline',
    animation: 'Highcharts.svg',
    marginRight: 10,
    events: {
      load: () => {}// NOTE: should be a function for loading recent data
    }
  },
  title: {
    text: 'Humidity Data',
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150,
  },
  yAxis: {
    title: {
      value: 'Relative Humidity',
      plotlines: [{
        value: 0,
        width: 1,
        color: '#808080',
      }]
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: null
}

export default settingsHumidities
