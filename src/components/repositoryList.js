import React from 'react';
import RepositoryDetail from './repositoryDetail'

const RepositoryList = (props) => {

  const repositoryItem = props.repositories.map(repo => {

    return <RepositoryDetail user={props} key={repo.name} repo={repo} />
  })

  return (
    <div>
    <h3>Repositories:</h3>
    <div className="ui cards">{repositoryItem}</div>
    </div>
  )
}

export default RepositoryList;
