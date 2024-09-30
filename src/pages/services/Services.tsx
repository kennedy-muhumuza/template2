import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles["services-container"]}>
      <div className={styles["package-title-container"]}>
        <div>
          <p>Tour Packages</p>
          <h2>Our tourist destination</h2>
        </div>
        <p>
          Our tourist destinations offer an unrivaled blend of natural beauty
          and cultural richness.
        </p>
      </div>
      <div className={styles["package-img-container"]}>
        <div className={styles["package-img1container"]}>
          <img src="./trees.jpg" alt="" className={styles["package-img1"]} />
          <div className={styles["date-price-cridentials-container1"]}>
            <p>23 AUGUST - 29 AUGUST</p>
            <div className={styles["package-price-container"]}>
              <p>Bail Tour Package</p>
              <p>$285</p>
            </div>
          </div>
        </div>
        <div className={styles["package-img2container"]}>
          <img
            src="./building1.jpg"
            alt=""
            className={styles["package-img1"]}
          />
          <div className={styles["date-price-cridentials-container2"]}>
            <p>23 AUGUST - 29 AUGUST</p>
            <div className={styles["package-price-container"]}>
              <p>Bail Tour Package</p>
              <p>$218</p>
            </div>
          </div>
        </div>
        <div className={styles["package-img3container"]}>
          <img src="./game.jpg" alt="" className={styles["package-img1"]} />
          <div className={styles["date-price-cridentials-container3"]}>
            <p>23 AUGUST - 29 AUGUST</p>
            <div className={styles["package-price-container"]}>
              <p>Bail Tour Package</p>
              <p>$163</p>
            </div>
          </div>
        </div>
        <span></span>
      </div>
      <div></div>
      <button className={styles["view-more-btn"]}>View more</button>
    </section>
  );
};

export default Services;
