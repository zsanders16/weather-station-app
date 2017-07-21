export const settingsHumidities = {
  chart: {
    type: 'spline',
    // animation: 'Highcharts.svg',
    // marginRight: 10,
    // events: {
    //   load: () => {}// NOTE: should be a function for loading recent data
    // }
  },
  title: {
    text: 'Relative Humidity Readings',
  },
  subtitle: {
    text: 'Actual data points take from a remote Arduino Sensor'
  },
  xAxis: {
    type: 'datetime',
    // tickPixelInterval: 150,
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b',
    },
    labels: {
      rotation: 75,
      align: 'left',
    },
    title: {
      text: 'Dates (UTC)'
    },
  },
  yAxis: {
    title: {
      text: 'Relative Humidity (%)',
      plotlines: [{
        value: 0,
        width: 1,
        color: '#808080',
      }],
    },
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true,
      },
      enablemousetracking: true,
    },
  },
  series: null
}
