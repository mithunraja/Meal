import React from "react";
import Slider from "react-slick";
import style from "./index.module.scss";
import menuImg1 from "@/assets/front/images/menu-1.png";
import menuImg2 from "@/assets/front/images/menu-2.png";
import menuImg3 from "@/assets/front/images/menu-3.png";
import menuImg4 from "@/assets/front/images/menu-4.png";
import menuImg5 from "@/assets/front/images/menu-5.png";
import Image from "next/image";

const OurMenu = () => {
  const settings = {
    // rtl: true,
    dots: false, // Disable pagination dots
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className={style.menuArea}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h2 className="wow zoomIn">חקור את התפריט שלנו</h2>
            <div className={style.menuSliderArea}>
              <Slider {...settings}>
                <div
                  className={`${style.menuItemBox} text-center wow fadeInUpSort delay3`}
                >
                  <span>
                    {/* <Image src="/images/menu-2.png" alt="Menu item" width={100} height={100} /> */}
                    <Image alt="" src={menuImg1} width={0} height={0} />
                  </span>
                  <h4>בכושר & בריא</h4>
                  <p>
                    טקסט גוף לכל מה שתרצה לומר., אנקדוטות, או אפילו סיפור מאוד
                    מאוד קצר.
                  </p>
                </div>
                <div
                  className={`${style.menuItemBox} text-center wow fadeInUpSort delay3`}
                >
                  <span>
                    {/* <Image src="/images/menu-2.png" alt="Menu item" width={100} height={100} /> */}
                    <Image alt="" src={menuImg2} width={0} height={0} />
                  </span>
                  <h4>בכושר & בריא</h4>
                  <p>
                    טקסט גוף לכל מה שתרצה לומר., אנקדוטות, או אפילו סיפור מאוד
                    מאוד קצר.
                  </p>
                </div>
                <div
                  className={`${style.menuItemBox} text-center wow fadeInUpSort delay3`}
                >
                  <span>
                    {/* <Image src="/images/menu-2.png" alt="Menu item" width={100} height={100} /> */}
                    <Image alt="" src={menuImg3} width={0} height={0} />
                  </span>
                  <h4>בכושר & בריא</h4>
                  <p>
                    טקסט גוף לכל מה שתרצה לומר., אנקדוטות, או אפילו סיפור מאוד
                    מאוד קצר.
                  </p>
                </div>
                <div
                  className={`${style.menuItemBox} text-center wow fadeInUpSort delay3`}
                >
                  <span>
                    {/* <Image src="/images/menu-2.png" alt="Menu item" width={100} height={100} /> */}
                    <Image alt="" src={menuImg4} width={0} height={0} />
                  </span>
                  <h4>בכושר & בריא</h4>
                  <p>
                    טקסט גוף לכל מה שתרצה לומר., אנקדוטות, או אפילו סיפור מאוד
                    מאוד קצר.
                  </p>
                </div>
                <div
                  className={`${style.menuItemBox} text-center wow fadeInUpSort delay3`}
                >
                  <span>
                    {/* <Image src="/images/menu-2.png" alt="Menu item" width={100} height={100} /> */}
                    <Image alt="" src={menuImg5} width={0} height={0} />
                  </span>
                  <h4>בכושר & בריא</h4>
                  <p>
                    טקסט גוף לכל מה שתרצה לומר., אנקדוטות, או אפילו סיפור מאוד
                    מאוד קצר.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
