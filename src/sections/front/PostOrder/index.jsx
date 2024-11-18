import React from "react";
import style from "./index.module.scss";
import order1 from "@/assets/front/images/order1.jpg";
import Image from "next/image";

const PostOrder = () => {
  return (
    <>
      <div className={style.pastOrder}>
        <h5>סדר עבר</h5>
        <div
          className={`d-flex algn-items-center flex-wrap ${style.pastOrderBox}`}
        >
          <div className={style.pobImage}>
            <Image alt="" src={order1} width={0} height={0} />
          </div>
          <div className={style.pobcontent}>
            <h6>ארוחה</h6>
            <p>
              הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של
              תעשיית .הוא פשוט טקסט דמה של{" "}
            </p>
            <ul className="d-flex">
              <li>400 קלוריות</li>
              <li>30 גר חלבון</li>
            </ul>
          </div>
        </div>
        <div
          className={`d-flex algn-items-center flex-wrap ${style.pastOrderBox}`}
        >
          <div className={style.pobImage}>
            <Image alt="" src={order1} width={0} height={0} />
          </div>
          <div className={style.pobcontent}>
            <h6>ארוחה</h6>
            <p>
              הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של
              תעשיית .הוא פשוט טקסט דמה של{" "}
            </p>
            <ul className="d-flex">
              <li>400 קלוריות</li>
              <li>30 גר חלבון</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostOrder;
