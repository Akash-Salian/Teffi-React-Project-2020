import React from 'react';
import './App.css';
import Menu from './Menu';
import Timer from './Timer';
import Bottom from './Bottom';
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
