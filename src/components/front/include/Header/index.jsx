import logo from "@/assets/front/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import style from "./index.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { SET_SITE_SETTING } from "@/redux/siteSettingSlice";
import { contactInfoService } from "@/services/common.service";

const Header = () => {

  const dispatch = useDispatch();
  const siteSetting = useSelector((state) => state.siteSetting);

  // console.log("siteSetting", siteSetting)

  useEffect(() => {
    if (siteSetting?.siteSetting===null) {

      const fetchSetting = async () => {
        
        try {
          const response = await contactInfoService();
          if (response.status === 200) {
            dispatch(SET_SITE_SETTING(response.data));
          }
        } catch (e) {
          
        }

        
      }

      fetchSetting();

    }
  });


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${style.mainHeader} ${isSticky ? style.sticky : ""}`}>
        <div className="container-xxl">
          <div className="row justify-content-between align-items-center">
            <Col lg="auto" className="align-items-center">
              <div className={style.accountArea}>
                <Link href="#" className={style.account}>
                  להזמנה
                </Link>
              </div>
            </Col>
            <Col lg="auto">
              <div className={style.nav}>
                <ul className="d-flex">
                  <li>
                    <Link href="/">מסך הבית</Link>
                  </li>
                  <li>
                    <Link href={"/about-us"}>אודותינו</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>מאמרים</Link>
                  </li>
                  <li>
                    <Link href={"#"}>מומלצי השבוע</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>צור קשר</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="auto">
              <div className={style.logo}>
                <Link href={"/"}>
                  <Image
                      alt="Logo"
                      src={siteSetting?.siteSetting?.logo ? `${process.env.NEXT_PUBLIC_IMAGE_FILE_PATH}/logo-image/${siteSetting?.siteSetting?.logo}` : logo}
                      width={500}
                      height={500}
                    />
                </Link>
              </div>
            </Col>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
