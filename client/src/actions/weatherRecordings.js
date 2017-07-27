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
    axios.get(`/api/humidity_recordings?page=${page}&num_pages=${numPages}`)
      .then( resp => {
        dispatch({
          type: 'HUMIDITY_RECORDS',
          data: resp.data,
          headers: resp.headers,
        })
        // dispatch(setFlash('Humidity Records Found!', 'success'))
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

/**
 * Updates a single humidity record that is stored in the remote database.
 * It also updated the current record in the the set.
 * @param {Object} record - simple object with fields rep. the humdiity record
 */
export const updateHumidityRecord = ( record ) => {
  return (dispatch) => {
    axios.patch(`/api/humidity_recordings/${record.id}`, { weather: record })
    .then( resp => {
      dispatch({
        type: 'UPDATE_HUMIDITY_RECORD',
        data: resp.data,
        headers: resp.headers,
      })
    })
    .catch( resp => {
      dispatch(setFlash('Humidity Record Not Updated!','error'))
    })
  }
}

/**
 * Runs a specific query for records that are between a starting and ending date
 * @param {Object} dates - simple object with both required dates
 * @param {Integer} page - the actual page number that is being returned
 * @param {Integer} numPage - the number of records per page that should be returned
 * @param {Function} callback - Optional, Callback method
 */
export const queryHumidityRecords = ( dates, page = 1, numPage = 5, callback = null ) => {
  let searchStr = `page=${page}&num_page=${numPage}&` +
    `startDate=${dates.startDate.format()}&endDate=${dates.endDate.format()}`
  return (dispatch) => {
    // TODO create a custom route for doing custom date queries
    axios.get(`/api/humidity_recordings_query?${searchStr}`)
    .then( resp => {
      dispatch({
        type: 'QUERIED_HUMIDITY_RECORDS',
        data: resp.data,
        headers: resp.headers
      })
    })
    .then( () => {
      if( callback ) callback()
    })
    .catch( resp => {
      dispatch(setFlash('Humidity query not successful!','error'))
    })
  }
}
