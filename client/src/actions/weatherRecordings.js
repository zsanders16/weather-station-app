import axios from 'axios'
import { setFlash } from './flash'

/**
 * Retrieves humidity record sets from the data base in paginated groups
 * @param {Integer} page - the current page or set of records to retrieve
 * @param {Integer} numPages - number of records to retrieve per page
 * @param {Function} callback - optional callback function, run after retrieval
 * @return {Null}
 */
export const humidityRecords = ( page = 1, numPages = 5, callback = null ) => {
  return (dispatch) => {
    axios.get(`/api/humidty_recordings?page=${page}&num_pages=${numPages}`)
      .then( resp => {
        dispatch({
          type: 'HUMIDITY_RECORDS',
          data: resp.data
        })
        dispatch(setFlash('Humidity Records Found!', 'success'))
      })
      .then( () => {
        if( callback )
          callback()
      })
      .catch( resp => {
        dispatch(setFlash('Humidity Records not Found!', 'error'))
      })
  }
}
