import style from "./index.module.scss";
// import linkedIn from "@/assets/front/images/linkedIn.svg";
// import youTube from "@/assets/front/images/you-tube.svg";
// import instagram from "@/assets/front/images/instagram.svg";
// import xHandel from "@/assets/front/images/x-handel.svg";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Social = ({ socialLink }) => {
  return (
    <>
      <div className={style.fSocial} dir="ltr">
        <ul className="d-flex align-items-center">
          <li>
            <Link href={socialLink?.twitter_url || '#'}>
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href={socialLink?.insta_url || '#'}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={socialLink?.youtube_url || '#'}>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href={socialLink?.linkedin_url || '#'}>
              <FaLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
