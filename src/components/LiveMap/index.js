import React from 'react';
import styles from './LiveMap.module.css';
// import Objects from './Objects';
import PlanetObjects from './Objects';

const LiveMap = ({ currentTick, planets, asteroids,miners }) => {
  return (
    <div className={styles['live-map']}>
      <div className={styles['map-content']}>
        <div className={styles['current-year']}>
          {currentTick} year
        </div>
        {/* <Objects planets={planets} asteroids={asteroids} /> */}
        <PlanetObjects planets={planets} asteroids={asteroids} miners={miners}/>
      </div>
    </div>
  );
};

export default LiveMap;
