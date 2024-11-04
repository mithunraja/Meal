import React from "react";
import style from "./index.module.scss";
import banner from "@/assets/front/images/inner-ban.jpg";

const InnerBanner = ({ title }) => {
  return (
    <section
      className={`d-flex align-items-center justify-content-center ${style.InnerBanner}`}
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <h1>{title}</h1>
    </section>
  );
};

export default InnerBanner;
