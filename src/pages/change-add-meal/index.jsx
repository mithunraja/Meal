import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import Search from "@/components/front/include/Search";

import meal from "@/assets/front/images/meal.jpg";
import plus from "@/assets/front/images/plus.svg";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import Filters from "@/components/front/include/Filters";
const ChangeAddMeal = () => {
  const items = [
    {
      title: "חטיף",
      calories: "400 קלוריות",
      protein: "30 גר חלבון",
      price: "50 שח",
      description: "<p>תיאור המנה</p>",
      imgSrc: meal,
      plusIcon: plus,
    },
    {
      title: "חטיף",
      calories: "400 קלוריות",
      protein: "30 גר חלבון",
      price: "50 שח",
      description: "<p>תיאור המנה</p>",
      imgSrc: meal,
      plusIcon: plus,
    },
    {
      title: "חטיף",
      calories: "400 קלוריות",
      protein: "30 גר חלבון",
      price: "50 שח",
      description: "<p>תיאור המנה</p>",
      imgSrc: meal,
      plusIcon: plus,
    },
  ];
  return (
    <>
      <Layout>
        <section className={style.changeAddMealWrap}>
          <div className={`container-fluid ${style.changeAddContainer}`}>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <Filters />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                <div className={style.srcContainer}>
                  <Search />
                </div>
                <div className={style.boxContainer}>
                  <div className="row g-3">
                    {items.map((item, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className={`d-flex flex-wrap ${style.rowBox}`}>
                          <div className={style.rowBoxRight}>
                            <Image
                              alt={item.title}
                              src={item.imgSrc}
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
                              <h5>{item.title}</h5>
                              <div className={style.calProtin}>
                                <ul className="d-flex justify-content-between">
                                  <li>
                                    <span className={style.calories}>
                                      {item.calories}
                                    </span>
                                  </li>
                                  <li>
                                    <span className={style.protin}>
                                      {item.protein}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className={style.description}>
                                {parse(item.description)}
                              </div>
                            </div>
                            <div className={style.rowBoxLeftBottom}>
                              <ul className="d-flex justify-content-between align-items-center">
                                <li>{item.price}</li>
                                <li>
                                  <Link href="#" className={style.plus}>
                                    <Image
                                      alt="plus icon"
                                      src={item.plusIcon}
                                      width={0}
                                      height={0}
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`d-flex justify-content-center ${style.boxContainer}`}
                >
                  <Link href={`#`} className={style.dishesBtn}>
                    ראה את כל המנות
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChangeAddMeal;
