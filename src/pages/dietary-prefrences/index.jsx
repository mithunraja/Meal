import React, { useState } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import Link from "next/link";
import Image from "next/image";
import edit from "@/assets/front/images/edit.svg";

const DietaryPrefrences = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <Layout>
        <section className={style.mealChoice}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className={`d-flex justify-content-center ${style.mealTab}`}
                >
                  <ul className="d-flex">
                    <li>
                      <Link href={"/"}>חטיפים</Link>
                    </li>
                    <li>
                      <Link href={"/snack-ammount"}>חלבונים</Link>
                    </li>
                    <li>
                      <Link href={"/protein-selection"}>העדפות</Link>
                    </li>
                    <li>
                      <Link
                        href={"/dietary-prefrences"}
                        className={style.active}
                      >
                        ארוחות
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.mealBodyWrap}>
                <div
                  className={`d-flex align-items-center ${style.bodyHeader}`}
                >
                  <div className={style.right}>
                    <h5>בחרו את ההעדפות התזונתיות שלכם:</h5>
                  </div>
                  <div className={style.left}>
                    <Link href="">
                      <Image alt="" src={edit} width={0} height={0} />
                    </Link>
                  </div>
                </div>
                <div className={style.mealbody}>
                  <ul>
                    {[
                      { label: "דל פחמימות", id: 1 },
                      { label: "עתיר חלבון", id: 2 },
                      { label: "דל קלוריות", id: 3 },
                      { label: "בריאות וטריות", id: 4 },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          passHref
                          className={activeLink === index ? style.active : ""}
                          onClick={() => handleClick(index)}
                        >
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`d-flex justify-content-center ${style.mealFooter}`}
                >
                  <Link href={"/protein-selection"} className={style.nextBtn}>
                    לעמוד הבא
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DietaryPrefrences;
