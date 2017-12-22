import React from 'react';
import User from '../components/user'
// import Navbar from './navbar'

const homeRoute = (params) => {


  let body = params.location.search.split("?code=")[1]
  let userData;

  fetch('http://localhost:3000/api/v1/home',{
    method:'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body:JSON.stringify({code:body})
  }).then(res => res.json()).then(res => {
    userData = res
    localStorage.setItem("code", userData.code)
  })

  return (
    <User userData={this.state}/>
  )
}

export default homeRoute;
// params.location.search.split("?code=")[1]
