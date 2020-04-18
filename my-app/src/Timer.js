import React,{Component} from 'react';
import ReactDom from 'react-dom';
import 'tachyons';

class Timer extends Component {

render(){

return <div className="mid-container" id="mid-container">
      <div className="timer-hud">
        <span className="hud-heading grow"> Pomodoro</span>
        <span className="hud-heading grow">Short Break</span>
        <span className="hud-heading grow">Long Break</span>
      </div>

      <div className="tomato-timer ma0">
      <h1 className="twentyfive fw2 black-90">
 25:00
  </h1>

      </div>
      <div className="timer-controls">
        <span className="control-start grow shadow-4">Start</span>
        <span className="control-stop grow shadow-4">Stop</span>
        <span className="control-reset grow shadow-4">Reset</span>
      </div>
      
</div>

  }


}

export default Timer;