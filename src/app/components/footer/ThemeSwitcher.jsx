"use client";
import styles from "./footernav.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ul className={styles.themes}>
      <li>
        <button
          type="button"
          className="link"
          aria-pressed={mounted ? resolvedTheme === "light" : undefined}
          onClick={() => setTheme("light")}>
          [ Light ]
        </button>
      </li>
      <li>
        <button
          type="button"
          className="link"
          aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
          onClick={() => setTheme("dark")}>
          [ Dark ]
        </button>
      </li>
    </ul>
  );
}
