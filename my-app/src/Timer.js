import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Time from './Time';
import fiveMusic from './betterdays5min.wav';
import tenMusic from './betterday10min.mp3';
import Sound from './Sound';
import 'tachyons';

class Timer extends Component {

  constructor(){

    super();
    this.state = {
      time: 0,
      sound: "on",
      volume: "loud",
      buttonActive: "",
      timerRunning: false,
      interval: 25 * 60,
    };
//binding methods to this   
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSound = this.handleSound.bind(this);
    
}

//Starts the timer
handleStart() {
                
  this.timer = setInterval(() => {
    
        this.setState((state) => {
                  return {...state,
                          interval: state.interval - 1,
                          timerRunning: true
                        }
                 }) }, 
        1000);
// Display Start on the console to check functionality
console.log("Start");

 // Control the background Music for Breaks

 this.relaxingFive = new Audio(fiveMusic);
 this.relaxingTen = new Audio(tenMusic);

 const playMusic = () => { 
      
        if (this.state.sound === "on") { 
            if (this.state.buttonActive === "shortBreak") {
                    this.relaxingFive.play();
            } 
            else if(this.state.sound === "off"){
              this.relaxingFive.pause();
            }
                        
            if (this.state.buttonActive === "longBreak") {
                    this.relaxingTen.play();
            }
            else if(this.state.sound === "off"){
          this.relaxingTen.pause();
            }
        }
    }
    playMusic()
}
//Start Ends here


//Stops the timer
handleStop() {
      console.log("Stop");
      this.setState({timerRunning: false})
      clearInterval(this.timer)
      this.state.buttonActive === "shortBreak" ? 
                     this.relaxingFive.pause() : 
                      this.relaxingTen.pause()
}

// Resets the Timer
handleReset() {
  console.log("Reset");
 const resetTimer = () => {
      if (this.state.buttonActive === "pomodoro" || this.state.buttonActive === "") {
          this.setState({interval: 25 * 60,
                         timerRunning: false})
          clearInterval(this.timer)
      }
      else if (this.state.buttonActive === "shortBreak") {
          this.setState({interval: 5 * 60,
                         timerRunning: false})
          clearInterval(this.timer)
      }
      else if (this.state.buttonActive === "longBreak") {
          this.setState({interval: 10 * 60,
                         timerRunning: false})
          clearInterval(this.timer)
       }
    }
 resetTimer()
}


//Control Alarm Audio
handleSound() {

const playSound = () => { 
  this.alarm = new Audio();
  this.alarm.src = "https://soundbible.com/grab.php?id=1441&type=wav";
  this.state.sound === "on" ? this.alarm.play() : this.alarm.pause();
  }
 playSound()
}


componentDidUpdate() {
     if (this.state.interval < 1 && this.state.timerRunning == true) {
        this.handleStop()
        this.handleSound()
        this.handleReset()
    }

}

setSound = (sound) => {
this.setState({
      sound : sound
   })
}



render() {

return <div className="mid-container" id="mid-container">
      <div className="timer-hud">
        <span className="hud-heading grow" id="pomodoro" onClick={() => this.setState({interval: (25 * 60), buttonActive: "pomodoro"})}> Pomodoro</span>
        <span className="hud-heading grow" id="shortBreak" onClick={() => this.setState({interval: (5 * 60), buttonActive: "shortBreak"})}>Short Break</span>
        <span className="hud-heading grow" id="longBreak" onClick={() => this.setState({interval: (10* 60), buttonActive: "longBreak"})}>Long Break</span>
      </div>

      
      
<Time time={this.state.interval}  />
<Sound sound={this.state.sound} setSound={this.setSound} /> 

      <div className="timer-controls">
        <span className="control-start grow shadow-4" onClick={this.handleStart}>Start</span>
        <span className="control-stop grow shadow-4" onClick={this.handleStop}>Stop</span>
        <span className="control-reset grow shadow-4" onClick={this.handleReset}>Reset</span>
      </div>
      
</div>

  }


}

export default Timer;