import React from 'react';

import { Button } from 'semantic-ui-react'


const LoginButton = () => {
  return (
    <div>
      <h1>Welcome To The Co-Lab!</h1>
      <h3>Please Sign In</h3>
      <Button basic color="teal" href='http://localhost:3000/api/v1/login'>Log In</Button>
    </div>
  )
}

export default LoginButton;
