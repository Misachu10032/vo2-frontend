import React from "react";
import { useFormik } from "formik";
import styles from "./miner-creation-form.module.css";
import { minerCreationSchema } from "./validationSchemas";
import { createMiner } from "../../../../../service/api";
import { buildMinerData } from "../../../../../utils/build-miner-data.helper";

const MinerCreationForm = ({ defaultSelection, planets, miners, asteroids, onClose }) => {

  const formik = useFormik({
    initialValues: {
      name: "",
      selectedPlanetName: defaultSelection.name,
      carryCapacity: 0,
      travelSpeed: 0,
      miningSpeed: 0,
      miners,
    },
    validationSchema: minerCreationSchema,
    onSubmit: async (values) => {


      const pointsRemaining = 200 - (values.carryCapacity + values.travelSpeed + values.miningSpeed);

      if (pointsRemaining < 0) {
        alert("Points remaining must be greater than or equal to 0.");
        return;
      }

      const minerData = buildMinerData(values, planets, asteroids);

      try {
        await createMiner(minerData); 
    
        onClose(); 
      } catch (error) {
        alert("Miner creation failed");
      }
    },
  });

  const pointsRemaining = 200 - (formik.values.carryCapacity + formik.values.travelSpeed + formik.values.miningSpeed);

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Planet
        <select
          name="selectedPlanetName"
          value={formik.values.selectedPlanetName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {planets.map((planet) => (
            <option key={planet._id} value={planet.name}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Carry Capacity
        <input
          type="number"
          name="carryCapacity"
          value={formik.values.carryCapacity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          min="1"
        />
        {formik.touched.carryCapacity && formik.errors.carryCapacity ? (
          <div className={styles.error}>{formik.errors.carryCapacity}</div>
        ) : null}
      </label>
      <label>
        Travel Speed
        <input
          type="number"
          name="travelSpeed"
          value={formik.values.travelSpeed}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          min="1"
        />
        {formik.touched.travelSpeed && formik.errors.travelSpeed ? (
          <div className={styles.error}>{formik.errors.travelSpeed}</div>
        ) : null}
      </label>
      <label>
        Mining Speed
        <input
          type="number"
          name="miningSpeed"
          value={formik.values.miningSpeed}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          min="1"
        />
        {formik.touched.miningSpeed && formik.errors.miningSpeed ? (
          <div className={styles.error}>{formik.errors.miningSpeed}</div>
        ) : null}
      </label>
      <div className={pointsRemaining >= 0 ? styles.positive : styles.negative}>
        Total: {pointsRemaining}/200
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default MinerCreationForm;
