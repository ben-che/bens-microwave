import React, { Component } from 'react';
import './App.css';
import MicrowaveFrame from './MicrowaveFrame';
import MicrowaveDoor from './MicrowaveDoor.js'
import MicrowaveHandle from './MicrowaveHandle';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* microwave frame */}
        <MicrowaveFrame />
        <MicrowaveDoor />
        <MicrowaveHandle />
      </div>
    );
  }
}

export default App;
