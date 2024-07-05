import React from 'react';
import Modal from '../../shared/Modal/index.js';
import MinerCreationForm from './MinerCreationForm/index.js';
import styles from './MinerCreationModal.module.css';
import closeButton from '../../../../assets/buttons/closeButton.svg';

const MinerCreationModal = ({
  defaultSelection,
  planets,
  miners,
  asteroids,
  onClose,
}) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={closeButton} alt='Close' />
          </button>
          <h2 className={styles.modalTitle}>Create a miner</h2>
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
