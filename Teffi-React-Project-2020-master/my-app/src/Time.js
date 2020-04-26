import React, { Component } from 'react';
import {secondsToString} from './Timeutils';

export default class Time extends Component {

    render() {
        return (
            <div className="tomato-timer" >
                <h1 className="twentyfive fw2 black-90 dim" onClick={this.props.timerRunning ? this.props.handleStop : this.props.handleStart}>
                    {secondsToString(this.props.time)} </h1>
            </div>
        );
    }
}
