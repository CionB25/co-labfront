import React from 'react'
import { Segment, Button, Divider } from 'semantic-ui-react'

const LoginContainerPage = (props) => {

  console.log(props.history);

  const handleLogin = () => {
    console.log("hi");
    props.history.push("/login")
  }

  const handleSignUp = () => {
    console.log("nah");
    props.history.push("/signup")
  }

  return (<Segment padded>
      <Button primary fluid onClick={handleLogin}>Login</Button>
      <Divider horizontal>Or</Divider>
      <Button secondary fluid onClick={handleSignUp}>Sign Up Now</Button>
    </Segment>)
  }

export default LoginContainerPage
