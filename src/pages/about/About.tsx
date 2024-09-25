import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["about-container"]}>
      <div className={styles["about-img-container"]}>
        <img src="./person.jpg" alt="" className={styles["person-img"]} />
        <div className={styles["details-container"]}>
          <span className={styles["details-item"]}>Date</span>
          <span className={styles["details-item"]}>Budget</span>
          <span className={styles["guest-item"]}>Guest</span>
          <button className={styles["search-btn"]}>Search</button>
        </div>
        <p className={styles["details-msg"]}>
          Embark on a journey to discover your dream destination, where
          adventure and relaxation await. Find your best Indonesian destination
        </p>
      </div>
      <div className={styles["about-cards-and-title-container"]}>
        <div className={styles["about-title-container"]}>
          <p>How it works</p>
          <h2>One click for you</h2>
        </div>
        <div>
          <div className={styles["about-card1"]}>
            <h3>Find your destination</h3>
            <p>
              Embark on a journey to discover your dream destination, where
              adventure and relaxation await
            </p>
          </div>
          <div className={styles["about-card"]}>
            <h3>Book a ticket</h3>
            <p>
              Ensure a smooth travel experience by booking tickets for your
              preferred destination via our booking platform.
            </p>
          </div>
          <div className={styles["about-card"]}>
            <h3>Make payment</h3>
            <p>
              We offer a variety of payment options to meet your preferences and
              ensure a hassle-free transaction process.
            </p>
          </div>
          <div className={styles["about-card"]}>
            <h3>Explore your destination</h3>
            <p>
              You'll be immersed in a captivating tapestry of sights, sounds and
              tastes, as you wind your way through the ancient streets.
            </p>
          </div>

          <div className={styles["about-card"]}>
            <h3>Find your destination</h3>
            <p>
              Embark on a journey to discover your dream destination, where
              adventure and relaxation await
            </p>
          </div>
          <div className={styles["about-card"]}>
            <h3>Find your destination</h3>
            <p>
              Embark on a journey to discover your dream destination, where
              adventure and relaxation await
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
