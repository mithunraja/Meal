import userImg from "@/assets/front/images/user-img.jpg";
import Layout from "@/components/front/include/Layout";
import PostOrder from "@/sections/front/PostOrder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { TfiTruck } from "react-icons/tfi";
import style from "./index.module.scss";

const UpdateInformation = () => {
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
                        <Link href={"#"} className={style.active}>
                          <span>
                            <TfiTruck />
                          </span>
                          משלוחים קרובים
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"}>
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
                  <PostOrder />
                  <div className={style.postOrderBottom}>
                    <div className={style.pobTop}>
                      <ul>
                        <li>
                          <span>משלוח חינם:</span> שבת, 16 בנובמבר, 2024
                        </li>
                        <li>
                          <span>כתובת למשלוח:</span> {`10 ד"ר דרבלה, ראשון לציון,`} 
                          ישראל
                        </li>
                      </ul>
                    </div>
                    <div className={style.pobBottom}>
                      <ul className="d-flex">
                        <li>
                          <Link href={"#"}>לשנות כתובת</Link>
                        </li>
                        <li>
                          <Link href={"#"}>פרטי כרטיס אשראי</Link>
                        </li>
                        <li>
                          <Link href={"#"}>אפשרויות ארוחות</Link>
                        </li>
                      </ul>
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

export default UpdateInformation;
