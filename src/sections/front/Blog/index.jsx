import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import Slider from "react-slick";
import blog1 from "@/assets/front/images/blog/1.jpg";
import blog2 from "@/assets/front/images/blog/2.jpg";
import blog3 from "@/assets/front/images/blog/3.jpg";
import blog4 from "@/assets/front/images/blog/4.jpg";
import blog5 from "@/assets/front/images/blog/5.jpg";
import Image from "next/image";
import { TiArrowLeftThick } from "react-icons/ti";

import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const Blog = () => {
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

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    rtl: true,
  };

  const blogs = [
    {
      img: blog1,
      title: "שנה את התזונה שלך עם ארוחה אורגנית",
      para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
    },
    {
      img: blog2,
      title: "הישאר בכושר עם אפשרויות מזון בריא",
      para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
    },
    {
      img: blog3,
      title: "חקור אפשרויות טבעוניות טעימות",
      para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
    },
    {
      img: blog4,
      title: "היתרונות של מרכיבים אורגניים",
      para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
    },
    {
      img: blog5,
      title: "מזון מזין ומרפא",
      para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
    },
  ];

  return (
    <section className={`blogCarousel ${style.blogSection}`} dir="rtl">
      <div className="container-fluid p-h-40">
        <div className="row g-3">
          <div className="col-12">
            <div className="text-center mb-5 wow zoomIn delay5">
              <h2>
                <span>הבלוג שלנו </span>חדשות ומאמרים אחרונים
              </h2>
            </div>
            <div className={style.blogSlider}>
              <Slider {...settings}>
                {blogs.map((blog, index) => (
                  <div key={index} dir="rtl">
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
