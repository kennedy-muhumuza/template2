import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles["blog-section-container"]}>
      <div>
        <div className={styles["blog-title-container"]}>
          <p>Our Blog</p>
          <h2>Our travel memories</h2>
        </div>
        <div className={styles["card-container"]}>
          <div className={styles["card"]}>
            <img src="./car.jpg" alt="" className={styles["card-img1"]} />
            <div className={styles["card-details"]}>
              <p className={styles["card-date"]}>Nov 14, 2022</p>
              <span>
                <b>2023 Travel Trends - what you need to know</b>
              </span>
              <p>
                2023 taught taught us valuable life lessons. Plans don't always
                work out, flexibility in life is key.
              </p>
            </div>
          </div>
          <div className={styles["card"]}>
            <img src="./boat.jpg" alt="" className={styles["card-img1"]} />
            <div className={styles["card-details"]}>
              <p className={styles["card-date"]}>Nov 18, 2022</p>
              <span>
                <b>2023 Travel Trends - what you need to know</b>
              </span>
              <p>
                2023 taught taught us valuable life lessons. Plans don't always
                work out, flexibility in life is key.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["btn-container"]}>
          <button className={styles["view-more-btn"]}>View more</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
