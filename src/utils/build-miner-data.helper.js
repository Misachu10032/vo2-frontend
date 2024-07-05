export const buildMinerData = (values, selectedPlanet, asteroids) => {
  const randomAsteroid =
    asteroids[Math.floor(Math.random() * asteroids.length)];

  const minerData = {
    name: values.name,
    planet: selectedPlanet._id,
    x: selectedPlanet.position.x,

    y: selectedPlanet.position.y,
    angle: Math.random() * 360,
    carryCapacity: values.carryCapacity,
    travelSpeed: values.travelSpeed,
    miningSpeed: values.miningSpeed,
    status: 0,
    minerals: 0,
    target: randomAsteroid._id,
    targetType: 'Asteroid',
  };

  return minerData;
};
