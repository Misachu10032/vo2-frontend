import React from 'react';
import minerTabInactive from '../../../../assets/tabs/minerTabInactive.svg';
import asteroidsTabInactive from '../../../../assets/tabs/asteroidsTabInactive.svg';
import planetTabInactive from '../../../../assets/tabs/planetTabInactive.svg';

import minerTabActive from '../../../../assets/tabs/minerTabActive.svg';
import asteroidsTabActive from '../../../../assets/tabs/asteroidsTabActive.svg';
import planetTabActive from '../../../../assets/tabs/planetTabActive.svg';

import styles from './Header.module.css'; 

function Header({ selectedTab, setSelectedTab }) { 
  return (
    <div className={styles.tabRow}>
      {selectedTab === 'miner' ? (
        <img
          className={styles.tab}
          src={minerTabActive}
          alt="miner-tab-active"
          onClick={() => setSelectedTab('miner')}
        />
      ) : (
        <img
          className={styles.tab}
          src={minerTabInactive}
          alt="miner-tab-inactive"
          onClick={() => setSelectedTab('miner')}
        />
      )}

      {selectedTab === 'asteroids' ? (
        <img
          className={styles.tab}
          src={asteroidsTabActive}
          alt="asteroids-tab-active"
          onClick={() => setSelectedTab('asteroids')}
        />
      ) : (
        <img
          className={styles.tab}
          src={asteroidsTabInactive}
          alt="asteroids-tab-inactive"
          onClick={() => setSelectedTab('asteroids')}
        />
      )}

      {selectedTab === 'planet' ? (
        <img
          className={styles.tab}
          src={planetTabActive}
          alt="planet-tab-active"
          onClick={() => setSelectedTab('planet')}
        />
      ) : (
        <img
          className={styles.tab}
          src={planetTabInactive}
          alt="planet-tab-inactive"
          onClick={() => setSelectedTab('planet')}
        />
      )}
    </div>
  );
}

export default Header;
