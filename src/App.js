import React, { Component } from 'react';
import './App.css';
import MicrowaveFrame from './MicrowaveFrame';
import MicrowaveDoor from './MicrowaveDoor.js'
import MicrowaveHandle from './MicrowaveHandle';
import MicrowaveDivider from './MicrowaveDivider';
import MicrowaveTimer from './MicrowaveTimer';
import MicrowaveButton from './MicrowaveButton';

class App extends Component {
  render() {
    let microwaveButtons = ["1",'2','3','4','5','6','7','8','9','stop','0','start'];
    let microwaveButtonsJsx = microwaveButtons.map((element, i) => {
      return <MicrowaveButton number={element} key={i} />
    })
    return (
      <div className="App">
        {/* microwave frame */}
        <MicrowaveFrame />
        <MicrowaveDoor />
        <MicrowaveHandle />
        <MicrowaveDivider />
        <MicrowaveTimer />
        <div className='microwave--button__container'>
          {microwaveButtonsJsx}
        </div>
      </div>
    );
  }
}

export default App;
