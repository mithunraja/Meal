import InnerBanner from "@/components/front/include/InnerBanner";
import Layout from "@/components/front/include/Layout";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import style from "./index.module.scss";

import BetterHealth from "@/sections/front/BetterHealth";
import ChooseUs from "@/sections/front/ChooseUs";
import { aboutService, promoService } from "@/services/common.service";

const aboutUs = ({ aboutResponse, promoResponse }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    setPosition({ x, y });
  };

  return (
    <>
      <Layout>
        <InnerBanner title="עלינו" />;
        <section className={style.aboutSection} onMouseMove={handleMouseMove}>
          <div className="container-xxl">
            <div className="row g-5 align-items-center">
              <div className="col-12">
                <div className={style.aboutTitle}>
                  <h2>הסיפור שלנו</h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className={style.aboutImg}>
                  <Image
                    alt=""
                    src={`${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/about/about_section/${aboutResponse?.about_image}`}
                    width={529}
                    height={457}
                    className={style.image}
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px)`,
                      transition: "transform 0.1s ease-in-out",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className={style.aboutTopLeft}>
                  {parse(aboutResponse?.about_content || "")}
                  <div className="d-flex justify-content-center mt-4">
                    {/* <Link href={"#"}>קרא עוד</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ChooseUs />
        <BetterHealth promoResponse={promoResponse} title="עלינו" />
      </Layout>
    </>
  );
};

export default aboutUs;


export async function getServerSideProps() {
  try {
    const [aboutResponse, promoResponse] = await Promise.all([
      aboutService(),
      promoService(),
    ]);
    //console.log(aboutResponse, promoResponse);
    return {
      props: {
        aboutResponse,
        promoResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error.message);
    return {
      props: {
        aboutResponse: {},
        promoResponse: {},
      },
    };
  }
}
