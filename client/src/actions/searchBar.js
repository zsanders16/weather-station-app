import axios from 'axios'
import { setFlash } from './flash'

export const getSearchRequest = (input, cb) => {
    axios.get(`/api/open_city_state?city_name=${input}`)
        .then( res => {
            cb(res.data)
        })
        .catch( res => {
            console.log("Error getting cities.")
        })        
}
