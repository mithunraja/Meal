import React from "react";
import style from "./index.module.scss";
import imageOne from "@/assets/front/images/image-1.jpg";
import imageTwo from "@/assets/front/images/image-2.jpg";
import Image from "next/image";

const FooterTop = () => {
  return (
    <>
      <section className={style.footerTop}>
        <div className={`container ${style.footerTopContainer}`}>
          <div className="row row align-items-center g-lg-5 g-md-4 g-sm-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className={style.imgContainerRight}>
                <Image
                  alt=""
                  src={imageTwo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className={style.imgContainer}>
                <Image
                  alt=""
                  src={imageOne}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
