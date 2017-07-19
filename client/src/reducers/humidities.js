const humidities = ( state = {}, action ) => {
  switch( action.type ) {
    case 'HUMIDITIES_MOST_RECENT':
      return {
        ...state,
        ...action.data
      }
    case 'HUMIDITIES_HISTORICAL':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default humidities
