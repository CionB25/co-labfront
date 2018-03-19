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

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    const repos = this.state.repositories
    const mixed = this.shuffle(repos)

    return (
      <Grid>
        <Grid.Column floated='left' className="ui grid">
            <RepositoryList history={this.props.history}
            user={this.props.user.username}
            repositories={mixed}/>
        </Grid.Column>
      </Grid>
    )
  }

}

export default RepositoryContainer;
