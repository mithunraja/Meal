import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import Image from "next/image";
import logo from "@/assets/front/images/logo.png";
import Link from "next/link";
import { Col } from "react-bootstrap";

const Header = () => {
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
                    <Link href={"/articles"}>מאמרים</Link>
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
                  <Image alt="" src={logo} width={0} height={0} />
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
