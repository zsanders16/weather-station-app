import moment from 'moment'
import { sensorActual, sensorHistorical } from '../actions/sensor'


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
      start_date: moment().subtract(2, 'day'),
      end_date: moment(),
      limit: 30,
    },
    historical: {
      tempViews: {
        celsius: false,
        fahrenheit: true,
        kelvin: false,
      },
      display: {
        callback: sensorHistorical,
        state: true,
      },
      start_date: moment().subtract(2, 'day'),
      end_date: moment(),
      limit: 30,
    },
  },
}


/*
 * Methods for running the actual Sensor Graph manupilations
 */
export const validDates = ( that ) => {
  let { settings: { actual: act, historical: hist }} = that.state
  let sameStartMonth = act.start_date.month() === hist.start_date.month()
  let sameStartDay = act.start_date.date() === hist.start_date.date()
  return sameStartMonth && sameStartDay
}

export const setHistoricalChartType = ( that ) => {
  if(validDates(that)){
    let { dispatch } = that.props
    let { display, start_date, end_date } = that.state.settings.historical
    if( display.state ) {
      dispatch(display.callback({
        start_date: start_date.format(that.postgresql),
        end_date: end_date.format(that.postgresql),
      }))
    }
  }
}

export const setActualChartType = ( that ) => {
  if(validDates(that)){
    let { dispatch } = that.props
    let { display, start_date, end_date } = that.state.settings.actual
    if( display.state ) {
      dispatch(display.callback({
        start_date: start_date.format(that.postgresql),
        end_date: end_date.format(that.postgresql),
      }))
    }
  }
}
