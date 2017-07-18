import axios from 'axios'
import moment from 'moment'
import { setFlash } from './flash'

const HUMIDITIES_MOST_RECENT = 'HUMIDITIES_MOST_RECENT'

// timestamp format for querying the remote database
const postgresql = 'YYYY-MM-DD HH:mm:ss'

/*
 * Helper Methods
 */
  const currentDates = ( dates = {} ) => {
    dates.endDate = moment()
    dates.startDate = dates.endDate.clone().subtract(1, 'hour')
    return dates
  }

/*
 * Action Methods
 */

export const loadInitialSeriesData = ( dates = {}, callback = null ) => {
  // set the dates to be used
  if( !dates || !dates.startDate ){
    dates = currentDates()
  }
  // create the query string used in the url
  let start = dates.startDate.format(postgresql)
  let end = dates.endDate.format(postgresql)
  let url = `?start_date=${start}&end_date=${end}`
  // query the database
  return (dispatch) => {
    axios.get(`/api/humidities/actual${url}`)
      .then( resp => {
        console.log(`humidities refreshed: ${dates.startDate.utc().format()}`)
        dispatch({
          type: HUMIDITIES_MOST_RECENT,
          data: resp.data
        })
        if( callback )
          dispatch(setFlash('Humidities Loaded!', 'success'))
      })
      .then( () => {
        // run the callback
        if( typeof callback === 'function' )
          callback()
      })
      .catch( resp => {
        dispatch(setFlash('Humidities Not Loaded!', 'error'))
      })
  }
}

export const loadNewData = loadInitialSeriesData
