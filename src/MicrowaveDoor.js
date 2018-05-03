import React, { Component } from 'react';
import './MicrowaveDoor.css';

class MicrowaveDoor extends Component {
    render() {
        let spaghettiStylin = {
            'opacity':'0.5',
            'marginTop' : '25%',
            'padding':'5%'
        }
        return (
            <div className="door--background__colour">
                <img style={ spaghettiStylin } src='http://az809444.vo.msecnd.net/image/3003707/0x0/0/recipe-pasta-pesto-verde-copy.png' alt="let me heat up some spaghetti code for u <3"/>
            </div>
         )
    }
}

export default MicrowaveDoor;