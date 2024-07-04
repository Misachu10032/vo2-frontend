import React, { useEffect, useState } from 'react';
import './App.css';

import logo from './assets/logo.svg';
import { socket } from './service/socket';


function App() {
  const [currentTick, setCurrentTick] = useState(0);

  useEffect(() => {
    const eventHandler = (data) => {

      setCurrentTick(data.currentTick);
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

    </div>
  );
}

export default App;
