import React, { useState } from 'react';
import { getMinorStatusText } from '../../../../utils/getStatusText';
import MinerHistoryModal from '../MinerHistoryModal';

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
      <h2 className="white-text">Miner List</h2>
      <table className="white-text" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th className="white-text">Name</th>
            <th className="white-text">Planet</th>
            <th className="white-text">Carry Capacity</th>
            <th className="white-text">Travel Speed</th>
            <th className="white-text">Mining Speed</th>
            <th className="white-text">Position</th>
            <th className="white-text">Status</th>
          </tr>
        </thead>
        <tbody>
          {miners.map((miner) => (
            <tr key={miner._id} onClick={() => handleOpenMinerHistoryModal(miner)}>
              <td className="white-text">{miner.name}</td>
              <td className="white-text">{miner.planet.name}</td>
              <td className="white-text">{miner.carryCapacity}/200</td>
              <td className="white-text">{miner.travelSpeed}</td>
              <td className="white-text">{miner.miningSpeed}</td>
              <td className="white-text">{Math.round(miner.x)}.{Math.round(miner.y)}</td>
              <td className="white-text">{getMinorStatusText(miner.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMiner && <MinerHistoryModal miner={selectedMiner} onClose={handleCloseModal} />}
    </div>
  );
};

export default MinerList;
