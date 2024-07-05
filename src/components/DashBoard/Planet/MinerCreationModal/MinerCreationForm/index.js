import React from "react";
import { useFormik } from "formik";
import styles from "./MinerCreationForm.module.css";
import { minerCreationSchema } from "./validationSchemas";
import { createMiner } from "../../../../../service/api";
import { buildMinerData } from "../../../../../utils/build-miner-data.helper";
import saveButton from '../../../../../assets/buttons/saveButton.svg'

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
      const selectedPlanet = planets.find((planet) => planet.name === values.selectedPlanetName);
      if (pointsRemaining < 0) {
        alert("Points remaining must be greater than or equal to 0.");
        return;
      }

      if (selectedPlanet.minerals < 1000) {
        alert("This planet does not have enough minerals");
        return;
      }

      const minerData = buildMinerData(values, selectedPlanet, asteroids);

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
    <form onSubmit={formik.handleSubmit} noValidate className={styles.form}>
      <div className={styles.fieldWrapper}>
        <label className={`${styles.label} ${styles.leftAligned}`}>
          Name
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className={styles.nameWidth}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}
        </label>
      </div>
      <div className={styles.fieldWrapper}>
        <label className={`${styles.label} ${styles.leftAligned}`}>
          Planet
          <select
            name="selectedPlanetName"
            value={formik.values.selectedPlanetName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.fullWidth}
          >
            {planets.map((planet) => (
              <option key={planet._id} value={planet.name}>
                {planet.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.bigText}>
        Points Assigned
      </div>

      <div className={styles.inlineFields}>
        <div className={styles.fieldWrapper}>
          <label className={`${styles.label} ${styles.leftAligned}`}>
            Carry Capacity
            <input
              type="number"
              name="carryCapacity"
              value={formik.values.carryCapacity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              min="1"
              className={styles.inLineInputWidth}
            />
            {formik.touched.carryCapacity && formik.errors.carryCapacity ? (
              <div className={styles.error}>{formik.errors.carryCapacity}</div>
            ) : null}
          </label>
        </div>
        <div className={styles.fieldWrapper}>
          <label className={`${styles.label} ${styles.leftAligned}`}>
            Travel Speed
            <input
              type="number"
              name="travelSpeed"
              value={formik.values.travelSpeed}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              min="1"
              className={styles.inLineInputWidth}
            />
            {formik.touched.travelSpeed && formik.errors.travelSpeed ? (
              <div className={styles.error}>{formik.errors.travelSpeed}</div>
            ) : null}
          </label>
        </div>
        <div className={styles.fieldWrapper}>
          <label className={`${styles.label} ${styles.leftAligned}`}>
            Mining Speed
            <input
              type="number"
              name="miningSpeed"
              value={formik.values.miningSpeed}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              min="1"
              className={styles.inLineInputWidth}
            />
            {formik.touched.miningSpeed && formik.errors.miningSpeed ? (
              <div className={styles.error}>{formik.errors.miningSpeed}</div>
            ) : null}
          </label>
        </div>
      </div>
      <div className={`${styles.totalPoints} ${pointsRemaining >= 0 ? styles.positive : styles.negative}`}>
        Total: {pointsRemaining}/200
      </div>

      <button type="submit">
      <img src={saveButton} alt="saveButton" />
      </button>
    </form>
  );
};

export default MinerCreationForm;
