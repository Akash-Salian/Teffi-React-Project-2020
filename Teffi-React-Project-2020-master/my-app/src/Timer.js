import React, { Component } from 'react';
import Time from './Time';
import fiveMusic from './betterdays5min.wav';
import tenMusic from './betterday10min.mp3';
import Sound from './Sound';
import 'tachyons';

//Initializing Global Background audio. 
const relaxingFive = new Audio(fiveMusic);
const relaxingTen = new Audio(tenMusic);


export default class Timer extends Component {

  //Constructor to create states
  constructor() {
    super();
    this.state = {
      time: 0,
      sound: "on",
      buttonActive: "",
      timerRunning: false,
      interval: 25 * 60,
      resetTimer: false,
    };

    //Binding all methods to this   
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSound = this.handleSound.bind(this);
    this.handleChangeTimer = this.handleChangeTimer.bind(this);
  }
  //Constructor Ends

  //Starts the timer and plays music
  handleStart() {
    if (this.state.timerRunning === false) {
      this.timer = setInterval(() => {

        this.setState((state) => {
          return {
            ...state,
            interval: state.interval - 1,
            timerRunning: true,
            resetTimer: false,

          }
        })
      },
        1000);
      // Display Start on the console to check functionality
      console.log("Start");

      // Control the background Music for Breaks
      const playMusic = () => {

        if (this.state.sound === "on") {
          if (this.state.buttonActive === "shortBreak") {
            relaxingFive.play();
          }
          else if (this.state.sound === "off") {
            relaxingFive.pause();
          }

          if (this.state.buttonActive === "longBreak") {
            relaxingTen.play();
          }
          else if (this.state.sound === "off") {
            relaxingTen.pause();
          }
        }
      }
      playMusic()
    }
  }
  //Start Timer Ends here


  //Stops the timer and pauses the music
  handleStop() {
    console.log("Stop");
    this.setState({ timerRunning: false })
    clearInterval(this.timer)
    this.state.buttonActive === "shortBreak" ?
      relaxingFive.pause() :
      relaxingTen.pause()
  }

  // Resets the Timer and initializes the Audio to 0 timestamp. 
  handleReset() {
    relaxingFive.currentTime = 0;
    relaxingTen.currentTime = 0;
    console.log("Reset");
    const resetTimer = () => {
      if (this.state.buttonActive === "pomodoro" || this.state.buttonActive === "") {
        this.setState({
          interval: 25 * 60,
          timerRunning: false,
          resetTimer: true,
        })
        clearInterval(this.timer)
      }
      else if (this.state.buttonActive === "shortBreak") {
        this.setState({
          interval: 5 * 60,
          timerRunning: false,
          resetTimer: true,
        })
        clearInterval(this.timer)
        relaxingFive.pause();
      }
      else if (this.state.buttonActive === "longBreak") {
        this.setState({
          interval: 10 * 60,
          timerRunning: false,
          resetTimer: true,
        })
        clearInterval(this.timer)
        relaxingTen.pause();
      }
    }
    resetTimer()
  }
  //Reset Timer ends

  //Controls Alarm Audio when timer stops
  handleSound() {
    const playSound = () => {
      this.alarm = new Audio();
      this.alarm.src = "https://soundbible.com/grab.php?id=1441&type=wav";
      this.state.timerRunning === false ? this.alarm.pause() : this.alarm.play();
    }
    playSound()
  }

  //Checks timer is 0 and stops, plays ding and resets the timer.
  componentDidUpdate() {
    if (this.state.interval < 1 && this.state.timerRunning === true) {
      this.handleStop()
      this.handleSound()
      this.handleReset()
    }
  }

  //Sets the state to off/on from the Sound.js component
  setSound = (sound) => {
    this.setState({
      sound: sound
    })
  }


  //Swtiching Between Timer and helps to stop the music playing in the background. 
  handleChangeTimer(options) {
    this.setState(options)
    relaxingFive.currentTime = 0;
    relaxingTen.currentTime = 0;
    relaxingFive.pause()
    relaxingTen.pause()
    this.setState({
      timerRunning: false,
    })
    clearInterval(this.timer)
  }



  render() {
    return <div className="mid-container" id="mid-container">
      <div className="timer-hud">
        <span className="hud-heading grow" id="pomodoro" onClick={() => this.handleChangeTimer({ interval: (25 * 60), buttonActive: "pomodoro" })}> Pomodoro</span>
        <span className="hud-heading grow" id="shortBreak" onClick={() => this.handleChangeTimer({ interval: (5 * 60), buttonActive: "shortBreak" })}>Short Break</span>
        <span className="hud-heading grow" id="longBreak" onClick={() => this.handleChangeTimer({ interval: (10 * 60), buttonActive: "longBreak" })}>Long Break</span>
      </div>

      <Time time={this.state.interval} handleStart={this.handleStart}
        handleStop={this.handleStop} timerRunning={this.state.timerRunning} />

      <Sound sound={this.state.sound} setSound={this.setSound} timerRunning={this.state.timerRunning}
        music={this.state.buttonActive === "shortBreak" ? relaxingFive : relaxingTen} />

      <div className="timer-controls">
        <span className="control-start grow shadow-4" onClick={this.handleStart}> Start</span>
        <span className="control-stop grow shadow-4" onClick={this.handleStop}>Stop</span>
        <span className="control-reset grow shadow-4" onClick={this.handleReset}>Reset</span>
      </div>

    </div>
  }
}
