import React from "react";
import style from "./index.module.scss";

const Filters = () => {
  return (
    <>
      <div className={style.filterBox}>
        <h4>פילטרים</h4>
        <ul>
          <li>
            <span>חלבונים</span>
          </li>
          <li>
            <span>העדפות תזונתיות</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filters;
