const weather = ( state = [], action ) => {
  switch( action.type ) {
    case 'WEATHER_FORECAST':
      return { data: action.data }
    case 'WEATHER_FORECAST_HOURLY':
      return { hourly: action.data }
    case 'WEATHER_FORECAST_MONTLY':
      return { monthly: action.data }
    case 'WEATHER_FORECAST-YEARLY':
      return { yearly: action.data }
    default:
      return state
  }
}

export default weather
