const currentLocation = ( state = {}, action ) => {
  switch(action.type){
    case 'SET_CURRENT_LOCATION':
      return action.data;
    default:
      return state;
  }
}

export default currentLocation;
