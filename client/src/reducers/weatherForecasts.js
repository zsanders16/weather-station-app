const weatherForecasts = ( state = {
  weekly: [], cityView: ''

}, action ) => {
  switch( action.type ) {
    case 'WEATHER_FORECAST_WEEKLY':
      return { weekly: [...state.weekly, { city: action.city, days: action.data }], cityView: state.cityView }
    case 'SET_CITY_VIEW':
      return { weekly: [...state.weekly], cityView: action.city }
    case 'UPDATE_CURRENT_LOCATION_WEATHER':
      return action.forecasts
    // case 'WEATHER_FORECAST_HOURLY':
    //   return { hourly: action.data }
    // case 'WEATHER_FORECAST_MONTLY':
    //   return { monthly: action.data }
    // case 'WEATHER_FORECAST-YEARLY':
    //   return { yearly: action.data }
    default:
      return state
  }
}

export default weatherForecasts;
