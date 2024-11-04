import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import blog1 from "@/assets/front/images/blog/1.jpg";
import blog2 from "@/assets/front/images/blog/2.jpg";
import blog3 from "@/assets/front/images/blog/3.jpg";
import blog4 from "@/assets/front/images/blog/4.jpg";
import blog5 from "@/assets/front/images/blog/5.jpg";
import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/front/include/InnerBanner";
import { TiArrowLeftThick } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const blog = () => {
  const blogRefs = useRef([]);

  useEffect(() => {
    // Find the maximum height of all blog blocks
    const maxHeight = Math.max(
      ...blogRefs.current.map((ref) => ref?.offsetHeight || 0)
    );

    // Set each blog block to the maximum height
    blogRefs.current.forEach((ref) => {
      if (ref) ref.style.height = `${maxHeight}px`;
    });
  }, []);
  const blogs = [
    {
      img: blog1,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog2,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog3,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog4,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog5,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog3,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog2,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
    {
      img: blog1,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.הוא פשוט טקסט דמה של תעשיית .הוא פשוט טקסט דמה של ",
    },
  ];
  return (
    <>
      <Layout>
        <InnerBanner title="מאמרים" />

        <section className={style.articles}>
          <div className={`container-fluid ${style.articleContainer}`}>
            <div className="row g-4">
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
                    </div>
                    <div className={style.blogContent}>
                      <div className={style.blogMeta}>
                        <a href="#">
                          <FiUser /> By Frutin{" "}
                        </a>
                        <a href="#">
                          <CiCalendar /> 21 March, 2024
                        </a>
                      </div>
                      <h3 className={style.boxTitle}>
                        <a href="#">{blog.title}</a>
                      </h3>
                      <p>{blog.para}</p>
                      <a href="#" className={style.readMoreBtn}>
                        קרא עוד
                        <TiArrowLeftThick />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default blog;
