const humidities = ( state = {}, action ) => {
  switch( action.type ) {
    case 'HUMIDITIES_MOST_RECENT':
      return action.data
    default:
      return state
  }
}

export default humidities
