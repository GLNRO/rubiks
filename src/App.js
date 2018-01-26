import React, {Component} from 'react';
import './App.css';
import SceneContainer from './scene/SceneContainer';

class App extends Component {

  render(){
    return(
      <div className="App">
        <h1>Rubik's Cube</h1>
        <SceneContainer />
      </div>);
  }
}

export default App;
