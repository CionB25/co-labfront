import React from 'react';
import RepositoryDetail from './repositoryDetail'

const RepositoryList = (props) => {
  const {repositories} = props

  const repositoryItem = repositories.map(repo => {
    return <RepositoryDetail key={repo.node.name} repo={repo} />
  })
  return (
    <div className="ui cards">{repositoryItem}</div>
  )
}

export default RepositoryList;
