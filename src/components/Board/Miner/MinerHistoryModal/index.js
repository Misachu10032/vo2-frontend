import React, { useEffect, useState } from 'react';
import Modal from '../../shared/Modal';
import { getMinorHistoryStatusText } from '../../../../utils/get-status-text.helper';
import { getOneMinerHistory } from '../../../../service/api';
import styles from './MinerHistoryModal.module.css';
import { formatDate } from '../../../../utils/format-date.helper';
import loadingIcon from '../../../../assets/icons/loadingIcon.svg';
import closeButton from '../../../../assets/buttons/closeButton.svg';

const MinerHistoryModal = ({ miner, onClose }) => {
  const [history, setHistory] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      setIsLoading(true);
      const data = await getOneMinerHistory(miner._id);
      setHistory(data);
      setIsLoading(false);
    };

    getHistory().catch(console.error);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeButton} alt='Close' />
        </button>
        <h2 className={`${styles.title} ${styles.whiteText}`}>
          History of {miner.name}
        </h2>
        {isLoading ? (
          <img
            className={styles.loadingIcon}
            src={loadingIcon}
            alt='loadingIcon'
          />
        ) : (
          <React.Fragment>
            <table className={styles.table} cellPadding='5' cellSpacing='0'>
              <thead>
                <tr>
                  <th className={`${styles.whiteText}`}>Date</th>
                  <th className={`${styles.whiteText}`}>Year</th>
                  <th className={`${styles.whiteText}`}>Planet</th>
                  <th className={`${styles.whiteText}`}>Carry Capacity</th>
                  <th className={`${styles.whiteText}`}>Travel Speed</th>
                  <th className={`${styles.whiteText}`}>Mining Speed</th>
                  <th className={`${styles.whiteText}`}>Position</th>
                  <th className={`${styles.whiteText}`}>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <tr>
                      <td className={`${styles.lightGreyText}`}>
                        {formatDate(item.createdAt)}
                      </td>
                      <td className={`${styles.lightGreyText}`}>{item.year}</td>
                      <td className={`${styles.lightGreyText}`}>
                        {item.planet}
                      </td>
                      <td className={`${styles.lightGreyText}`}>
                        {item.capacity.current >= item.capacity.max ? (
                          <span className={styles.greenText}>
                            {item.capacity.current}/{item.capacity.max}
                          </span>
                        ) : (
                          `${item.capacity.current}/${item.capacity.max}`
                        )}
                      </td>
                      <td className={`${styles.lightGreyText}`}>
                        {item.speed.travel}
                      </td>
                      <td className={`${styles.lightGreyText}`}>
                        {item.speed.mining}
                      </td>
                      <td className={`${styles.lightGreyText}`}>
                        {Math.round(item.position.x)}.
                        {Math.round(item.position.y)}
                      </td>
                      <td className={`${styles.lightGreyText}`}>
                        {getMinorHistoryStatusText(item.status)}
                      </td>
                    </tr>
                    {index < history.length - 1 && (
                      <tr className={styles.dividingLine}>
                        <td colSpan='8'></td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        )}
      </div>
    </Modal>
  );
};

export default MinerHistoryModal;
