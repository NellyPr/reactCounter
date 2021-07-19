import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames.js";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div>
        <section className={style.menuButt}>
        {Object.entries(ROUTES).map(([routeName, path]) => (
          <Link to={path} key={path}>
            <button className={style.button}>{routeName}</button>
          </Link>
        ))}
        </section>
    </div>
  );
};

export default Header;
