import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <header className={styles.headerbar}>
        <nav className={styles.navbar}>
          <span>
            <a
              className={`${styles.title} title link`}
              href="/">
              Kimaerakode
            </a>
          </span>
          <ul className="menu">
            <a
              className="link"
              href="">
              <li>GitHub</li>
            </a>
            <span>|</span>
            <a
              className="link"
              href="">
              <li>CodePen</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
