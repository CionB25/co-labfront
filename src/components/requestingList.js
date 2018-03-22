import React from 'react';
import Requesting from './requesting'
import Requested from './requested'
import {Grid, Container, Divider} from 'semantic-ui-react'

const RequestingList = (props) => {
  console.log(props);
// console.log(props.data.requested)
// handleItemClick(){
//
// }

// console.log(repositories)
// console.log(currentUser);
  // const requested = props.data.requested.map(repo => {
  //
  //   return <Requested key={repo.name} repo={repo} />
  // })

  const requesting = props.repos.map(repo => {

    return <Requesting key={repo.name} repo={repo} />
  })

  return (



    <Container>
    <Grid.Column>

    <h3>Pending Requests</h3>
    <div className="ui cards">{requesting}</div>

    </Grid.Column>
    </Container>


  )
// console.log(props.currentUser)


}

export default RequestingList;
// <Container>
// <Grid.Row>
// <Grid.Column floated='right' width={5}>
// <h3>Pending Requests</h3>
// <div className="ui cards">{requesting}</div>
// </Grid.Column>
// </Grid.Row>
// </Container>
// </Grid>
