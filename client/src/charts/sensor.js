export const sensorChartConfig = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Temperature Data'
  },
  subtitle: {
    text: 'Actual data taken from Arduino Device (every 5 sec.)'
  },
  xAxis: {
    type: 'datetime',
    // NOTE: categories should be calculated from the sensor data
    // It normally will represent the data point on the x-axis
    // The line below is just an example data set for testing
    categories: ['12:01','12:02','12:03','12:04','12:05','12:06','12:07','12:08','12:09','12:10'],
    labels: {
    // NOTE: example of possible formatting options
    // It is best to use the datajs package to format date and time labels
    // format: '{value:%m:%S}',
    // format: '{value:%H:%m:%S}',
    // format: '{value:%Y-%m-%d}',
      rotation: 45,
      align: 'left',
    },
    title: {
      text: 'Time'
    }
  },
  yAxis: {
    title: {
      text: 'Temperature (Degrees)'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false
      },
      enablemousetracking: true
    }
  },
  // NOTE: array of object pairs
  series: []
}
