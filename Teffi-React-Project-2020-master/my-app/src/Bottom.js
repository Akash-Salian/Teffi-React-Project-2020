import React,{Component} from 'react';
import tomatoPic from './tomato.jfif';
import 'tachyons';

class Bottom extends Component {

render(){
return <div>
  <article className="about" id="about">
    <h2 className="dim">About</h2>
    <div className="pomodoro-text tl">
      Teffi a.k.a Time Efficiency, is based on the Pomodoro timer technique, a time management
      method developed by Francesco Cirillo in the late 1980s. <br/><br/>The
      technique uses a timer to break down work into intervals,
      traditionally 25 minutes in length, separated by short breaks either of 5 minutes or 10 minutes. Each
      interval is known as a pomodoro, from the Italian word for 'tomato',
      after the tomato-shaped kitchen timer that Cirillo used as a
      university student.
    </div>
    <img src={tomatoPic} href="#top-container" className="tomato-img grow ma4" alt="tomato-timer" />
  
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