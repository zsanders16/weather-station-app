import axios from 'axios'
import { setFlash } from './flash'

const ADDRESS = 'ADDRESS'
const ADDRESS_CREATE = 'ADDRESS_CREATE'
const ADDRESS_SHOW = 'ADDRESS_SHOW'
const ADDRESS_EDIT = 'ADDRESS_EDIT'
const ADDRESS_UPDATE = 'ADDRESS_UPDATE'
const ADDRESS_DELETE = 'ADDRESS_DELETE'

export const addressesGet = () => {
  return (dispatch) => {
    axios.get(`/api/addresses`)
      .then( resp => {
        let { data: addresses } = resp
        dispatch({ type: ADDRESS, addresses, headers: resp.headers })
        }
      )
      .catch( resp => {
        dispatch(setFlash('Addresses not found!', 'error'))
      })
  }
}

export const addressCreate = (address) => {
  return (dispatch) => {
    axios.post(`/api/addresses`, address )
      .then( resp => {
        let { data: address } = resp
        dispatch({ type: ADDRESS_CREATE, address, headers: resp.headers })
        dispatch(setFlash('Address created!', 'success'))
      })
      .catch( resp => {
        dispatch(setFlash('Address not created!', 'error'))
      })
  }
}

export const addressShow = (address_id) => {
  return { type: ADDRESS_SHOW, address_id }
}

export const addressEdit = (address_id) => {
  return { type: ADDRESS_EDIT, address_id }
}

export const addCurrentToAddress = (combinedAddress, dispatch) => {
  let fullAddress = combinedAddress.split(',')
  let locAddress = fullAddress[0]
  let city = fullAddress[1].substring(1)
  let state = fullAddress[2].substring(1,3)
  let zipcode = fullAddress[2].substring(3,9)
  let address = {google: combinedAddress, address: locAddress, city: city, state: state, zipcode: zipcode}
  dispatch( {type: 'ADDRESS_CREATE', address } )
}

export const addressUpdate = (address, id) => {
  return (dispatch) => {
    axios.patch(`/api/addresses/${id}`, address )
      .then( resp => {
        let { data: address } = resp
        dispatch({ type: ADDRESS_UPDATE, address, headers: resp.headers })
        dispatch(setFlash('Address updated!', 'success'))
      })
      .catch( resp => {
        dispatch(setFlash('Address not updated!', 'error'))
      })
  }
}

export const addressDelete = (address_id) => {
  return (dispatch) => {
    axios.delete(`/api/addresses/${address_id}`)
      .then( resp => {
        if( resp.status === 204 ) {
          dispatch({ type: ADDRESS_DELETE, address_id: address_id, headers: resp.headers })
          dispatch(setFlash('Address deleted!', 'success'))
        }
      })
      .catch( resp => {
        dispatch(setFlash('Address not deleted!', 'error'))
      })
  }
}
