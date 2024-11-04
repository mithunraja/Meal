import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import artical from "@/assets/front/images/artical.jpg";
import user from "@/assets/front/images/user.svg";
import Image from "next/image";
import Technology from "@/sections/front/Technology";
import Link from "next/link";

const articles = () => {
  return (
    <>
      <Layout>
        <section className={style.articles}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={style.expert}>
                  <h5>מאמרי מומחים</h5>
                </div>
                <div
                  className={`d-flex justify-content-center align-items-center ${style.articalBanner}`}
                  style={{
                    backgroundImage: `url(${artical.src})`,
                    backgroundPosition: "center center",
                  }}
                >
                  <div className={style.slogan}>
                    <h4>כותרת:</h4>
                    <h5>תת כותרת:</h5>
                  </div>
                  <div className={style.author}>
                    <ul className="d-flex align-items-center">
                      <li>
                        <span>
                          <Image alt="" src={user} width={0} height={0} />
                        </span>{" "}
                        שם הכותב
                      </li>
                      <li>August 20, 2022</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Technology />
          <div className={`d-flex justify-content-center ${style.allPostArea}`}>
            <Link href={"#"} className={style.allPost}>
              צפו בכל הפוסטים
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default articles;
