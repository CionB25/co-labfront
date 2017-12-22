import React from 'react'
// import { Segment } from 'semantic-ui-react'

const RepositoryDetail = ({repo}) => {
  console.log(repo.node.primaryLanguage.name)
  return (
    <div className="card">
      <div className="content">
        <div className="header">
          {repo.node.name}
        </div>
        <div className="meta">
          Main Language:{repo.node.primaryLanguage.name}
        </div>
        <div className="description">
          {repo.node.description}
        </div>
      </div>
    </div>
  )
}
export default RepositoryDetail;
