import React from "react";
import style from "./index.module.scss";
// import linkedIn from "@/assets/front/images/linkedIn.svg";
// import youTube from "@/assets/front/images/you-tube.svg";
// import instagram from "@/assets/front/images/instagram.svg";
// import xHandel from "@/assets/front/images/x-handel.svg";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <>
      <div className={style.fSocial} dir="ltr">
        <ul className="d-flex align-items-center">
          <li>
            <Link href={"#"}>
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
