import { useState } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import banner from "@/assets/front/images/ban-1.png";
import OrderBtn from "@/sections/front/Order";
import Recommendations from "@/sections/front/Recommendations";
import FooterTop from "@/sections/front/FooterTop";
import Link from "next/link";
import OurMenu from "@/sections/front/OurMenu";
import ChooseUs from "@/sections/front/ChooseUs";
import YouNeed from "@/sections/front/YouNeed";
import Gallery from "@/sections/front/Gallery";
import Blog from "@/sections/front/Blog";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    setPosition({ x, y });
  };
  return (
    <>
      <Layout style={{ direction: "rtl" }}>
        <section
          className={`d-flex align-items-center ${style.homeBanner}`}
          onMouseMove={handleMouseMove}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-md-5 col-12">
                <div className={style.bannerContainer}>
                  <div className={style.bannerImg}>
                    <Image
                      alt="Banner"
                      src={banner}
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
              </div>
              <div className="col-lg-7 col-md-7 col-md-7 col-12">
                <div
                  className={style.bannSlogan}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h2>Flavorite</h2>
                  <h4>Freshness to your doorstep</h4>
                  <p>
                    פלייבוריט הוקמה כפתרון חסכני, טבעי, אדמתי וארץ ישראלי על מנת
                    לספק לאנשים אוכל ברמה גבוה מבלי לקרוע את הכיס, ולשנות את
                    הפרדיגמה שאוכל ֿ מהיר לא יכול להיות מזין, טעים ובעל ערכים
                    תזונתיים גבוהים.{" "}
                  </p>
                  <div className={style.order}>
                    <OrderBtn />
                    {/* <Link href={"#"}>להזמנה</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurMenu />
        <ChooseUs />
        <YouNeed />
        <Gallery />
        <Blog />

        {/* <Recommendations />
        <FooterTop /> */}
      </Layout>
    </>
  );
}
