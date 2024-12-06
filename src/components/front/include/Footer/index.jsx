import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import logo from "@/assets/front/images/logo.png";
import Image from "next/image";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={`d-flex justify-content-center ${style.fNav}`}>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href={"#"}>להזמנה</Link>
                  </li>
                  <li>
                    <Link href={"#"}>מסך הבית</Link>
                  </li>
                  <li>
                    <Link href={"#"}>אודותינו</Link>
                  </li>
                  <li>
                    <Link href={"#"}>מאמרים</Link>
                  </li>
                  <li>
                    <Link href={"#"}>מומלצי השבוע</Link>
                  </li>
                  <li>
                    <Link href={"#"}>החשבון שלי</Link>
                  </li>
                </ul>
              </div>
              <div className={`d-flex justify-content-center ${style.fSocial}`}>
                <ul className={`d-flex ${style.social}`}>
                  <li>
                    <a href="#">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.fBottom}>
          © Copyright 2022 Aqualeaf it solutions Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
