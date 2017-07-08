const weather = ( state = [], action ) => {
  switch( action.type ) {
    case 'WEATHER_FORECAST':
      return { data: action.data };
    case 'WEATHER_FORECAST_HOURLY':
    case 'WEATHER_FORECAST_MONTLY':
    case 'WEATHER_FORECAST-YEARLY':
    default:
      return state
  }
}

export default weather
