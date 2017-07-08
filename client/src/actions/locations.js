import axios from 'axios'
import { setFlash } from '../actions/flash';
import { weatherForecast } from '../actions/weather'


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
      dispatch({type: 'SET_CURRENT_LOCATION', data: res.data, headers: res.headers })
      dispatch(weatherForecast([latitude, longitude]))
    })
    .catch( res => {
        dispatch(setFlash('Failed To Set Current Location.', 'error'));
  });
}

export const set_lat_long = (location, dispatch) => {
  dispatch({type: 'SET_CURRENT_LOCATION', data: location})
}
