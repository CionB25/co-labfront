import React from 'react';
import Requested from './requested'
import {Grid, Container} from 'semantic-ui-react'

const RequestedList = (props) => {
  console.log(props);

  const requested = props.repos.map(repo => {

    return <Requested key={repo.name} repo={repo} />
  })

  return (

    <Container>
      <Grid.Column>
        <h3>Collab Requests</h3>
        <div className="ui cards">{requested}</div>
      </Grid.Column>
    </Container>
  )
}

export default RequestedList;
// <Container>
// <Grid.Row>
// <Grid.Column floated='right' width={5}>
// <h3>Pending Requests</h3>
// <div className="ui cards">{requesting}</div>
// </Grid.Column>
// </Grid.Row>
// </Container>
// </Grid>
