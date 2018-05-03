import React, { Component } from 'react';
import './MicrowaveTimer.css';

class MicrowaveTimer extends Component {
    render() {
        return (
            <div className="timer--background__color">
                <div className="timer--number__container">
                    {this.props.timer}  
                </div>
            </div>
        )
    }
}

export default MicrowaveTimer;
