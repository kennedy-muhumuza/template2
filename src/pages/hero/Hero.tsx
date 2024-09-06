import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <img src="/travel1.jpg" alt="" className={styles["background-image"]} />
      <div className={styles["hero-content"]}>
        <h1>Extraordinary natural and cultural charm</h1>
        <p>Exploring Indonesia is an unforgettable adventure</p>
      </div>
      <div className={styles["details-container"]}>
        <span className={styles["details-item"]}>Date</span>
        <span className={styles["details-item"]}>Budget</span>
        <span className={styles["guest-item"]}>Guest</span>
        <button className={styles["search-btn"]}>Search</button>
      </div>
      <div>
        <div>
          <h2>10M+</h2>
          <p>Total Customers</p>
        </div>
        <div>
          <h2>09+</h2>
          <p>Years of Experience</p>
        </div>
        <div>
          <h2>12K</h2>
          <p>Total Destinations</p>
        </div>
        <div>
          <h2>5.0</h2>
          <p>Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
