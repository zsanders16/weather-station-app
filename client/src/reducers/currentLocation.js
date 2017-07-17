const currentLocation = ( state = {
  latitude: 40.761, longitude: -111.882, address: "370 300 E, Salt Lake City, UT 84111, USA", loaded: true }, action ) => {
  switch(action.type){
    case 'SET_CURRENT_LOCATION':
      return action.data;
    default:
      return state;
  }
}

export default currentLocation;
