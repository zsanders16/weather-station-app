import moment from 'moment'
import {
  sensorActual,
  // sensorHistorical,
} from '../actions/sensor'
import { listObservations } from '../actions/observations'


export const sensorChartConfig = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Temperature Data'
  },
  subtitle: {
    text: 'Actual data taken from Arduino Device (every minute)'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b',
    },
    // NOTE: categories should be calculated from the sensor data
    // It normally will represent the data point on the x-axis
    // The line below is just an example data set for testing
    // categories: ['12:01','12:02','12:03','12:04','12:05','12:06','12:07','12:08','12:09','12:10'],
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
      text: 'Date (UTC)'
    }
  },
  yAxis: {
    title: {
      text: 'Temperature (Degrees)'
    }
  },
  tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%b %e @ %H:%M %P}<br/>{point.y:.2f} (Deg.)'
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: true
      },
      enablemousetracking: true
    },
    // line: {
    //   dataLabels: {
    //     enabled: false
    //   },
    //   enablemousetracking: true
    // }
  },
  // NOTE: array of object pairs
  series: []
}

export const sensorSettings = {
  settings: {
    actual: {
      tempViews: {
        celsius: true,
        fahrenheit: false,
        kelvin: false,
      },
      display: {
        callback: sensorActual,
        state: true,
      },
      start_date: moment().utc().subtract(1, 'hours'),
      end_date: moment().utc(),
      limit: 30,
    },
    historical: {
      tempViews: {
        celsius: false,
        fahrenheit: true,
        kelvin: false,
      },
      display: {
        callback: listObservations,
        // callback: sensorHistorical,
        state: true,
      },
      start_date: moment().utc().subtract(1, 'hours'),
      end_date: moment().utc(),
      limit: 30,
    },
  },
}
