import React, { Component } from 'react';
import './MicrowaveButton.css';

class MicrowaveButton extends Component {
    render() {
        return (
            <div className="button--background__color">
                <p> {this.props.number} </p>
            </div>
        )
    }
}

export default MicrowaveButton;
