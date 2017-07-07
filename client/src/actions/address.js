import axios from 'axios'
import { setFlash } from './flash'

const ADDRESS = 'ADDRESS'
const ADDRESS_CREATE = 'ADDRESS_CREATE'
const ADDRESS_SHOW = 'ADDRESS_SHOW'
const ADDRESS_EDIT = 'ADDRESS_EDIT'
const ADDRESS_UPDATE = 'ADDRESS_UPDATE'
const ADDRESS_DELETE = 'ADDRESS_DELETE'

export const address = () => {
  return (dispatch) => {
    axios.get(`/user/${id}/addresses`)
      .then( resp => {
        let { data: addresses, headers } = resp
        dispatch({ type: ADDRESS, addresses, headers })
        dispatch(setFlash('Addresses located!', 'success'))
      })
      .catch( resp => {
        dispatch(setFlash('Addresses not found!', 'error'))
      })
  }
}

export const addressCreate = (address) => {
  return (dispatch) => {
    axios.post(`/users/${id}/address`)
      .then( resp => {
        let { data: address } = resp
        dispatch({ type: ADDRESS_CREATE, address })
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

export const addressUpdate = (address) => {
  return (dispatch) => {
    axios.patch(`/user/${id}/address`, address )
      .then( resp => {
        let { data: address } = resp
        dispatch({ type: ADDRESS_UPDATE, address })
        dispatch(setFlash('Address updated!', 'success'))
      })
      .catch( resp => {
        dispatch(setFlash('Address not updated!', 'error'))
      })
  }
}

export const addressDelete = (address_id) => {
  return (dispatch) => {
    axios.delete(`/user/${id}/address/${address_id}`)
      .then( resp => {
        if( resp.status = 200 ) {
          dispatch({ type: ADDRESS_DELETE, address_id })
          dispatch(setFlash('Address deleted!', 'success'))
        }
      })
      .catch( resp => {
        dispatch(setFlash('Address not deleted!', 'error'))
      })
  }
}
