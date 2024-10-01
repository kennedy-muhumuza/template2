import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles["blog-section-container"]}>
      <div>
        <div className={styles["blog-title-container"]}>
          <p>Our Blog</p>
          <h2>Our travel memories</h2>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Blog;
