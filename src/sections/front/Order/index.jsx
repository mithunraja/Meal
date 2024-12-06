import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

const OrderBtn = () => {
  return (
    <>
      <div className={style.orderArea}>
        <Link href={"#"} className={style.orderBtn}>
          להזמנה
        </Link>
      </div>
    </>
  );
};

export default OrderBtn;
