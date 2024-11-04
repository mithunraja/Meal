import React from "react";
import style from "./index.module.scss";
import satay from "@/assets/front/images/satay.png";
import salad from "@/assets/front/images/salad.png";
import corn from "@/assets/front/images/corn.png";
import cracer from "@/assets/front/images/cracer.png";
import tofu from "@/assets/front/images/tofu.png";
import heart from "@/assets/front/images/heart.svg";
import Image from "next/image";

const recommendations = [
  {
    title: "לארב קאי בקר",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: satay,
  },
  {
    title: "סלט פפאיה וטופו",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: salad,
  },
  {
    title: "פרגית סאטאי",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: heart,
  },
  {
    title: "טופו בקארי בסגנון ניקיי",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: tofu,
  },
  {
    title: "הקרקר של אתי",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: cracer,
  },
  {
    title: "צ’ילי קון קרנה",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: corn,
  },
];

const Recommendations = () => {
  return (
    <>
      <div className={style.recommendations}>
        <div className="container">
          <div className="row g-lg-5">
            <div className="col-12">
              <div className={style.title}>
                <h2>מומלצי השבוע של שף איתן דורון</h2>
              </div>
            </div>
            {recommendations.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className={style.recommendationsBox}>
                  <span>
                    <Image alt="" src={item.image} width={0} height={0} />
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendations;
