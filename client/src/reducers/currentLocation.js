const currentLocation = ( state = {
  latitude:40.761, longitude: -111.882

}, action ) => {
  switch(action.type){
    case 'SET_CURRENT_LOCATION':
      return action.data;
    default:
      return state;
  }
}

export default currentLocation;
