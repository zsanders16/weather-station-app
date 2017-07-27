import axios from 'axios'
import moment from 'moment'
import { setFlash } from './flash'

const HUMIDITIES_MOST_RECENT = 'HUMIDITIES_MOST_RECENT'
const HUMIDITIES_HISTORICAL = 'HUMIDITIES_HISTORICAL'

/*
 * Helper Methods
 */
  const currentDates = ( dates = {} ) => {
    if( !dates || !dates.start_date ) {
      dates.end_date = moment().utc()
      dates.start_date = dates.end_date.clone().subtract(1, 'hour')
    }
    return dates
  }

/*
 * Action Methods
 */

export const loadInitialSeriesData = ( dates = {}, callback = null ) => {
  // set the dates to be used
  dates = currentDates(dates)
  // create the query string used in the url
  // let start = dates.startDate.format(postgresql)
  // let end = dates.endDate.format(postgresql)
  let start = dates.start_date.format()
  let end = dates.end_date.format()
  let url = `?start_date=${start}&end_date=${end}`
  // query the database
  return (dispatch) => {
    axios.get(`/api/humidities/actual${url}`)
      .then( resp => {
        dispatch({
          type: HUMIDITIES_MOST_RECENT,
          data: resp.data
        })
        if( callback )
          dispatch(setFlash('Actual Humidities Loaded!', 'success'))
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

export const loadHistoricalDataSeries = (stations, dates = {}, callback = null ) => {
  // set the dates to be used
  dates = currentDates(dates)
  // create the query string used in the url
  let start = dates.start_date.toISOString()
  let end = dates.end_date.toISOString()
  stations = stations.join(',')

  let url = `?start_date=${start}&end_date=${end}&stations=${stations}`

  // query the database
  return (dispatch) => {
    axios.get(`/api/humidities/historical${url}`)
      .then( resp => {
        dispatch({
          type: HUMIDITIES_HISTORICAL,
          data: resp.data
        })
        if( callback )
          dispatch(setFlash('Historical Humidities Loaded!', 'success'))
      })
      .then( () => {
        // run the callback
        if( typeof callback === 'function' )
          callback()
      })
      .catch( resp => {
        dispatch(setFlash('Historical Humidities Not Loaded!', 'error'))
      })
  }
}
