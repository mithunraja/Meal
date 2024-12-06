import addBann from "@/assets/front/images/blog/ban-add.jpg";
import blog1 from "@/assets/front/images/blog/blog-single.jpg";
import Layout from "@/components/front/include/Layout";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import style from "./blog.module.scss";

import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

import { blogDetailsService, blogService } from "@/services/common.service";
import { useRouter } from "next/router";

const BlogSingle = ({ blogDetailsResponse, blogResponse }) => {

    console.log("blogDetailsResponse: ", blogDetailsResponse);

    const { slug } = useRouter().query;
    //console.log("Slug:", slug);

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

  return (
    <Layout>
      <section className={style.blogSingle}>
        <div className={`container-fluid ${style.blogSingleContainer}`}>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className={style.blogBlock}>
                <div className={style.blogImg}>
                  <Image alt={blogDetailsResponse?.blog_title || "Blog Image"} src={blogDetailsResponse?.blog_cover_image ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/blog/cover/${blogDetailsResponse.blog_cover_image}` : blog1} width={955} height={435} />
                </div>
                <div className={style.blogContent}>
                  <div className={style.blogMeta}>
                    <a href="#">
                      <FiUser /> By Admin{" "}
                    </a>
                    <a href="#">
                      <CiCalendar /> {formatDate(blogDetailsResponse?.created_at) || "Unknown Date"}
                    </a>
                  </div>
                  <h3 className={style.boxTitle}>
                    <Link href="#">{blogDetailsResponse?.blog_title}</Link>

                  {/* <a href="#">{blogDetailsResponse?.blog_title}</a> */}
                  </h3>
                  <p>{parse(blogDetailsResponse?.blog_content || "")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className={style.relatedPost}>
                <h3>פוסט קשור</h3>
                <div className={style.relatedPostInner}>
                  {blogResponse.map((post, index) => (
                    <Link
                      key={index}
                      href={`/blog/${post?.blog_slug}`}
                      className={`d-flex align-items-center ${style.relatedList}`}
                    >
                      <div className={style.rightImg}>
                      <Image alt={post?.blog_title || "Blog Image"} src={post?.blog_thumb_image ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/blog/thumb/${post.blog_thumb_image}` : ''} width={134} height={99} />
                      </div>
                      <div className={style.leftContent}>
                        <h5>{post.blog_title}</h5>
                        <p>{truncateContent(post?.blog_content)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={style.addBanner}>
                  <Image alt="" src={addBann} width={0} height={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogSingle;

export async function getServerSideProps(context) {
    const { slug } = context.params; // Get slug from dynamic URL
    try {
      const [blogDetailsResponse, blogResponse] = await Promise.all([
        blogDetailsService(slug),
        blogService(),
      ]);
      //console.log("blogDetailsResponse: ", blogDetailsResponse);
      return {
        props: {
          blogDetailsResponse: blogDetailsResponse || {},
          blogResponse: blogResponse || [],
        },
      };
    } catch (error) {
      console.error("Error fetching blogs content:", error.message);
      return {
        props: {
          blogResponse: [],
          blogDetailsResponse: {},
        },
      };
    }
}
  