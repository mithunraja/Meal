import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import blog1 from "@/assets/front/images/recommended/1.jpg";
import blog2 from "@/assets/front/images/recommended/2.jpg";
import blog3 from "@/assets/front/images/recommended/3.jpg";
import blog4 from "@/assets/front/images/recommended/4.jpg";
import Image from "next/image";
import Link from "next/link";
import { TiArrowLeftThick } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const RecommendedThisWeek = () => {
  const blogRefs = useRef([]);
  const blogs = [
    {
      img: blog1,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog2,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog3,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog4,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },

    {
      img: blog3,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog2,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog4,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog1,
      title: "הוא פשוט טקסט דמה של תעשיית הדפ",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
  ];
  return (
    <>
      <Layout>
        <section className={style.recommended}>
          <div className={`container-fluid ${style.articleContainer}`}>
            <div className="row g-4">
              <div className="col-12 d-flex justify-content-center">
                <h2>מומלץ השבוע</h2>
              </div>
              {blogs.map((blog, index) => (
                <div
                  className="col-lg-3 col-sm-3 col-md-6 col-12"
                  key={index}
                  dir="rtl"
                >
                  <div
                    className={style.blogBlock}
                    ref={(el) => (blogRefs.current[index] = el)}
                  >
                    <div className={style.blogImg}>
                      <Image alt="" src={blog.img} width={0} height={0} />
                      <span className={style.FeatureBadge}>מוכן לבשל</span>
                    </div>
                    <div className={style.blogContent}>
                      <div className={style.blogMeta}>
                        <ul className="d-flex">
                          <li>
                            <span>10% אורגני</span>
                          </li>
                          <li>
                            <span>חלבון גבוה</span>
                          </li>
                        </ul>
                      </div>
                      <h3 className={style.boxTitle}>
                        <a href="#">{blog.title}</a>
                      </h3>
                      <p>{blog.para}</p>
                      {/* <a href="#" className={style.readMoreBtn}>
                        קרא עוד
                        <TiArrowLeftThick />
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-12 d-flex justify-content-center">
                <Link href={"#"} className={style.loadMore}>
                  מומלץ השבוע
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RecommendedThisWeek;
