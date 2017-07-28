import axios from 'axios'
import { setFlash } from './flash'

export const getSearchRequest = (input) => {

     axios.post('/open_city_state', {city_name: input})
        .then((res) => {
            debugger
        })
        .catch( () => {
            console.log('Error getting cities')
    })
}
