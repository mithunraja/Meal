import React from "react";
import style from "./index.module.scss";
import techOne from "@/assets/front/images/tech-1.jpg";
import user2 from "@/assets/front/images/user-2.png";
import user3 from "@/assets/front/images/user-3.png";
import user4 from "@/assets/front/images/user-4.png";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    imgSrc: techOne,
    title: "כותרת",
    subtitle: "תת כותרת",
    authorImg: user2,
    authorName: "שם הכותב",
    date: "August 20, 2022",
  },
  {
    imgSrc: techOne,
    title: "כותרת",
    subtitle: "תת כותרת",
    authorImg: user3,
    authorName: "שם הכותב",
    date: "August 20, 2022",
  },
  {
    imgSrc: techOne,
    title: "כותרת",
    subtitle: "תת כותרת",
    authorImg: user4,
    authorName: "שם הכותב",
    date: "August 20, 2022",
  },
];

const Technology = () => {
  return (
    <>
      <section className={style.Technology}>
        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12">
                <Link href={"#"} className={style.box} dir="ltr">
                  <div className={style.techImage}>
                    <Image
                      alt=""
                      src={article.imgSrc}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <h6>Technology</h6>
                  <h5>{article.title}</h5>
                  <h4>{article.subtitle}</h4>
                  <div className={style.author}>
                    <ul className="d-flex align-items-center">
                      <li>
                        <span>
                          <Image
                            alt=""
                            src={article.authorImg}
                            width={0}
                            height={0}
                          />
                        </span>{" "}
                        {article.authorName}
                      </li>
                      <li>{article.date}</li>
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
