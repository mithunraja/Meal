import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

const MealTab = () => {
  return (
    <>
      <div className={`d-flex justify-content-center ${style.mealTab}`}>
        <ul className="d-flex">
          <li>
            <Link href={"#"}>תוכנית 3 ימים</Link>
          </li>
          <li>
            <Link href={"#"}>תכנית 5 ימים</Link>
          </li>
          <li>
            <Link href={"#"} className={style.active}>
              תכנית 7 ימים
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MealTab;
