const tempData = ( state = {}, action ) => {
  switch( action.type ) {
    case 'SET_TEMP_FORECAST':
        return { city: action.city, days: action.data }   
    case 'CLEAR_TEMP_DATA':
        return action.data
    default:
      return state
  }
}

export default tempData;
