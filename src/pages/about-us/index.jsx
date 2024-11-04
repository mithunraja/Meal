import { useState } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import parse from "html-react-parser";
import Image from "next/image";
import InnerBanner from "@/components/front/include/InnerBanner";
import about from "@/assets/front/images/about.jpg";
import Link from "next/link";

const aboutUs = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    setPosition({ x, y });
  };
  return (
    <>
      <Layout>
        <InnerBanner title="עלינו" />;
        <section className={style.aboutSection} onMouseMove={handleMouseMove}>
          <div className="container-xxl">
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className={style.aboutTitle}>
                  <h2>הסיפור שלנו</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className={style.aboutImg}>
                  <Image
                    alt=""
                    src={about}
                    width={0}
                    height={0}
                    className={style.image}
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px)`,
                      transition: "transform 0.1s ease-in-out",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className={style.aboutTopLeft}>
                  {parse(
                    "<p>ותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים  פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.תזונתיים גבוהים.כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.פלבורית הוקמה כפתרון חסכוני, טבעי, ארצי וישראלי במטרה לספק לאנשים אוכל איכותי מבלי לפרוץ את הכיס ושינוי פרדיגמת המזון  לא יכול להיות מזין, טעים ובעל ערכים תזונתיים גבוהים.תזונתיים גבוהים.</p>"
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="">
                  <Link href={"#"}>קרא עוד</Link>
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
