import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const User = (props) => {

  return (
    <Card>
      <Image src={props.avatarUrl} />
      <Card.Content>
        <Card.Header>
          {props.username}
        </Card.Header>
        <Card.Description>
          {props.bio}
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
