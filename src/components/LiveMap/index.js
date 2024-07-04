import React from 'react';
import styles from './LiveMap.module.css'; // Import CSS module

const LiveMap = () => {
  return (
    <div className={styles['live-map']}>
      <div className={styles['map-content']}></div>
    </div>
  );
};

export default LiveMap;
