import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
// import UserShow from '../../components/userShow'



class SignUp extends React.Component {


  constructor(props) {
      super(props)

      this.state = {
        username: "",
        password: "",
        email: ""
      }
    }

    fetchUser() {
      let url = "http://localhost:3000/api/v1/home"
      let headers = {'Content-Type':'application/json','Accept':'application/json'}
      let body = JSON.stringify({username:this.state.username, email:this.state.email, password:this.state.password})
      let config = {method:"POST",body:body,headers:headers}

      return fetch(url,config)
      .then(res => res.json())
      .then(user => {
        // console.log(user);
        this.props.handleLogin(user);
        this.props.history.push('/my_account');
      })
    }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchUser()
  }




  render() {
    // console.log(this.props.state)
    return (

      <Segment inverted>
        <h2>Welcome to The Co-Lab!</h2>

        <h3>Please Sign In</h3>

        <Form inverted onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input label='Github Username' placeholder="Github Username" type="text" name="username" value={this.state.username} required/>
            <Form.Input label='Email' placeholder="Email" type="text" name="email" value={this.state.email} required/>
            <Form.Input label='Password' placeholder="Password" type="text" name="password" value={this.state.password} required/>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignUp;
