import React from "react";
import style from "./index.module.scss";

const FiltersTwo = () => {
  return (
    <>
      <div className={style.filterBox}>
        <div className={style.filterBoxInner}>
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
        <div className={style.filterBoxInner}>
          <h4>תגיות</h4>
          <ul>
            <li>
              <span>אסיאתי</span>
            </li>
            <li>
              <span>יווני</span>
            </li>
            <li>
              <span>הודי</span>
            </li>
            <li>
              <span>ישראלי</span>
            </li>
            <li>
              <span>חריף</span>
            </li>
            <li>
              <span>לא חריף</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FiltersTwo;
