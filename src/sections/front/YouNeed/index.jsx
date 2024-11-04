import React from "react";
import style from "./index.module.scss";
import youNeed from "@/assets/front/images/you-need.jpg";

const YouNeed = () => {
  return (
    <>
      <section
        className={`mt-5 ${style.youNeed}`}
        style={{ backgroundImage: `url(${youNeed.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style.youNeedInner}>
                <h2 className="wow fadeInUpSort delay1">
                  כל מה שאתה צריך, הכל בקופסה אחת
                </h2>
                <p className="wow fadeInUpSort delay3">
                  טקסט גוף לכל מה שתרצה לומר. הוסף נקודות עיקריות, ציטוטים,
                  אנקדוטות, או אפילו סיפור מאוד מאוד קצר.טקסט גוף לכל מה שתרצה
                  לומר. הוסף נקודות עיקריות, ציטוטים, אנקדוטות, או אפילו סיפור
                  מאוד מאוד קצר.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouNeed;
