import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import parse from "html-react-parser";
import Image from "next/image";
import suppliers from "@/assets/front/images/suppliers.svg";
import art from "@/assets/front/images/art.svg";
import brands from "@/assets/front/images/brands.svg";

const aboutUs = () => {
  return (
    <>
      <Layout>
        <section className={style.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={style.aboutTitle}>
                  <h2>אודותינו</h2>
                </div>
                <div className={`d-flex flex-wrap ${style.aboutTop}`}>
                  <div className={style.aboutTopRight}>
                    <h4>פלייבורייט - טריות למפתן דלתך</h4>
                  </div>
                  <div className={style.aboutTopLeft}>
                    {parse(
                      "<p>פלייבורייט הוקמה כפתרון עבור אנשים שרוצים לשמור על אורח חיים בריא, אך עסוקים מדי על מנת לבשל או לעשות מחקר תזונתי לעצמם. הצוות שלנו, הכולל יועצים קולינריים, תזונאים ודיאטנים קליניים מהמובילים בארץ עמל ועומל על תפריט רחב עם מאכלי פיוז’ן מסקרנים מכל רחבי העולם ומשכלל את הטעמים והגשת המנות בכל העת עם אלמנטים בריאותיים המחוברים לארץ ולאדמה הישראלית שלנו.</p>"
                    )}
                  </div>
                </div>
                <div className={style.setsUsApart}>
                  <h2>מה מייחד אותנו?</h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className={style.setsUsApartInner}>
                        <span>
                          <Image alt="" src={suppliers} width={0} height={0} />
                        </span>
                        <h4>ספקים ארץ ישראלים</h4>
                        {parse(
                          "<p>מירב חומרי הגלם המצוינים שמשמשים את מטבח פלייבורייט מגיעים מספקים, חקלאים, מסעדנים ויזמים ישראליים בתחומי הקולינריה, בריאות, כושר וטכנולוגיית מזון</p>"
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className={style.setsUsApartInner}>
                        <span>
                          <Image alt="" src={art} width={0} height={0} />
                        </span>
                        <h4>המנות שלנו הן יצירות אמנות</h4>
                        {parse(
                          "<p>אנו בפלייבורייט מאמינים שאוכלים קודם כל עם העיניים, לכן צורת ההגשה שלנו והדרך בה אנו מתייחסים לכל מנה ומנה היא כמו יצירה שיש לשמר ולעצב בצורה האלגנטית ביותר</p>"
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className={style.setsUsApartInner}>
                        <span>
                          <Image alt="" src={brands} width={0} height={0} />
                        </span>
                        <h4>שיתופי פעולה עם מותגים מובילים</h4>
                        {parse("<p>פלייבורייט...</p>")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default aboutUs;
