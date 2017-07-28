import axios from 'axios'


export const getStates = () => {
  return (dispatch) => {
    axios.get('/open_city_state')
      .then( resp => {
        debugger
      })
      .catch( resp => {
        console.log('error getting states')
      })
  }
}