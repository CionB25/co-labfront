import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const User = ({userData}) => {
// console.log(userData.user)

  return (
    <Card>
      <Image src={userData.user.avatarUrl}/>
      <Card.Content>
        <Card.Header>
          {userData.user.username}
        </Card.Header>
        <Card.Description>
          {userData.user.bio}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default User;

/*
!array
  userRepos userData.data.user.repositories.edges)
  individual userRepos userData.data.user.repositories.edges[i].node
--------------------------------------------------------------------------
array?
          // <p>{props.userData.url}</p>

  userRepos userData[0].data.user.repositories.edges)
  individual userRepos userData[0].data.user.repositories.edges[i].node
*/
