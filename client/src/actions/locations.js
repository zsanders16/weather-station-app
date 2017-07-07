import axios from 'axios'
import { setFlash } from '../actions/flash';

const LOCATIONS = 'LOCATIONS'

export const locations = () => {
  // NOTE: These are default values for testing only
  //       They should come from the remote database
  const locations = ['A','B','C']
  return { type: LOCATIONS, locations }
}

export const set_current_location = (latitude, longitude) => {
  return(dispatch) =>
    axios.post(`/api/current_location`, {current_location: {latitude: latitude, longitude: longitude}})
    .then( res => {
      dispatch({type: 'SET_CURRENT_LOCATION', data: res.data})
    })
    .catch( res => {
        dispatch(setFlash('Failed To Set Current Location.', 'error'));
  });
}
