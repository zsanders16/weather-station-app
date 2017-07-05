import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import { Grid, Menu, Input, Dropdown } from 'semantic-ui-react';
import { setNavbar} from '../actions/navbar';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, {name}) => {
    setNavbar(name, this.props.dispatch)
    this.setState({ activeItem: name })
  }

  leftNavs = () => {
    const { user, dispatch, history } = this.props;
    const { activeItem } = this.state;
    if(user.id) {
      return(
        <Menu pointing fluid>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='historical' active={activeItem === 'historical'} onClick={this.handleItemClick} />
          <Menu.Item name='local' active={activeItem === 'local'} onClick={this.handleItemClick} />
            <Dropdown item text='Maps'>
              <Dropdown.Menu>
                <Dropdown.Item name='barometric' onClick={this.handleItemClick}>Barometric</Dropdown.Item>
                <Dropdown.Item name='radar' onClick={this.handleItemClick}>Radar</Dropdown.Item>
                <Dropdown.Item name='satallite' onClick={this.handleItemClick}>Regional Satallite</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          <Menu.Item position='right' className='nb-border-right'>
            <Input
              action={{ type: 'submit', content: 'Go' }}
              placeholder='Search...'
              onSubmit={this.handleSearch} />
          </Menu.Item>
        </Menu>
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
          <Link to='/register'>
            <Menu.Item name='Register' />
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login' />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing fluid>
            <Menu.Item header>Weather Station</Menu.Item>
            { this.leftNavs() }
            { this.rightNavs() }
        </Menu>




        {/*}<Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>

        </Menu> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
