import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import Link from "next/link";
import Social from "@/components/front/include/Social";
import Image from "next/image";
import send from "@/assets/front/images/letter-send.svg";
import call from "@/assets/front/images/call.svg";
import mail from "@/assets/front/images/mail.svg";
import contactBackground from "@/assets/front/images/contact-bg.jpg";

const contact = () => {
  return (
    <>
      <Layout>
        <section className={style.contactCection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>צור קשר</h2>
              </div>
              <div className="col-12">
                <div className={`d-flex flex-wrap ${style.contactBg}`}>
                  <div className={style.contactRight}>
                    <form action="" method="get">
                      <div className="row g-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>שם פרטי</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              className={style.input}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>שם משפחה</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              className={style.input}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>טלפון</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              className={style.input}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>אימייל</label>
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              className={style.input}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className={style.contactRightBox}>
                            <h4>הודעה</h4>
                            <textarea
                              placeholder="הקלד את הודעתך כאן..."
                              className={style.textarea}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-center">
                            <button className={style.sendingBtn}>שליחה</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* letter-send .svg */}
                    <div className={style.sendIcon}>
                      <Image
                        alt=""
                        src={send}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div
                    className={`d-flex align-content-between flex-wrap ${style.contactLeft}`}
                    style={{ backgroundImage: `url(${contactBackground.src})` }}
                    dir="ltr"
                  >
                    <div className={style.contactLeftTop}>
                      <h3>מוזמנים לדבר ישירות עם שירות הלקוחות שלנו:</h3>
                      <div className={style.contactMail}>
                        <ul>
                          <li>
                            <span>
                              <Image
                                alt=""
                                src={call}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </span>{" "}
                            055-5555555
                          </li>
                          <li>
                            <span>
                              <Image
                                alt=""
                                src={mail}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </span>{" "}
                            Flavoritebizz@gmail.com
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={style.contactLeftBottom}>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default contact;
