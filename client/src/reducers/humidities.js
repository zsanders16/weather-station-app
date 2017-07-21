const humidities = ( state = {}, action ) => {
  switch( action.type ) {
    case 'HUMIDITIES_MOST_RECENT':
      return {
        ...state,
        actual: action.data.actual
      }
    case 'HUMIDITIES_HISTORICAL':
      return {
        ...state,
        historical: action.data.historical
      }
    default:
      return state
  }
}

export default humidities
