const weatherForecasts = ( state = {weekly: [] }, action ) => {
  switch( action.type ) {
    case 'WEATHER_FORECAST_WEEKLY':
      return { ...state,  weekly: [...state.weekly, {city: action.city, days: action.data} ], cityView: state.cityView }
    case 'SET_CITY_VIEW':
      return { weekly: [...state.weekly], cityView: action.city }
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
