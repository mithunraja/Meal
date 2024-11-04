import React from "react";
import style from "./index.module.scss";
import linkedIn from "@/assets/front/images/linkedIn.svg";
import youTube from "@/assets/front/images/you-tube.svg";
import instagram from "@/assets/front/images/instagram.svg";
import xHandel from "@/assets/front/images/x-handel.svg";
import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <>
      <div className={style.fSocial} dir="ltr">
        <ul className="d-flex align-items-center">
          <li>
            <Link href={"#"}>
              <Image alt="" src={xHandel} width={0} height={0} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image alt="" src={instagram} width={0} height={0} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image alt="" src={youTube} width={0} height={0} />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image alt="" src={linkedIn} width={0} height={0} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
