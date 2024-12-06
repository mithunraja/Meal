import InnerBanner from "@/components/front/include/InnerBanner";
import Layout from "@/components/front/include/Layout";
import { blogService } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { TiArrowLeftThick } from "react-icons/ti";
import style from "./index.module.scss";

const blog = ({ blogResponse }) => {

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

  const truncateContent = (content, maxLength = 100) => {
    if (!content) return "";
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };
  

  return (
    <>
      <Layout>
        <InnerBanner title="מאמרים" />

        <section className={style.articles}>
          <div className={`container-fluid ${style.articleContainer}`}>
          {blogResponse.length === 0 ? (
              <div className="text-center">
                <h3>לא נמצאו מאמרים</h3>
              </div>
            ) : (
              <div className="row g-4">
                {blogResponse.map((blog, index) => (
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
                          {/* <a href={`/blog/${blog?.blog_slug}`}>{blog?.blog_title}</a> */}
                        </h3>
                        <p>{truncateContent(blog?.blog_content)}</p>
                        <Link href={`/blog/${blog?.blog_slug}`} className={style.readMoreBtn}> קרא עוד
                          <TiArrowLeftThick />
                        </Link>
                        {/* <a href={`/blog/${blog?.blog_slug}`} className={style.readMoreBtn}>
                          קרא עוד
                        </a> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default blog;

export async function getServerSideProps() {
  try {
    const blogResponse = await blogService();
    //console.log(blogResponse);
    return {
      props: {
        blogResponse: blogResponse.length ? blogResponse : [],
      },
    };
  } catch (error) {
    console.error("Error fetching blogs content:", error.message);
    return {
      props: {
        blogResponse: [], // Fallback to empty array
      },
    };
  }
}