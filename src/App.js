import React, { useEffect, useState } from 'react';
import './App.css';


import logo from './assets/logo.svg';
import { socket } from './service/socket';
import MinerList from './components/DashBoard/Miner/MinerList';


function App() {
  const [currentTick, setCurrentTick] = useState(0);
  const [miners, setMiners] = useState([]);

  useEffect(() => {
    const eventHandler = (data) => {

      setCurrentTick(data.currentTick);
      setMiners(data.miners)
      console.log(data);
      console.log(currentTick)
    };

    socket.on('tick', eventHandler);

    return () => {
      socket.off('tick', eventHandler);
    };
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="Logo" />|
      <div>{currentTick}</div>
      <MinerList miners={miners}/>

    </div>
  );
}

export default App;
