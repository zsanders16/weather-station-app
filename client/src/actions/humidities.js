import axios from 'axios'
import moment from 'moment'
import { setFlash } from './flash'

const HUMIDITIES_MOST_RECENT = 'HUMIDITIES_MOST_RECENT'

export const loadInitialSeriesData = ( dates = null ) => {
  // set the dates to be used
  if( !dates ){
    dates.startDate = moment()
    dates.endDate = dates.startDate.subtract(1, 'hour')
  }
  // create the query string used in the url
  let url = `?start_date=${dates.startDate}&end_date=${dates.endDate}`
  // query the database
  return (dispatch) => {
    axios.get(`/api/humidities/actual${url}`)
      .then( resp => {
        dispatch({
          type: HUMIDITIES_MOST_RECENT,
          data: resp.data
        })
        dispatch(setFlash('Humidities Loaded!', 'success'))
      })
      .catch( resp => {
        dispatch(setFlash('Humidities Not Loaded!', 'error'))
      })
  }
}

export const refreshDataSeries = ( dates = null ) => {

}
