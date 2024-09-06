import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["logo"]}>INDONESIAN</div>
      <ul className={styles["list-container"]}>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <div className={styles["signin-container"]}>
        <span>On</span>
        <button className={styles["signin-btn"]}>SignIn</button>
      </div>
    </header>
  );
};

export default Header;
