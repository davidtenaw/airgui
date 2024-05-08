import React from 'react';
import './App.css';
import './Components/Station.css';
import Station from './Components/Station';
import ControlTower from './Components/ControlTower';

function App() {
  //const stationNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="App">
      <ControlTower></ControlTower>
    </div>
  );
}

export default App;


