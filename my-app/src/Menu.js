import React,{Component} from 'react';
import ReactDom from 'react-dom';
import settings from './settings-icon.png';
import watch from './Teffi.png';
import Timer from './Timer';
import Bottom from './Bottom';
import 'tachyons';

class Menu extends Component{

render (){

return <div className="Teffi">

<div className="fullNav">
    <div className="nav-bar">
      <nav title="main">
        <ul className="main-menu">
          <li><a href="#top-container"><img className="logo grow" src={watch} alt="logo"/></a></li>
          <li className="menu-item">
            <a className="menu-font dim" href="#top-container">Home </a>
          </li>
          <li className="menu-item">
            <a className="menu-font dim" href="#mid-container">Timer</a>
          </li>
          <li className="menu-item">
            <a className="menu-font dim" href="#about">About</a>
          </li>
          <li>
            <img className="settings grow" src={settings} alt="settings" />
          </li>
        </ul>
      </nav>
    </div>
    </div>

    <div className="top-container" id="top-container">
      <div className="bg-filter">
        <img className="clock grow" src={watch} alt="teffi-clock" />
        <h1 className="main-title">Teffi.</h1>
        <h3>Study Like A Pro!</h3>
      </div>
    </div>
  
</div>



  }
}

export default Menu;