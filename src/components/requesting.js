import React from 'react';

const Requesting = (props) =>  {
  console.log(props)
  return (
    <div className="ui green card">
      <div className="content">
      <div className="header">{props.repo.name}</div>
      <div className="raised">Username: {props.repo.owner_username}</div>
      <div className="description">{props.repo.description}</div>
      <div className="meta">  {props.repo.primaryLanguage} </div>
        <div className='ui two buttons'>


        </div>
      </div>
    </div>
  )

}

export default Requesting
  // <Button basic onClick={handleRequest} color='blue'>Request To Collaborate</Button>
