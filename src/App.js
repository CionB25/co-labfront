import React from 'react';
// import { Route } from 'react-router-dom';
// import homeRoute from './components/homeRoute'
import ColabContainer from './containers/colabContainer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <ColabContainer/>
      </div>
    );
  }
}


export default App;
