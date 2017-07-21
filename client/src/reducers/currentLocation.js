const currentLocation = ( state = { loaded: false }, action ) => {
  switch(action.type){
    
    case 'SET_CURRENT_LOCATION':
      return {latitude: action.data.latitude, longitude: action.data.longitude, address: action.data.address, loaded: true}
    default:
      return state;
  }
}

export default currentLocation;
