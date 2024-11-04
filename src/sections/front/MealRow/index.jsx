import React from "react";
import style from "./index.module.scss";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import meal from "@/assets/front/images/meal.jpg";
import slider1 from "@/assets/front/images/slider-1.jpg";

import rightArrow from "@/assets/front/images/right-arrow.svg";
import leftArrow from "@/assets/front/images/left-arrow.svg";

import parse from "html-react-parser";
import Link from "next/link";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className={`${style.customArrow} ${style.nextArrow}`} // Correctly apply the CSS module classes
      onClick={onClick}
    >
      <Image alt="" src={rightArrow} width={0} height={0} />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={`${style.customArrow} ${style.prevArrow}`} // Correctly apply the CSS module classes
      onClick={onClick}
    >
      <Image alt="" src={leftArrow} width={0} height={0} />
    </div>
  );
};

const MealRow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="">
        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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

        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link href={"#"}>הוסף מנה</Link>
              </li>
              <li>
                <Link href={"#"}>הוסף חטיף</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link href={"#"}>הוסף מנה</Link>
              </li>
              <li>
                <Link href={"#"}>הוסף חטיף</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link href={"#"}>הוסף מנה</Link>
              </li>
              <li>
                <Link href={"#"}>הוסף חטיף</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link href={"#"}>הוסף מנה</Link>
              </li>
              <li>
                <Link href={"#"}>הוסף חטיף</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.rowWrap}>
          <div className={style.rowHeader}>
            <h5>יום 1 </h5>
            <p>יום 1 2 ארוחות וחטיף, 1300 קל 80 גר חלבון</p>
          </div>
          <div className={`d-flex flex-wrap ${style.rowBody}`}>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`d-flex flex-wrap ${style.rowBox}`}>
              <div className={style.rowBoxRight}>
                <Image
                  alt=""
                  src={meal}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                className={`d-flex align-content-between flex-wrap ${style.rowBoxLeft}`}
              >
                <div className={style.rowBoxLeftTop}>
                  <h5>ארוחה</h5>
                  <div className={style.calProtin}>
                    <ul className="d-flex justify-content-between">
                      <li>
                        <span className={style.calories}>400 קלוריות</span>
                      </li>
                      <li>
                        <span className={style.protin}>30 גר חלבון</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.description}>
                    {/*  */}
                    {parse("<p>תיאור המנה</p>")}
                  </div>
                </div>
                <div className={style.rowBoxLeftBottom}>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <Link href={"#"}>הסר</Link>
                    </li>
                    <li>
                      <Link href={"#"}>החלף</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center ${style.dishSnaks}`}>
            <ul className="d-flex">
              <li>
                <Link href={"#"}>הוסף מנה</Link>
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
