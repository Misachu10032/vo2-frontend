import React, { useState } from 'react';
import plusIcon from '../../../../assets/icons/plusIcon.svg';
import MinerCreationModal from '../MinerCreationModal';
import styles from './PlanetList.module.css';

const PlanetList = ({ planets, miners, asteroids }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleOpenMinerCreationModal = (planet) => {
    setSelectedPlanet(planet);
  };

  const handleCloseModal = () => {
    setSelectedPlanet(null);
  };

  return (
    <td>
      <table className={styles.table} cellPadding='5' cellSpacing='0'>
        <thead>
          <tr>
            <td className={styles.whiteText}>Name</td>
            <td className={styles.whiteText}>Miners</td>
            <td className={styles.whiteText}>Minerals</td>
            <td className={styles.whiteText}></td>
          </tr>
          <tr className={styles.dividingLine}>
            <td colSpan='4'></td>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <React.Fragment key={planet._id}>
              <tr>
                <td className={styles.lightGreyText}>{planet.name}</td>
                <td className={styles.lightGreyText}>{planet.miners}</td>

                <td className={styles.lightGreyText}>
                  {planet.minerals >= 1000 ? (
                    <span className={styles.greenText}>
                      {planet.minerals}/1000
                    </span>
                  ) : (
                    `${planet.minerals}/1000`
                  )}
                </td>

                <td>
                  {planet.minerals >= 1000 && (
                    <div onClick={() => handleOpenMinerCreationModal(planet)}>
                      <img src={plusIcon} alt='plus-icon' />
                    </div>
                  )}
                </td>
              </tr>
              <tr className={styles.dividingLine}>
                <td colSpan='4'></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {selectedPlanet && (
        <MinerCreationModal
          defaultSelection={selectedPlanet}
          planets={planets}
          miners={miners}
          asteroids={asteroids}
          onClose={handleCloseModal}
        />
      )}
    </td>
  );
};

export default PlanetList;
