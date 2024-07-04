import React from 'react';


import styles from './MinerCreationModal.module.css';
import Modal from '../../shared/Modal/index.js';
import MinerCreationForm from './MinerCreationForm/index.js';

const MinerCreationModal = ({ defaultSelection, planets, miners,asteroids, onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            ✖
          </button>
          <h2>Create a miner</h2>
          <MinerCreationForm
            defaultSelection={defaultSelection}
            planets={planets}
            miners={miners}
            asteroids={asteroids}
            onClose={onClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MinerCreationModal;
