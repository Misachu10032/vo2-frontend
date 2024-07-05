import React, { useEffect, useState } from "react";
import "./App.css";

import { socket } from "./service/socket";
import Dashboard from "./components/Dashboard";
import LiveMap from "./components/LiveMap";

function App() {
  const [selectedTab, setSelectedTab] = useState("miner");
  const [currentTick, setCurrentTick] = useState(0);
  const [miners, setMiners] = useState([]);
  const [asteroids, setAsteroids] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const eventHandler = (data) => {
      setCurrentTick(data.currentTick);
      setMiners(data.miners);
      setAsteroids(data.asteroids);
      setPlanets(data.planets);
    };

    socket.on("tick", eventHandler);

    return () => {
      socket.off("tick", eventHandler);
    };
  }, []);

  return (
    <div className="App" >


        <Dashboard
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          currentTick={currentTick}
          miners={miners}
          asteroids={asteroids}
          planets={planets}
        />

        <LiveMap 
          
              currentTick={currentTick}
              planets={planets}
              asteroids={asteroids}
              miners={miners}
        />

    </div>
  );
}

export default App;
