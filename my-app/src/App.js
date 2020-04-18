import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Timer from './Timer';

import Bottom from './Bottom';
//import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import 'tachyons';




function App() {
  return (
    <div className="App">
    <Menu />
    <Timer />
    <Bottom />

    </div>
  );
}

export default App;
