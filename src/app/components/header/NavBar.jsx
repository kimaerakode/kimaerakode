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
          <ul className={`${styles.menu} menu`}>
            <a
              className="link"
              href="https://github.com/kimaerakode"
              target="blank">
              <li>GitHub</li>
            </a>
            <span className="vl">|</span>
            <a
              className="link"
              href="https://codepen.io/kimaerakode"
              target="blank">
              <li>CodePen</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
