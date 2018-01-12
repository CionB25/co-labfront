import React from 'react';
import RequestList from '../components/requestList';

class RequestContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      requested: [],
      requesting: []
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    } else {
      this.getCurrentUser().then(user => {
        if (user.error) {
          this.props.history.push('/login');
        } else {
          console.log(user.username)
          if (user.username) {
            console.log(this.props.user.username);
            this.handleUser(user.username)
          } else {
            return null
          }
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

  handleUser = (thing) => {
      // console.log("Nah")
      let url = "http://localhost:3000/api/v1/my_requests"
      let headers = {'Content-Type':'application/json','Accept':'application/json'}
      let body = JSON.stringify({username: thing})
      let config = {method:"POST",body:body,headers:headers}
        console.log(this.props.user)
        // console.log(this.props.repo.name);
        return fetch(url, config)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.setState({
            requesting: res.mine,
            requested: res.theirs
          })
          console.log(res.mine)
        })
    }


  render() {
    // console.log(this.props.user.username);
    return (
      <div>
        <RequestList data={this.state}/>
      </div>
    )
  }

}

export default RequestContainer;
