import React from "react";
import style from "./index.module.scss";
import health from "@/assets/front/images/health.jpg";
import Image from "next/image";
import Link from "next/link";

const BetterHealth = ({ title }) => {
  return (
    <>
      <section className={style.healthSection}>
        <div className="container-xxl">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={style.healthImg}>
                <Image alt="" src={health} width={0} height={0} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={style.healthLeft}>
                <h2>התחל את המסע שלך לבריאות טובה יותר</h2>
                <h5>לְקַבֵּל</h5>
                <h3>40% הנחה</h3>
                <Link href={"#"}>החשבון שלי</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BetterHealth;
