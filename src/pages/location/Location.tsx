import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles["location-section-wrapper"]}>
      <div className={styles["location-title-container"]}>
        <div className={styles["location-title"]}>
          <p>Best location</p>
          <h2>Indonesian Tourism</h2>
        </div>
        <p>
          Extraordinary natural beauty, enjoy the rich culture and
          <br /> experience the friendliness of the local people.
        </p>
      </div>
      <div className={styles["location-image-container"]}>
        <div className={styles["location-image-subcontainer1"]}>
          <img src="./pool.jpg" alt="" className={styles["location-imageG1"]} />
          <img
            src="./mountain.jpg"
            alt=""
            className={styles["location-imageG2"]}
          />
          <p className={styles["location-imageDesc1"]}>
            Bromo East, Java <br /> <b>Bromo Tengger Tour</b>
          </p>
          <p className={styles["location-imageDesc2"]}>
            Denpasar, Bali <br /> <b>Bali Beach Tourism</b>
          </p>
        </div>
        <div className={styles["location-image-subcontainer2"]}>
          <img
            src="./waterfall.jpg"
            alt=""
            className={styles["location-imageG2"]}
          />
          <img src="./car.jpg" alt="" className={styles["location-imageG1"]} />
          <p className={styles["location-imageDesc3"]}>
            Bromo East, Java <br /> <b>Bromo Tengger Tour</b>
          </p>
          <p className={styles["location-imageDesc4"]}>
            Denpasar, Bali <br /> <b>Bali Beach Tourism</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
