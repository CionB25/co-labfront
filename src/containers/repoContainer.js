import React from 'react';
import { Grid } from 'semantic-ui-react'
import RepositoryList from '../components/repositoryList';

class RepositoryContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      repositories: []
    }
  }

  componentDidMount() {
    // if (!this.repositories) {
      this.getRepositories()
    // }else{
    //   return null
    // }
  }

  getRepositories() {
    return fetch("http://localhost:3000/api/v1/repositories")
    .then(res => res.json())
    .then(repo => {
      this.setState({
        repositories: repo
      })
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Column floated='left' className="ui grid">
            <RepositoryList history={this.props.history}
            user={this.props.user.username}
            repositories={this.state.repositories}/>
        </Grid.Column>
      </Grid>
    )
  }

}

export default RepositoryContainer;
