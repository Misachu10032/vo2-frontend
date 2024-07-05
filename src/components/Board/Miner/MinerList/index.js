import React, { useState } from 'react';
import { getMinorStatusText } from '../../../../utils/get-status-text.helper';
import MinerHistoryModal from '../MinerHistoryModal';
import styles from './MinerList.module.css';

const MinerList = ({ miners }) => {
  const [selectedMiner, setSelectedMiner] = useState(null);

  const handleOpenMinerHistoryModal = (miner) => {
    setSelectedMiner(miner);
  };

  const handleCloseModal = () => {
    setSelectedMiner(null);
  };

  return (
    <div>
      <table className={styles.table} cellPadding='5' cellSpacing='0'>
        <thead>
          <tr>
            <th className={`${styles.smallColumn} ${styles.whiteText}`}>
              Name
            </th>
            <th className={`${styles.smallColumn} ${styles.whiteText}`}>
              Planet
            </th>
            <th className={`${styles.mediumColumn} ${styles.whiteText}`}>
              Carry Capacity
            </th>
            <th className={`${styles.smallColumn} ${styles.whiteText}`}>
              Travel Speed
            </th>
            <th className={`${styles.smallColumn} ${styles.whiteText}`}>
              Mining Speed
            </th>
            <th className={`${styles.mediumColumn} ${styles.whiteText}`}>
              Position
            </th>
            <th className={`${styles.largeColumn} ${styles.whiteText}`}>
              Status
            </th>
          </tr>
          <tr className={styles.dividingLine}>
            <td colSpan='7'></td>
          </tr>
        </thead>
        <tbody>
          {miners.map((miner, index) => (
            <React.Fragment key={miner._id}>
              <tr>
                <td
                  className={`${styles.nameColumn} ${styles.whiteTextWithUnderLine}`}
                  onClick={() => handleOpenMinerHistoryModal(miner)}
                  style={{ cursor: 'pointer' }}
                >
                  {miner.name}
                </td>
                <td
                  className={`${styles.planetColumn} ${styles.lightGreyText}`}
                >
                  {miner.planet.name}
                </td>
                <td
                  className={`${styles.carryCapacityColumn} ${styles.lightGreyText}`}
                >
                  {miner.carryCapacity === 200 ? (
                    <span className={styles.greenText}>
                      {miner.carryCapacity}/200
                    </span>
                  ) : (
                    `${miner.carryCapacity}/200`
                  )}
                </td>
                <td className={`${styles.lightGreyText}`}>
                  {miner.travelSpeed}
                </td>
                <td className={`${styles.lightGreyText}`}>
                  {miner.miningSpeed}
                </td>
                <td className={`${styles.lightGreyText}`}>
                  {Math.round(miner.x)}.{Math.round(miner.y)}
                </td>
                <td className={`${styles.lightGreyText}`}>
                  {getMinorStatusText(miner.status)}
                </td>
              </tr>
              {index < miners.length && (
                <tr className={styles.dividingLine}>
                  <td colSpan='7'></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {selectedMiner && (
        <MinerHistoryModal miner={selectedMiner} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MinerList;
