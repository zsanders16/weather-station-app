import React from 'react'
import { Segment, Message, Button, Icon, Popup, Modal } from 'semantic-ui-react'
import { setCityView } from '../actions/weatherForecasts'
import { connect } from 'react-redux'
import { weatherForecastWeekly } from '../actions/weatherForecasts'
import AddressForm from './AddressForm'
import { addressDelete } from '../actions/addresses'

class AddressSingle extends React.Component {
  state = { modalOpen: false }

  componentDidMount() {
      let { address, dispatch, weatherForecasts} = this.props

      let existCity = weatherForecasts.weekly.filter( (loc) => {
        return loc.city === address.city
      })

      if(existCity.length <= 0){
        dispatch(weatherForecastWeekly([address.latitude, address.longitude], address.city))
      }

  }

  getWeather = (address) => {
    let { dispatch } = this.props
    this.props.dispatch(setCityView(address.city, dispatch))
  }

  removeFavorite = (id) => {

    let { dispatch} = this.props
    dispatch(addressDelete(id))
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render(){
    let { address } = this.props
    return(
      <Message color='blue' key={address.id}>
        <Message.Header >{address.city}, {address.state} {address.zipcode}</Message.Header>
        <Segment basic>
          <Button.Group  size='tiny' style={{marginLeft: '40px'}}>
            <Popup
              trigger={<Button color='blue' icon onClick={() => this.getWeather(address)}>
                        <Icon name='world' />
                      </Button>}
              content='Get Weather'
            />

            <Modal trigger={<Popup
                            trigger={<Button color='instagram' icon onClick={() => this.handleOpen()} >
                                      <Icon name='edit' />
                                    </Button>}
                            content='Edit Location'
                            />}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              >
              <Modal.Header>Edit Contact</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <AddressForm handleClose={this.handleClose} handleOpen={this.handleOpen} item={address}/>
                </Modal.Description>
              </Modal.Content>
            </Modal>


            <Popup
              trigger={<Button color='red' icon onClick={() => this.removeFavorite(address.id)}>
                        <Icon name='trash' />
                      </Button>}
              content='Delete Location'
            />
          </Button.Group>
        </Segment>
      </Message>

    )
  }
}

const mapStateToProps = (state) => {
  return { weatherForecasts: state.weatherForecasts}
}

export default connect(mapStateToProps)(AddressSingle);
