import React from 'react';
import styles from './Dashboard.module.css';
import logo from '../../assets/logo.svg';
import dividingLine1 from '../../assets/line/dividingLine1.svg';
import MinerList from './Miner/MinerList';
import AsteroidList from './Asteroid/AsteroidList';
import PlanetList from './Planet/PlanetList';
import Header from './shared/Header';

const Dashboard = ({
  selectedTab,
  setSelectedTab,
  miners,
  asteroids,
  planets,
}) => {
  return (
    <div className={styles.dashboard}>
      <img className={styles.logo} src={logo} alt='Logo' />

      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <img className={styles.line} src={dividingLine1} alt='dividingLine1' />
      {selectedTab === 'miner' && <MinerList miners={miners} />}
      {selectedTab === 'asteroids' && <AsteroidList asteroids={asteroids} />}
      {selectedTab === 'planet' && (
        //passing down all data, because mineCreation requires all data for validation
        <PlanetList planets={planets} miners={miners} asteroids={asteroids} />
      )}
    </div>
  );
};

export default Dashboard;
