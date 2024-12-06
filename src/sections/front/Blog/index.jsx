// import blog1 from "@/assets/front/images/blog/1.jpg";
// import blog2 from "@/assets/front/images/blog/2.jpg";
// import blog3 from "@/assets/front/images/blog/3.jpg";
// import blog4 from "@/assets/front/images/blog/4.jpg";
// import blog5 from "@/assets/front/images/blog/5.jpg";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import Slider from "react-slick";
import style from "./index.module.scss";

import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const Blog = ({ blogResponse, pageContentResponse }) => {
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
    // rtl: true,
  };

  const truncateContent = (content, maxLength = 100) => {
    if (!content) return "";
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };

  const formatDate = (dateString) => {
    // Check if the dateString is valid
    const date = new Date(dateString);
    // Return a default value if the date is invalid
    if (isNaN(date)) return null;

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  // const blogs = [
  //   {
  //     img: blog1,
  //     title: "שנה את התזונה שלך עם ארוחה אורגנית",
  //     para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
  //   },
  //   {
  //     img: blog2,
  //     title: "הישאר בכושר עם אפשרויות מזון בריא",
  //     para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
  //   },
  //   {
  //     img: blog3,
  //     title: "חקור אפשרויות טבעוניות טעימות",
  //     para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
  //   },
  //   {
  //     img: blog4,
  //     title: "היתרונות של מרכיבים אורגניים",
  //     para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
  //   },
  //   {
  //     img: blog5,
  //     title: "מזון מזין ומרפא",
  //     para: "Lorem Ipsum הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. לורם איפסום היה",
  //   },
  // ];

  return (
    <section className={`blogCarousel ${style.blogSection}`} dir="rtl">
      <div className="container-fluid p-h-40">
        <div className="row g-3">
          <div className="col-12">
            <div className="text-center mb-5 wow zoomIn delay5">
              <h2>
                <span>{pageContentResponse?.blog_section_title || 'No Title Found'} </span>{pageContentResponse?.blog_section_heading || 'No Heading Found'}
              </h2>
            </div>
            <div className={style.blogSlider}>

            {blogResponse.length === 0 ? (

              <div className="text-center">
                <h3>לא נמצאו מאמרים</h3>
              </div>

            ) : (

              <Slider {...settings}>

                {blogResponse.map((blog, index) => (

                  <div key={index} dir="rtl">
                    <div
                      className={style.blogBlock}
                      ref={(el) => (blogRefs.current[index] = el)}
                    >
                      <div className={style.blogImg}>
                      <Image alt={blog?.blog_title || "Blog Image"} src={blog?.blog_thumb_image ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/blog/thumb/${blog.blog_thumb_image}` : blog.img} width={391} height={300} />
                      </div>
                      <div className={style.blogContent}>
                        <div className={style.blogMeta}>
                          <a href="#">
                            <FiUser /> By Admin{" "}
                          </a>
                          <a href="#">
                            <CiCalendar /> {formatDate(blog?.created_at)}
                          </a>
                        </div>
                        <h3 className={style.boxTitle}>
                          <Link href={`/blog/${blog?.blog_slug}`}>{blog?.blog_title}</Link>
                          {/* <a href="#">{blogResponse.blog_title}</a> */}
                        </h3>
                        <p>{truncateContent(blog?.blog_content)}</p>

                        <Link href={`/blog/${blog?.blog_slug}`} className={style.readMoreBtn}> קרא עוד
                          <TiArrowLeftThick />
                        </Link>

                        {/* <a href="#" className={style.readMoreBtn}>
                          קרא עוד
                          <TiArrowLeftThick />
                        </a> */}

                      </div>
                    </div>
                  </div>

                ))}

              </Slider>

            )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
