import { useState, useEffect } from "react";
import style from "./index.module.scss";
import whyUsOne from "@/assets/front/images/why-us/1.svg";
import whyUsTwo from "@/assets/front/images/why-us/2.svg";
import whyUsThree from "@/assets/front/images/why-us/3.svg";
import whyUs from "@/assets/front/images/why-us.png";
import Image from "next/image";

// Reusable Box Component
const WhyUsBox = ({ imageSrc, title, text }) => (
  <div className={style.whyUsBox}>
    <span>
      <Image alt={title} src={imageSrc} width={100} height={100} />
    </span>
    <h5>{title}</h5>
    <p>{text}</p>
  </div>
);

const ChooseUs = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textContent =
    "טקסט גוף לכל מה שתרצה לומר. הוסף נקודות עיקריות, ציטוטים, אנקדוטות, או אפילו סיפור מאוד מאוד קצר.";

  return (
    <section className={style.whyUs}>
      <div className="container-xxl relative">
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <div className={style.whyUsTitle}>
              <h2 className="wow zoomIn">למה לבחור בנו?</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <WhyUsBox
              imageSrc={whyUsOne}
              title="פרגית סאטאי"
              text={textContent}
            />
            <WhyUsBox
              imageSrc={whyUsTwo}
              title="פרגית סאטאי"
              text={textContent}
            />
            <WhyUsBox
              imageSrc={whyUsThree}
              title="פרגית סאטאי"
              text={textContent}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div
              className={`d-flex justify-content-center align-items-center wow fadeIn delay2 bg ${style.whyUsBoxImg}`}
            >
              <Image
                alt="whyUs"
                src={whyUs}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-in-out",
                }}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <WhyUsBox
              imageSrc={whyUsOne}
              title="פרגית סאטאי"
              text={textContent}
            />
            <WhyUsBox
              imageSrc={whyUsTwo}
              title="פרגית סאטאי"
              text={textContent}
            />
            <WhyUsBox
              imageSrc={whyUsThree}
              title="פרגית סאטאי"
              text={textContent}
            />
          </div>
        </div>
      </div>
      <div className={style.roundedBg} />
    </section>
  );
};

export default ChooseUs;
