import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

const OrderSummary = () => {
  return (
    <>
      <div className={style.orderSummaryBox}>
        <h3>סיכום הזמנה</h3>
        <div className={style.orderSummaryBody}>
          <ul className="d-flex">
            <li>עלות:</li>
            <li>350 שח</li>
          </ul>
          <ul className="d-flex">
            <li>עלות משלוח:</li>
            <li>20 שח</li>
          </ul>
        </div>
        <div
          className={`d-flex justify-content-center ${style.orderSummaryBtm}`}
        >
          <Link href={"#"} className={style.ProceedPayment}>
            המשך לתשלום
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
