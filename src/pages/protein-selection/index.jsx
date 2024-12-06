import React, { useState } from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import Link from "next/link";

const ProteinSelection = () => {
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
                      <Link href={"/meal-choice"}>ארוחות</Link>
                    </li>
                    <li>
                      <Link href={"/dietary-prefrences"}>חלבונים</Link>
                    </li>
                    <li>
                      <Link
                        href={"/protein-selection"}
                        className={style.active}
                      >
                        העדפות
                      </Link>
                    </li>
                    <li>
                      <Link href={"/snack-ammount"}>חטיפים</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.mealBodyWrap}>
                <div
                  className={`d-flex justify-content-center ${style.bodyHeader}`}
                >
                  <h5>בחרו את העדפת החלבונים שלכם:</h5>
                </div>
                <div className={style.mealbody}>
                  <ul className="d-flex flex-wrap justify-content-center">
                    {[
                      { label: "בשר", id: 1 },
                      { label: "דגים", id: 2 },
                      { label: "צמחוני", id: 3 },
                      { label: "טבעוני", id: 4 },
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
                  <Link href={"/snack-ammount"} className={style.nextBtn}>
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

export default ProteinSelection;
