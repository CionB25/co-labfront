import React from 'react';
import Requesting from './requesting'
import Requested from './requested'
import {Grid} from 'semantic-ui-react'

const RepositoryList = (props) => {
console.log(props.data.requested)
// handleItemClick(){
//
// }

// console.log(repositories)
// console.log(currentUser);
  const requested = props.data.requested.map(repo => {

    return <Requested key={repo.name} repo={repo} />
  })

  const requesting = props.data.requesting.map(repo => {

    return <Requesting key={repo.name} repo={repo} />
  })

  return (

    <Grid  >
      <Grid.Row>
        <Grid.Column floated='left' width={5}>
          <div className="ui cards">{requested}</div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated='right' width={5}>
          <div className="ui cards">{requesting}</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
// console.log(props.currentUser)


}

export default RepositoryList;
// <h3>Repositories:</h3>
// <div className="ui cards">{repositoryItem}</div>
// <div>
//   <div className="ui cards">{requested}</div>
//   <div className="ui cards">{requesting}</div>
// </div>
