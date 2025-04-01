import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const routes = [
  { id: "sbd", route: "/", label: "Home" },
  { id: "dscds", route: "events", label: "Events" },
];
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {routes.map((item) => (
            <NavLink
              key={item.id} to={item.route}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
