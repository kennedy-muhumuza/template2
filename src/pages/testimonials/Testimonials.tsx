import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles["testimonial-section-wrapper"]}>
      <div className={styles["testimonial-container"]}>
        {/* <div className={styles["tesimonial-individual-details"]}> */}
        <div className={styles["testimonial-id-container"]}>
          <div>
            <img
              src="./person1.jpg"
              alt=""
              className={styles["testimonial-img"]}
            />
          </div>
          <div>
            <span className={styles["testimonial-individual-name"]}>
              Ninsiima Timothy
            </span>
            <p className={styles["testimonial-individual-title"]}>
              Founder MPGS
            </p>
          </div>
          <div className={styles["arrows"]}>
            <span className={true ? styles["light"] : styles["dark"]}>
              &larr;
            </span>
            <span className={false ? styles["light"] : styles["dark"]}>
              &rarr;
            </span>
          </div>
        </div>
        {/* </div> */}
        <div className={styles["tesimonial-msg"]}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            dignissimos at officiis maiores maxime, quidem illum soluta eaque
            veniam debitis error esse suscipit omnis qui accusantium hic
            similique aut asperiores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
