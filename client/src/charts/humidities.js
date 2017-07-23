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
    },
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%b %e @ %H:%M %P}<br/>{point.y:.2f} %RH'
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
