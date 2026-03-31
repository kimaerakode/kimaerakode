"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light" || currentTheme === "dark") {
      setThemeState(currentTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setThemeState(prefersDark ? "dark" : "light");
  }, []);

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  return (
    <ul className="menu">
      <li>
        <button
          type="button"
          className="link"
          aria-pressed={theme === "light"}
          onClick={() => setTheme("light")}>
          [ Light ]
        </button>
      </li>
      <li>
        <button
          type="button"
          className="link"
          aria-pressed={theme === "dark"}
          onClick={() => setTheme("dark")}>
          [ Dark ]
        </button>
      </li>
    </ul>
  );
}
