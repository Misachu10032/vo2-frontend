import React, { useState, useEffect } from "react";
import planet1 from "../../../assets/icons/planets/planet1.svg";
import planet2 from "../../../assets/icons/planets/planet2.svg";
import planet3 from "../../../assets/icons/planets/planet3.svg";
import styles from "./Objects.module.css";
import asteroidIcon from "../../../assets/icons/asteroidIcon.svg";
import minerIcon from "../../../assets/icons/minerIcon.svg";

const Objects = ({ planets, asteroids, miners }) => {
  const planetIcons = [planet1, planet2, planet3];


  return (
    <div className={styles["objects"]}>
      {/*  planets */}
      <div className={styles["planet-objects"]}>
        {planets.map((planet, index) => {
          const icon = planetIcons[index % planetIcons.length];
          const position = {
            left: `${(planet.position.x / 1000) * 100}%`,
            top: `${(planet.position.y / 1000) * 100}%`,
          };
          return (
            <img
              key={planet._id}
              src={icon}
              alt={planet.name}
              className={styles["planet-icon"]}
              style={position}
            />
          );
        })}
      </div>

      {/* asteroids */}
      <div className={styles["asteroid-objects"]}>
        {asteroids.map((asteroid) => {
          const position = {
            left: `${(asteroid.position.x / 1000) * 100}%`,
            top: `${(asteroid.position.y / 1000) * 100}%`,
          };
          return (
            <img
              key={asteroid._id}
              src={asteroidIcon}
              alt={asteroid.name}
              className={styles["asteroid-icon"]}
              style={{ ...position, zIndex: 1 }}
            />
          );
        })}
      </div>

      {/* miners with animation */}
      <div className={styles["miner-objects"]}>
        {miners.map((miner) => {

          const position = {
            left: `${(miner.x / 1000) * 100}%`,
            top: `${(miner.y / 1000) * 100}%`,
          };
          const currentAngle = miner.angle+90;

          return (
            <img
              key={miner._id}
              src={minerIcon}
              alt={miner.name}
              className={styles["miner-icon"]}
              style={{
                ...position,
                zIndex: 2,
                position: "absolute",
                transition: "left 1s, top 1s, transform 1s",
                transform: `rotate(${currentAngle}deg)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Objects;
