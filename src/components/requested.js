import React from 'react';
import {Button} from 'semantic-ui-react';

const Requested = (props) =>  {
  // console.log(props.repo.name);

  // const handleRequest = () => {
  //   let url = "http://localhost:3000/api/v1/request_repo"
  //   let headers = {'Content-Type':'application/json','Accept':'application/json'}
  //   let body = JSON.stringify({username: props.user.user, reponame: props.repo.name})
  //   let config = {method:"POST",body:body,headers:headers}
  //     // console.log(props.user.user)
  //     // console.log(props.repo.name);
  //     return fetch(url, config)
  //     .then(res => res.json())
  //     .then(res => {
  //       // if (res.error) {
  //       //   props.user.history.push('/login');
  //       // } else {
  //         alert("Request Received")
  //       // }
  //     })
  //   }
  let user = props.repo.owner_username
  let repo = props.repo.name.split(" ").join('-')
  // let repo = 'co labfront'.split(" ").join('-')
  //
  // let user = 'CionB25'
  // let repo = 'colabBack'
  // CionB25/colabBack
  let url = "https://github.com/" + `${user}/${repo}` + "/settings/collaboration"


  return (
    <div className="ui red card">
      <div className="content">
      <div className="header">{props.repo.name}</div>
      <div className="raised">Username: {props.repo.owner_username}</div>
      <div className="description">{props.repo.description}</div>
      <div className="meta">  {props.repo.primaryLanguage} </div>

        <a href={url} target="_blank">Send Repo Invite</a>


      </div>
    </div>
  )

}

export default Requested
