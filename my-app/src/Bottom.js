import React,{Component} from 'react';
import ReactDom from 'react-dom';
import tomatoPic from './tomato.jfif';
import 'tachyons';

class Bottom extends Component {

render(){
return <div>
  <article className="about" id="about">
    <h2>About</h2>
    <div className="pomodoro-text tc" align="left">
      Teffi is based on the Pomodoro timer technique, a time management
      method developed by Francesco Cirillo in the late 1980s. The
      technique uses a timer to break down work into intervals,
      traditionally 25 minutes in length, separated by short breaks. Each
      interval is known as a pomodoro, from the Italian word for 'tomato',
      after the tomato-shaped kitchen timer that Cirillo used as a
      university student.
    </div>
    <img src={tomatoPic} className="tomato-img grow" alt="tomato-timer-image" />
  </article>
  {/*Bottom-Container */}
  <div className="bottom-container">
    <br />
    <p>
      ©Teffi 2020 All rights reserved. | Proudly Designed by Akash Salian.
    </p>
    <br />
  </div>
</div>
}
}

export default Bottom;