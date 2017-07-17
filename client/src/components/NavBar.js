import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {


  leftNavs = () => {
    const { user } = this.props;
    if(user.id) {
      return(
        <Menu.Menu >
            <Menu.Item as={Link} to='/weatherstation' name='Weather Station'/>
            <Menu.Item as={Link} to='/charts' name='Charts' />
        </Menu.Menu>
      )
    }
  }

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu.Menu position='right'>
          <Menu.Item name='settings' as={ Link } to='/settings' />
            <Menu.Item
              name='Logout'
              onClick={() => dispatch(handleLogout(history))}
            />
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/register' name='Register'/>
          <Menu.Item as={Link} to='/login' name='Login'/>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <div>
        <Menu fluid>
            <Menu.Item header>Home</Menu.Item>
            { this.leftNavs() }
            { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
