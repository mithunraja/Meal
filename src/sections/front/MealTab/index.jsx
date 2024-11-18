import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

const MealTab = () => {
  return (
    <>
      <div className={style.mealTab}>
        <h4>בחר את התוכנית שלך</h4>
        <div className="d-flex justify-content-center">
          <ul className="d-flex">
            <li>
              <Link href={"#"} className={style.active}>
                תוכנית 3 ימים
              </Link>
            </li>
            <li>
              <Link href={"#"}>תכנית 5 ימים</Link>
            </li>
            <li>
              <Link href={"#"}>תכנית 7 ימים</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MealTab;
