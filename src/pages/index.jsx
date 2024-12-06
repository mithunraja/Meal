import banner from "@/assets/front/images/ban-1.png";
import Layout from "@/components/front/include/Layout";
import Blog from "@/sections/front/Blog";
import ChooseUs from "@/sections/front/ChooseUs";
import Gallery from "@/sections/front/Gallery";
import OurMenu from "@/sections/front/OurMenu";
import YouNeed from "@/sections/front/YouNeed";
import { blogService, galleriesService, homeBannerService, homePageContentService } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./index.module.scss";

export default function Home({ bannerResponse, blogResponse, pageContentResponse, galleriesResponse }) {
// console.log("galleriesResponse", galleriesResponse)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    setPosition({ x, y });
  };
  return (
    <>
      <Layout style={{ direction: "rtl" }}>
        <section
          className={`d-flex align-items-center ${style.homeBanner}`}
          onMouseMove={handleMouseMove}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-md-5 col-12">
                <div className={style.bannerContainer}>
                  <div className={style.bannerImg}>
                    <Image
                      alt="Banner"
                      src={bannerResponse?.bg_image ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/home/banner/${bannerResponse.bg_image}` : banner}
                      width={515}
                      height={532}
                      className={style.image}
                      style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: "transform 0.1s ease-in-out",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-md-7 col-12">
                <div
                  className={style.bannSlogan}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <h2>{bannerResponse?.banner_heading || 'No Heading'}</h2>
                  <h4>{bannerResponse?.banner_sub_heading || 'No Sub Heading'}</h4>
                  <p>{bannerResponse?.banner_content || 'No Content'}</p>
                  <div className={style.order}>
                    <Link href={"#"}>להזמנה</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurMenu pageContentResponse={pageContentResponse} />
        <ChooseUs />
        <YouNeed pageContentResponse={pageContentResponse} />
        <Gallery pageContentResponse={pageContentResponse} galleriesResponse={galleriesResponse} />
        <Blog blogResponse={blogResponse} pageContentResponse={pageContentResponse} />

        {/* <Recommendations />
        <FooterTop /> */}
      </Layout>
    </>
  );
}


export async function getServerSideProps() {
  
  try {
    
    const [bannerResponse, blogResponse, pageContentResponse, galleriesResponse] = await Promise.all([
      homeBannerService(),
      blogService(),
      homePageContentService(),
      galleriesService()
    ]);

    // console.log(galleriesResponse);
    
    return {
      props: {
        bannerResponse,
        blogResponse: blogResponse.length ? blogResponse : [],  // Ensure an empty array if no data
        pageContentResponse: pageContentResponse || {}, // Ensure an empty object if no content
        galleriesResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error.message);
    return {
      props: {
        bannerResponse: {},
        blogResponse: [],
        pageContentResponse: {},
        galleriesResponse: [],
      },
    };
  }
  
}
