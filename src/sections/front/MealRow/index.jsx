import React from "react";
import style from "./index.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import meal from "@/assets/front/images/meal.jpg";
import slider1 from "@/assets/front/images/slider-1.jpg";
import rightArrow from "@/assets/front/images/r-arrow-w.svg";
import leftArrow from "@/assets/front/images/l-arrow-w.svg";
import parse from "html-react-parser";
import Link from "next/link";

const NextArrow = ({ onClick }) => (
  <div className={`${style.customArrow} ${style.nextArrow}`} onClick={onClick}>
    <Image alt="" src={rightArrow} width={0} height={0} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${style.customArrow} ${style.prevArrow}`} onClick={onClick}>
    <Image alt="" src={leftArrow} width={0} height={0} />
  </div>
);

const blogs = [
  {
    img: meal,
    title: "ארוחה",
    para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. הוא פשוט טקסט דמה של תעשיית הדפוס.",
  },
  {
    img: meal,
    title: "ארוחה",
    para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. הוא פשוט טקסט דמה של תעשיית הדפוס.",
  },
  {
    img: meal,
    title: "ארוחה",
    para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. הוא פשוט טקסט דמה של תעשיית הדפוס.",
  },
  {
    img: meal,
    title: "ארוחה",
    para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. הוא פשוט טקסט דמה של תעשיית הדפוס.",
  },
  {
    img: meal,
    title: "ארוחה",
    para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. הוא פשוט טקסט דמה של תעשיית הדפוס.",
  },
];

const mealSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const MealRow = ({ headingText }) => {
  return (
    <>
      <div className={`mealCarosel ${style.rowWrap}`}>
        <div className={style.rowBody}>
          <div className={style.rowHeader}>
            <h5>{headingText}</h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>

          {/* Slider Component */}
          <Slider {...mealSlider}>
            {blogs.map((blog, index) => (
              <div key={index} className={style.rowBoxWrapper}>
                {/* Adding padding to each slide */}
                <div className={style.rowBox} dir="rtl">
                  <div className={style.rowBoxTop}>
                    <Image
                      alt=""
                      src={blog.img}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className={style.rowBoxBottom}>
                    <div className={style.rowBoxBottomTop}>
                      <h5>{blog.title}</h5>
                      <p>{blog.para}</p>
                      <ul className="d-flex">
                        <li>
                          <span className={style.calories}>400 קלוריות</span>
                        </li>
                        <li>
                          <span className={style.protin}>30 גר חלבון</span>
                        </li>
                      </ul>
                    </div>
                    <div className={style.rowBottom}>
                      <ul className="d-flex">
                        <li>
                          <Link href="#" className={style.switch}>
                            החלף
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className={style.remove}>
                            הסר
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link
                  href={"#"}
                  // class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  הוסף מנה
                </Link>
              </li>
              <li>
                <Link href={"#"}>הוסף חטיף</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        dir="ltr"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className={`d-flex ${style.popupBody}`}>
                <div
                  className={`d-flex align-content-between flex-wrap w-100 ${style.popupBodyLeft}`}
                  dir="rtl"
                >
                  <div className="w-100">
                    <h5>חטיף</h5>
                    <ul className="d-flex justify-content-between mb-4">
                      <li>
                        <span>400 קלוריות</span>
                      </li>
                      <li>
                        <span>30 גר חלבון</span>
                      </li>
                    </ul>
                    {parse("<p>פירוט מגרה על המנה - כמו בתפריט מסעדה</p>")}
                  </div>
                  <div className="w-100">
                    <Link href={"#"} className={style.nutritionBtn}>
                      ערכים תזונתיים
                    </Link>
                  </div>
                </div>
                <div className={style.popupBodyRight}>
                  <Slider {...settings}>
                    <div className={style.imgContainer}>
                      <Image
                        alt=""
                        src={slider1}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className={style.imgContainer}>
                      <Image
                        alt=""
                        src={slider1}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className={style.imgContainer}>
                      <Image
                        alt=""
                        src={slider1}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealRow;
