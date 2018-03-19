import React from 'react';
import User from '../components/user';
import RepositoryList from '../components/repositoryList';

class UserContainer extends React.Component {

  constructor(props) {
    super(props)
// console.log(props)
    this.state = {
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
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signin');
    } else {
      this.getCurrentUser().then(user => {
        if (user.error) {
          this.props.history.push('/signin');
        } else {
          // console.log(user.username);
          // console.log(user);
          // console.log(localStorage);
          this.setState({
            user: {
              avatarUrl: user.avatarUrl,
              username: user.username,
              bio: user.bio,
              url: user.url
            },
            repositories: user.repositories
          })
        }
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

   handleSignIn = (user) => {
     this.setState({ user: {
       avatarUrl: user.avatarUrl,
       username: user.username,
       bio: user.bio,
       repositories: user.repositories
       }
     })
   }


  render() {
    // console.log(this.state.user)
    // console.log(this.state.repositories)

    return (
      <div>
        <User userData={this.props}/>
        <RepositoryList history={this.props.history} user={this.props.user.username} repositories={this.state.repositories}/>
      </div>
    )
  }
}

export default UserContainer;
