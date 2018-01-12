import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }, ()=>this.redirect(this.state.activeItem));
  }

  // handleNavbar() {
  //   // this.props.handleLogout()
  //   console.log(this.props)
  //   // this.props.history.push("/")
  // }

  redirect(to) {
      if (to === 'my account') {
        this.props.history.push("/my_account");
      } else if (to === 'requests') {
        this.props.history.push("/requests");
      } else if (to === 'repo feed') {
        this.props.history.push("/repo_feed");
      } else if (to === 'logout') {
        // this.props.handleLogout(this.props.user),
        localStorage.clear()
        this.props.history.push("/repo_feed");
      }
  }

  render() {

    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='my account' active={activeItem === 'my account'} onClick={this.handleItemClick} />
        <Menu.Item name='requests' active={activeItem === 'requests'} onClick={this.handleItemClick} />
        <Menu.Item name='repo feed' active={activeItem === 'repo feed'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

// switch (this.state.color) {
//   case "red":   return "#FF0000";
//   case "green": return "#00FF00";
//   case "blue":  return "#0000FF";
//   default:      return "#FFFFFF";
// }
