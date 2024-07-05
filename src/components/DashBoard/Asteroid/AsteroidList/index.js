import React from "react";
import styles from "./AsteroidList.module.css";

const AsteroidList = ({ asteroids }) => {
  return (
    <div>

      <table className={styles.table} cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th className={styles.whiteText}>Name</th>
            <th className={styles.whiteText}>Minerals</th>
            <th className={styles.whiteText}>Current Miners</th>
            <th className={styles.whiteText}>Position</th>
          </tr>
          <tr className={styles.dividingLine}>
            <td colSpan="4"></td>
          </tr>
        </thead>
        <tbody>
          {asteroids.map((asteroid) => (
            <React.Fragment key={asteroid._id}>
              <tr>
                <td className={styles.lightGreyText}>{asteroid.name}</td>
     

                <td className={styles.lightGreyText}>
                  {asteroid.minerals === 0 ? (
                    <span className={styles.redText}>{  asteroid.minerals}</span>
                  ) : (
                    asteroid.minerals
                  )}
                </td>


                <td className={styles.lightGreyText}>{asteroid.currentMiners ? asteroid.currentMiners : 0}</td>
                <td className={styles.lightGreyText}>
                  {Math.round(asteroid.position.x)}.{Math.round(asteroid.position.y)}
                </td>
              </tr>
              <tr className={styles.dividingLine}>
                <td colSpan="4"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsteroidList;
