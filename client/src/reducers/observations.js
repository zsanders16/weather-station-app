import moment from 'moment'

/*
 * Main Reducer for observations
 */
const observations = ( state = [], action ) => {
  switch( action.type ) {
    case 'STATION_LIST_OBSERVATIONS':
      let data = parseDataSeries(action.data)
      let stationRegExp = /.*\/(\w{4,5})$/
      let id = action.data[0].properties.station.match(stationRegExp)[1]
      // let id = action.id
      return [ ...state, { id, data } ]
    case 'STATION_LIST_CLEAR':
      return []
    default:
      return state
  }
}

/*
 * Helper functions for parsing the observation data
 */
const parseDataSeries = ( dataSeries ) => {
  return dataSeries.map( (obs) => {
    let tempC = obs.properties.temperature.value.toPrecision(4)
    let tempF = calcFahrenheit(tempC).toPrecision(4)
    let tempK = calcKelvin(tempC).toPrecision(4)
    let relHum = obs.properties.relativeHumidity.value.toPrecision(4)
    let date = moment.utc(obs.properties.timestamp).format()
    // TODO: check format
    return {
      id: obs.id,
      created_at: date,
      celsius: parseFloat(tempC),
      fahrenheit: parseFloat(tempF),
      kelvin: parseFloat(tempK),
      rel_humidity: parseFloat(relHum),
    }
  })
}

const calcFahrenheit = ( tempC ) => {
  return ( parseFloat(tempC) * (9/5) ) + 32
}

const calcKelvin = ( tempC ) => {
  return ( parseFloat(tempC) + 273.15 )
}

export default observations
