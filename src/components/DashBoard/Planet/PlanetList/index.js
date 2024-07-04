import React, { useState } from "react";
import plusIcon from "../../../../assets/icons/plusIcon.svg";
import MinerCreationModal from "../MinerCreationModal";

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
      <h2 className="white-text">Planet List</h2>
      <table className="white-text" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <td className="white-text">Name</td>
            <td className="white-text">Miners</td>
            <td className="white-text">Minerals</td>
            <td className="white-text"></td>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <React.Fragment key={planet._id}>
              <tr>
                <td className="white-text">{planet.name}</td>
                <td className="white-text">{planet.miners}</td>
                <td className="white-text">{planet.minerals}</td>
                <td className="white-text">
                
                  {planet.minerals>=0 &&  <div onClick={() => handleOpenMinerCreationModal(planet)}>
                    <img src={plusIcon} alt="plus-icon" />
                  </div>}
                </td>
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
