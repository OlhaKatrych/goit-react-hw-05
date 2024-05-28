import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

import clsx from "clsx";

function addActiveClass({ isActive }) {
  return clsx(css.link, isActive && css.active);
}

function Navigation() {
  return (
    <div className={css.container}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={addActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={addActiveClass}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
