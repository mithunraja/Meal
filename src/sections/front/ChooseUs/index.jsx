import whyUs from "@/assets/front/images/why-us.png";
import { whyChooseUsService } from "@/services/common.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./index.module.scss";

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
  const [whyChooseUsData, setWhyChooseUsData] = useState([]);
  const [sectionHeading, setSectionHeading] = useState([]);
  const [middleImage, setMiddleImage] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  // Fetch Why Choose Us Data
  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        const response = await whyChooseUsService();
        const whyChooseUsLists = response?.data || [];
        //console.log("response:", whyChooseUsData);
        if (whyChooseUsLists && whyChooseUsLists.length) {
          setSectionHeading(whyChooseUsLists[0].section_heading || "למה לבחור בנו?");
          setMiddleImage(
            whyChooseUsLists[0].middle_image
              ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/home/why_choose_us/${whyChooseUsLists[0].middle_image}`
              : whyUs
          );
          setWhyChooseUsData(whyChooseUsLists[0].why_chooseus_content || []);
        }
      } catch (error) {
        console.error("Error fetching Why Choose Us data:", error.message);
      }
    };

    fetchWhyChooseUs();
  }, []);

  // const textContent =
  //   "טקסט גוף לכל מה שתרצה לומר. הוסף נקודות עיקריות, ציטוטים, אנקדוטות, או אפילו סיפור מאוד מאוד קצר.";

  return (
    <section className={style.whyUs}>
      <div className="container-xxl relative">
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <div className={style.whyUsTitle}>
              <h2 className="wow zoomIn"> {sectionHeading} </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">

            {/* Render Left Column Content */}
            {whyChooseUsData.slice(0, Math.ceil(whyChooseUsData.length / 2)).map((item, index) => (
              <WhyUsBox
                key={index}
                imageSrc={
                  item.icon
                    ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/home/icons/${item.icon}`
                    : whyUs
                }
                width={0}
                height={0}
                title={item.heading || "No Title"}
                text={item.short_content || "No Text"}
              />
            ))}

            {/* <WhyUsBox
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
            /> */}

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div
              className={`d-flex justify-content-center align-items-center wow fadeIn delay2 bg ${style.whyUsBoxImg}`}
            >
              <Image
                alt="whyUs"
                src={middleImage}
                width={800}
                height={774}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-in-out",
                }}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">

            {/* Render Right Column Content */}
            {whyChooseUsData.slice(Math.ceil(whyChooseUsData.length / 2)).map((item, index) => (
              <WhyUsBox
                key={index}
                imageSrc={
                  item.icon
                    ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/home/icons/${item.icon}`
                    : whyUs
                }
                width={0}
                height={0}
                title={item.heading || "No Title"}
                text={item.short_content || "No Text"}
              />
            ))}

            {/* <WhyUsBox
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
            /> */}

          </div>
        </div>
      </div>
      <div className={style.roundedBg} />
    </section>
  );
};

export default ChooseUs;