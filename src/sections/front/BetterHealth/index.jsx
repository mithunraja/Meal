import health from "@/assets/front/images/health.jpg";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

const BetterHealth = ({ promoResponse, title }) => {
  return (
    <>
      <section className={style.healthSection}>
        <div className="container-xxl">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={style.healthImg}>
                <Image alt="" src={promoResponse?.promo_image
    ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/about/promo/${promoResponse.promo_image}`
    : health} width={660} height={420} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={style.healthLeft}>
                <h2>{promoResponse?.promo_heading || ''}</h2>
                <h5>{promoResponse?.promo_tag || ''}</h5>
                <h3>{promoResponse?.promo_discount_text || ''}</h3>
                <Link href={promoResponse?.button_link || '#'}>{promoResponse?.button_name || ''}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BetterHealth;
