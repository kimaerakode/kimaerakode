import styles from "./footernav.module.css";
import ThemeSwitcher from "./ThemeSwitcher";

export default function FooterNav() {
  return (
    <>
      <footer className={styles.footerbar}>
        <nav className={styles.footernav}>
          <div>
            <p>Updated: 31 March 2026</p>
            <span>|</span>

            <ThemeSwitcher />
          </div>

          <ul className="menu">
            <a
              className="link"
              href="">
              <li>@kimaerakode</li>
            </a>
            <span>|</span>
            <a
              className="link"
              href="">
              <li>kimaerakode@gmail.com</li>
            </a>
          </ul>
        </nav>
      </footer>
    </>
  );
}
