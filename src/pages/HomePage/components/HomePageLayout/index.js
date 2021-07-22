import React from "react";
import style from "./style.module.scss";

const HomePageLayout = () => {
  return (
    <section className={style.body}>
      <div className={style.infoBlock}>
        This is HOME_PAGE
        <p>To go to COUNTER_PAGE, click menu</p>
      </div>
    </section>
  );
};

export default HomePageLayout;
