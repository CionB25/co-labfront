import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';



class Login extends React.Component {


  constructor(props) {
      super(props)
      // const {currentUser} = props

      this.state = {
        email: "",
        password: "",
        error: false
      }
    }

    fetchUser() {
      let url = "http://localhost:3000/api/v1/auth"
      let headers = {'Content-Type':'application/json','Accept':'application/json','Authorization': localStorage.getItem('jwt')}
      let body = JSON.stringify({email:this.state.email, password:this.state.password})
      let config = {method:"POST",body:body,headers:headers}

      return fetch(url,config)
    }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchUser()
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        this.setState({error: true})
      } else {
        // console.log('response from loggin in', user)
        this.props.handleLogin(user);
        this.props.history.push('/my_account')
        // update to user account OR ALL respositories
      }
    })
  }




  render() {
    // console.log("Login props biz", this.props.history)
    return (
      <div>
      {this.state.error ? <h1>Try Again...</h1> : null}
        <Segment inverted>
          <h2>Welcome to The Co-Lab!</h2>

          <h3>Please Sign In</h3>

          <Form inverted color='blue' onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input label='Email' placeholder="Email" type="text" name="email" value={this.state.email} required/>
              <Form.Input label='Password' placeholder="Password" type="text" name="password" value={this.state.password} required/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}

export default Login;
