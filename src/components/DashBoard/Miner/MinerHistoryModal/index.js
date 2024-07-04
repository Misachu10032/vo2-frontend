import React, { useEffect, useState } from 'react';
import { getMinorHistoryStatusText } from '../../../../utils/getStatusText';
import {getOneMinerHistory} from '../../../../service/api/asteroid-api'

import Modal from '../../shared/Modal';

const MinerHistoryModal = ({ miner, onClose }) => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    getHistory(currentPage);
  }, [currentPage]);

  const getHistory = async (page) => {
    try {
      setIsLoading(true);
      const data = await getOneMinerHistory(miner._id, page); 
      setHistory((prevHistory) => [...prevHistory, ...data]); 
      setTotalPages(data.totalPages); 
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching history:', error);
      setIsLoading(false);
    }
  };

  const loadNextPage = () => {
    if (currentPage < totalPages && !isLoading) {
      setCurrentPage(currentPage + 1);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="white-text">History of {miner.name}</h2>
        <table className="white-text" border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th className="white-text">Date</th>
              <th className="white-text">Year</th>
              <th className="white-text">Planet</th>
              <th className="white-text">Carry Capacity</th>
              <th className="white-text">Travel Speed</th>
              <th className="white-text">Mining Speed</th>
              <th className="white-text">Position</th>
              <th className="white-text">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item._id}>
                <td className="white-text">{item.createdAt}</td>
                <td className="white-text">{item.year}</td>
                <td className="white-text">{item.planet}</td>
                <td className="white-text">{item.capacity.current}/{item.capacity.max}</td>
                <td className="white-text">{item.speed.travel}</td>
                <td className="white-text">{item.speed.mining}</td>
                <td className="white-text">{Math.round(item.position.x)}.{Math.round(item.position.y)}</td>
                <td className="white-text">{getMinorHistoryStatusText(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading && <p>Loading...</p>}
        {currentPage < totalPages && (
          <button onClick={loadNextPage} disabled={isLoading}>
            Load More
          </button>
        )}
      </div>
    </Modal>
  );
};

export default MinerHistoryModal;
