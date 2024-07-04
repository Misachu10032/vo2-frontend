import React from "react";

const AsteroidList = ({ asteroids }) => {
  return (
    <td>
      <h2 className="white-text">Asteroid List</h2>
      <table className="white-text" border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <td className="white-text">Name</td>
            <td className="white-text">Minerals</td>
            <td className="white-text">Current Miners</td>
            <td className="white-text">Position</td>
          </tr>
        </thead>
        <tbody>
          {asteroids.map((asteroid) => (
            <React.Fragment key={asteroid._id}>
              <tr>
                <td className="white-text">{asteroid.name}</td>
                <td className="white-text">{asteroid.minerals}</td>
                <td className="white-text">{asteroid.currentMiners?(asteroid.currentMiners):(0)}</td>
                <td className="white-text">
                  {Math.round(asteroid.position.x)}.
                  {Math.round(asteroid.position.y)}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </td>
  );
};

export default AsteroidList;
