import userImg from "@/assets/front/images/user-img.jpg";
import Layout from "@/components/front/include/Layout";
import PostOrder from "@/sections/front/PostOrder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { TfiTruck } from "react-icons/tfi";
import style from "./index.module.scss";

const MyOrder = () => {
  const [selectedGender, setSelectedGender] = useState("1");

  const handleRadioChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <>
      <Layout>
        <section className={style.myOrderSection}>
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className={style.rightCol}>
                  <div
                    className={`d-flex align-items-center ${style.rightBox}`}
                  >
                    <div className={style.userImg}>
                      <Image alt="" src={userImg} width={0} height={0} />
                    </div>
                    <div className={style.usrename}>שם אדם</div>
                  </div>
                  <div className={style.rightBox}>
                    <ul>
                      <li>
                        <Link href={"#"}>
                          <span>
                            <TfiTruck />
                          </span>
                          משלוחים קרובים
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className={style.active}>
                          <span>
                            <FaInfoCircle />
                          </span>
                          לעדכן מידע
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className={style.myOrderLeft}>
                  <form action="" method="get">
                    <div className={style.fromGroup}>
                      <h5>מידע אישי</h5>
                      <div className={`d-flex flex-wrap ${style.fromWrap}`}>
                        <div className={style.fromWrapInner}>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="שֵׁם פְּרַטִי"
                            className={style.input1}
                          />
                        </div>
                        <div className={style.fromWrapInner}>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="שֵׁם מִשׁפָּחָה"
                            className={style.input1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <h5>מִין</h5>
                      <div className={style.radioButtons}>
                        <div className={style.radioInline}>
                          <input
                            type="radio"
                            name="gender"
                            id="radio1"
                            value="1"
                            checked={selectedGender === "1"}
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="radio1">זָכָר</label>
                        </div>

                        <div className={style.radioInline}>
                          <input
                            type="radio"
                            name="gender"
                            id="radio2"
                            value="2"
                            checked={selectedGender === "2"}
                            onChange={handleRadioChange}
                          />
                          <label htmlFor="radio2">נְקֵבָה</label>
                        </div>
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <h5>כתובת למשלוח</h5>
                      <div className={style.fromWrapInner}>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder='10 ד"ר דרבלה, ראשון לציון, ישראל'
                          className={style.input1}
                        />
                      </div>
                    </div>

                    <div className={style.fromGroup}>
                      <h5>מספר טלפון</h5>
                      <div className={style.fromWrapInner}>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="12345657890 00+"
                          className={style.input1}
                        />
                      </div>
                    </div>
                    <div className={style.fromGroup}>
                      <h5>{`דוא"ל`}</h5>
                      <div className={style.fromWrapInner}>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="email@email.com"
                          className={style.input1}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className={style.myOrderLeft}>
                  <div className={style.priceDetails}>
                    <h5>פרטי מחיר</h5>
                    <ul className="d-flex justify-content-between">
                      <li>פריט 1:</li>
                      <li>₪111.59</li>
                    </ul>
                    <ul className="d-flex justify-content-between">
                      <li>פריט 2:</li>
                      <li>₪111.59</li>
                    </ul>
                    <ul className="d-flex justify-content-between">
                      <li>פריט 3:</li>
                      <li>₪111.59</li>
                    </ul>
                    <ul className="d-flex justify-content-between">
                      <li>דמי משלוח:</li>
                      <li>לְשַׁחְרֵר</li>
                    </ul>
                    <ul
                      className={`d-flex justify-content-between ${style.totalAmount}`}
                    >
                      <li>סכום כולל</li>
                      <li>₪334.77</li>
                    </ul>
                  </div>
                  <div className={style.postOrder}>
                    <PostOrder />
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

export default MyOrder;
