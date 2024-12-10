import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import logo from "@/assets/front/images/logo.png";
import Image from "next/image";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {

  const siteSetting = useSelector((state) => state.siteSetting);

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
                  <Link href={siteSetting?.siteSetting?.twitter_url || '#'}>
                    <FaXTwitter />
                  </Link>
                  </li>
                  <li>
                  <Link href={siteSetting?.siteSetting?.insta_url || '#'}>
                    <FaInstagram />
                  </Link>
                  </li>
                  <li>
                  <Link href={siteSetting?.siteSetting?.youtube_url || '#'}>
                    <FaYoutube />
                  </Link>
                  </li>
                  <li>
                  <Link href={siteSetting?.siteSetting?.linkedin_url || '#'}>
                    <FaLinkedin />
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.fBottom}>
          © Copyright 2022 Aqualeaf it solutions Pvt. Ltd. All Rights Reserved.
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
