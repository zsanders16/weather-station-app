import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Menu, Dropdown,
} from 'semantic-ui-react'
import { handleLogout } from '../actions/auth'

class NavBar2 extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { dispatch, history } = this.props

    return (
      <Menu size='mini'>
        <Menu.Item header>Weather App</Menu.Item>
        <Menu.Item
          name='home'
          as={ Link }
          to="/"
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />

        { this.props.auth ?
          <Menu.Menu>
            <Menu.Item
              name='forecast'
              as={ Link }
              to="/weatherstation"
              active={activeItem === 'forecast'}
              onClick={this.handleItemClick} />
            <Dropdown item text='Charts'>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={ Link }
                  to="/charts/temperatures"
                  onClick={this.handleItemClick} >
                  Temperatures
                </Dropdown.Item>
                <Dropdown.Item
                  as={ Link }
                  to='/charts/humidities'
                  onClick={this.handleItemClick} >
                  Humidities
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          :
          null
         }

        { this.props.auth ?
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => dispatch(handleLogout(history))} />
          </Menu.Menu>
          :
          <Menu.Menu position='right'>
            <Menu.Item
              name='register'
              as={ Link }
              to='/register'
              active={activeItem === 'register'}
              onClick={this.handleItemClick} />
            <Menu.Item
              name='login'
              as={ Link }
              to='/login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick} />
          </Menu.Menu>
        }
      </Menu>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    auth: state.user.id ? true : false
  }
}

export default connect(mapStateToProps)(NavBar2)
