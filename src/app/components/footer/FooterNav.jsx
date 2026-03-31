import styles from "./footernav.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

export default function FooterNav() {
  return (
    <>
      <footer className={styles.footerbar}>
        <nav className={styles.footernav}>
          <div className={styles.meta}>
            <p>Updated: 31 March 2026</p>
            <span className="vl">|</span>

            <ThemeSwitcher />
          </div>

          <ul className="menu">
            <a
              className="link disabled"
              href="https://www.instagram.com/kimaerakode"
              target="_blank">
              <li>@kimaerakode</li>
            </a>
            <span className="vl">|</span>
            <a
              className="link"
              href="mailto:kimaerakode@gmail.com"
              target="_blank">
              <li>kimaerakode@gmail.com</li>
            </a>
          </ul>
        </nav>
      </footer>
    </>
  );
}
