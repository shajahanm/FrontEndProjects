import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css"; // ✅ Import styles
function MainNavigation() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/second"}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              SecondPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
