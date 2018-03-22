import React from 'react';
import UserContainer from './userContainer'
import RepositoryContainer from './repoContainer'
import RequestContainer from './requestContainer'
import Navbar from '../components/navbar'
import Login from '../components/login/login'
import SignUp from '../components/login/signUp'
import {Route} from 'react-router-dom'
import LoginContainerPage from '../components/login/loginContainerPage'

class ColabContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      loggedIn: false,
      auth: {user: {}}
    }
  }
// but currentUser not in state -- redirect
  componentDidMount() {
    const token = localStorage.getItem('token');

    if(token) {
      this.getCurrentUser().then(data => {
        const currentUser = {user: data};
        this.setState({auth: currentUser});
      })
    }
  }

   getCurrentUser = () => {
    const token = localStorage.getItem("token")
    return fetch('http://localhost:3000/api/v1/current_user', {headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization:token}})
    .then(res => res.json());
  }

  handleLogin = (user) => {
    const currentUser = {user: user};
    // console.log(user)
    this.setState({auth: currentUser});
    localStorage.setItem('token', user.jwt);
  };

  handleLogout = (user) => {
    this.setState({
      auth: {user: {}}
    });
    localStorage.removeItem('token');
  }

  handleChange = (event) => {
    // console.log(event)

  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({

    })
  }

  render() {
    // console.log(this.state.auth)

    return (
      <div>
        <Route render={(props) => {
          return <Navbar {...props} user={this.state.auth.user} handleLogout={this.handleLogout}/>
        }}/>

        <Route path="/repo_feed" render={(props) => {
          return <RepositoryContainer {...props} user={this.state.auth.user}/>
        }}/>

        <Route path="/login" render={(props) => {

          return <Login {...props} handleLogin={this.handleLogin}/>}
        }/>
        <Route path="/signup" render={(props) => {
          return <SignUp {...props} handleLogin={this.handleLogin} />}
        }/>
        <Route path="/my_account"  render={(props) => {
          return <UserContainer {...props} user={this.state.auth.user}/>
        }}/>

        <Route path="/signin" render={(props) => {
          return <LoginContainerPage {...props}/>
        }}/>

        <Route path="/requests" render={(props) => {
          return <RequestContainer {...props} user={this.state.auth.user}/>
        }}/>

      </div>
    )
  }

}


export default ColabContainer;

// fetchUser() {
//   return fetch('http://localhost:3000/api/v1/users/9', {headers: {
//         'Content-Type': 'application/json',
//         Accepts: 'application/json',
//         Authorization:token}})
//       .then(res => res.json()).then(user => console.log(user))
// }

// fetchAllRepos() {
//   return fetch('http://localhost:3000/api/v1/repositories', {headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json',
//       Authorization:token}})
//     .then(res => res.json()).then(user => console.log(user))
// }
