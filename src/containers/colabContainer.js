import React from 'react';
import User from '../components/user'
import RepositoryList from '../components/repositoryList'
import LoginButton from '../components/login/login'
import {Route} from 'react-router-dom'
import homeRoute from "../components/homeRoute"
import { headers } from '../authorization/headers';

class ColabContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      loggedIn: false,
      currentUser: "",
      user: {
        avatarUrl: "",
        username: "",
        bio: "",
        url: ""
      },
      repositories: []
    }
  }

  componentDidMount() {
    if (!this.state.loggedIn && localStorage.getItem("token")) {
      this.fetchUser()
      .then(data => {
        console.log(data)
      })
      // .then(data => {
      //   console.log(data)
        // this.setState({ currentUser: data.data.attributes[`display-name`], loggedIn: true })})
    }
  }

  fetchUser() {
    return fetch(`http://localhost:3000/api/v1/users/show`, { headers: headers() })
        .then(resp => resp.json())
  }

  handleCode = router => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/main")
    } else {
      fetch('http://localhost:3000/api/v1/home',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
          body:JSON.stringify({code:this.props.location.search.split("?code=")[1]})
        })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem("code", res.code);
          this.setState({currentUser: res.username})
        })
          return null;
      }
      return null;
    }




  // componentDidMount() {
  //   if (!this.state.loggedIn && localStorage.getItem("token")) {
  //
  //   }
//     return fetch('https://api.github.com/graphql', {
//  method: 'POST',
//  headers: {
//    'Accept': 'application/vnd.github.v4+json',
//    'Content-Type': 'application/json',
//    'Authorization': 'bearer ce14492a48de184ad0c00d92d458ab8cc63bf6b3'
// },
// body: JSON.stringify({
// "query": "{user(login: \"cionb25\") {login,avatarUrl,bio,url,repositories(last: 5){edges{node{description,descriptionHTML,shortDescriptionHTML,url,primaryLanguage{name},owner{login},name,languages(last: 6){edges{node{name}}}}}}}}"
// }),
// })
// .then(response => response.json())
// .then(data => {
//   this.setState({
//     avatarUrl:data.data.user.avatarUrl,
//     username:data.data.user.login,
//     bio:data.data.user.bio,
//     url: data.data.user.url,
//     repositories: data.data.user.repositories.edges
//   })
 // console.log('Here is the data: ', data.data.user)});
 //  }

  render() {
    return (
      <div>
        // <User userData={this.state}/>
        // <RepositoryList repositories={this.state.repositories}/>
        <LoginButton/>
        <Route exact path="/home" render={this.handleCode}/>
      </div>
    )
  }

}


export default ColabContainer;
