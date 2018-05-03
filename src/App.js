import React, { Component } from 'react';
import './App.css';
// import the components i need
import MicrowaveFrame from './MicrowaveFrame';
import MicrowaveDoor from './MicrowaveDoor';
import MicrowaveHandle from './MicrowaveHandle';
import MicrowaveDivider from './MicrowaveDivider';
import MicrowaveTimer from './MicrowaveTimer';
import MicrowaveButton from './MicrowaveButton';

class App extends Component {
  // let's make a time state:
  constructor() {
    super();
    this.state = {
      foodTimer : 0
    }
  }

  // functionName = (argument1, argument2 ... argumentN) => {
    // function body goes here
  //}
  incrementTime = (time) => {
    this.setState({
      foodTimer : this.state.foodTimer + time
    })
  }

  render() {
    let MicrowaveButtons = ['1','2','3','4','5','6','7','8','9','+30','0','Start'];

    // i'm making an empty array that will hold 
    let MicrowaveButtonsJsx = [];

    // example of the .map() higher order function i can use
    // let MicrowaveButtonsJsx = MicrowaveButtons.map( (elements, index) => {
    //   return <MicrowaveButton number={elements}/>
    // })

    // i loop through each of the microwave buttons and push a component with
    //  correct handlers and button text into the above array
    for (let i = 0; i < MicrowaveButtons.length; i++) {
      if (!isNaN(MicrowaveButtons[i])) {
        // we'll take the number from MicrowaveButton array and turn it into a number
        let buttonNum = Number(MicrowaveButtons[i]);
        // push component into array
        MicrowaveButtonsJsx.push(
          <MicrowaveButton plusTime = {this.incrementTime} number = {MicrowaveButtons[i]} buttonNum = {buttonNum} />
        )
      }
      // push the "start" button into an array
      else {
        MicrowaveButtonsJsx.push(
          <MicrowaveButton plusTime = {this.incrementTime} number = {MicrowaveButtons[i]} buttonNum = {0} />
        )
      }
    }

    return (
      <div className = "App">
        <MicrowaveFrame />
        <MicrowaveDoor />
        <MicrowaveHandle />
        <MicrowaveDivider />
        {/* the timer component needs the time state! */}
        <MicrowaveTimer timer = {this.state.foodTimer} />
        <div className='microwave--button__container'>
          { MicrowaveButtonsJsx }
        </div>
      </div>
    )
  }

}

export default App;
