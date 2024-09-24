import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <img src="/travel1.jpg" alt="" className={styles["background-image"]} />
      <div className={styles["hero-content"]}>
        <h1>
          Extraordinary natural and <br />
          cultural charm
        </h1>
        <p>Exploring Indonesia is an unforgettable adventure</p>
      </div>
      <div className={styles["details-container"]}>
        <span className={styles["details-item"]}>Date</span>
        <span className={styles["details-item"]}>Budget</span>
        <span className={styles["guest-item"]}>Guest</span>
        <button className={styles["search-btn"]}>Search</button>
      </div>
      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <p>10M+</p>
          <p>Total Customers</p>
        </div>
        <div className={styles["card"]}>
          <p>09+</p>
          <p>Years of Experience</p>
        </div>
        <div className={styles["card"]}>
          <p>12K</p>
          <p>Total Destinations</p>
        </div>
        <div className={styles["card"]}>
          <p>5.0</p>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
