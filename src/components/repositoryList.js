import React from 'react';
import RepositoryDetail from './repositoryDetail'

const RepositoryList = (props) => {
console.log(props)
// handleItemClick(){
//
// }

// console.log(repositories)
// console.log(currentUser);
  const repositoryItem = props.repositories.map(repo => {

    return <RepositoryDetail user={props} key={repo.name} repo={repo} />
  })

  return (
    <div>
    <h3>Repositories:</h3>
    <div className="ui cards">{repositoryItem}</div>
    </div>
  )
// console.log(props.currentUser)


}

export default RepositoryList;
// const {repositories} = props


// const repositoryItem = repositories.map(repo => {
//   return <RepositoryDetail key={repo.node.name} repo={repo} />
// })
