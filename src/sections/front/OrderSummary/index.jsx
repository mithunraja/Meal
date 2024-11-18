import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import orderBg from "@/assets/front/images/order-bgs.png";

const OrderSummary = () => {
  return (
    <>
      <div
        className={`d-flex flex-wrap justify-content-between align-items-center ${style.orderSummaryBox}`}
      >
        <div
          className={style.title}
          style={{ backgroundImage: `url(${orderBg.src})` }}
        >
          <h3>סיכום הזמנה</h3>
        </div>
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
        <div className={style.orderSummaryBtm}>
          <Link href={"#"} className={style.ProceedPayment}>
            המשך לתשלום
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
