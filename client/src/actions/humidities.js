import axios from 'axios'
import moment from 'moment'
import { setFlash } from './flash'

const HUMIDITIES_MOST_RECENT = 'HUMIDITIES_MOST_RECENT'
const HUMIDITIES_HISTORICAL = 'HUMIDITIES_HISTORICAL'

// timestamp format for querying the remote database
const postgresql = 'YYYY-MM-DD HH:mm:ss'

/*
 * Helper Methods
 */
  const currentDates = ( dates = {} ) => {
    if( !dates || !dates.startDate ){
      dates.endDate = moment()
      dates.startDate = dates.endDate.clone().subtract(1, 'hour')
    }
    return dates
  }

  const datesToUrl = ( dates ) => {
    // create the query string used in the url
    let start = dates.startDate.format(postgresql)
    let end = dates.endDate.format(postgresql)
    let url = `start_date=${start}&end_date=${end}`
    return url
  }

  const stationsToUrl = ( stations ) => {
    let staStr = stations.map( sta => sta.id ).join(',')
    return `stations=${staStr}`
  }

/*
 * Action Methods
 */

export const loadInitialSeriesData = ( dates = {}, callback = null ) => {
  // set the dates to be used
  dates = currentDates()
  // Create the url search string for the dates
  let url = datesToUrl(dates)
  // query the database
  return (dispatch) => {
    axios.get(`/api/humidities/actual?${url}`)
      .then( resp => {
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
        dispatch(setFlash('Actual Humidities Not Loaded!', 'error'))
      })
  }
}

export const loadNewData = loadInitialSeriesData

export const loadHistoricalData = ( dates, stations, callback = null ) => {
  let url = datesToUrl(dates)
  let stationsUrl = stationsToUrl(stations)
  return (dispatch) => {
    axios.get(`/api/humidities/historical?${url}&${stationsUrl}`)
      .then( resp => {
        dispatch({
          type: HUMIDITIES_HISTORICAL,
          data: resp.data
        })
        dispatch(setFlash('Historical humidity data loaded!', 'success'))
      })
      .then( () => {
        if( callback )
          callback()
      })
      .catch( resp => {
        dispatch(setFlash('Historical humdity data not loaded!', 'error'))
      })
  }
}
