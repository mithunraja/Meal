import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import logo from "@/assets/front/images/logo.png";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={style.footer} dir="ltr">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 col-12">
              <div className={style.footerLogo}>
                <Image alt="" src={logo} width={0} height={0} />
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className={style.fNav}>
                    <h5>Use cases</h5>
                    <ul>
                      <li>
                        <Link href={"#"}>UI design</Link>
                      </li>
                      <li>
                        <Link href={"#"}>UX design</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Wireframing</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Diagramming</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Brainstorming</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Online whiteboard</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Team collaboration</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className={style.fNav}>
                    <h5>Explore</h5>
                    <ul>
                      <li>
                        <Link href={"#"}>Design</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Prototyping</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Development features</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Design systems</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Collaboration features</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Design process</Link>
                      </li>
                      <li>
                        <Link href={"#"}>FigJam</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className={style.fNav}>
                    <h5>Resources</h5>
                    <ul>
                      <li>
                        <Link href={"#"}>Blog</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Best practices</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Colors</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Color wheel</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Support</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Developers</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Resource library</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className={style.fNav}>
                    <h5>Get in Touch</h5>
                    <div className={style.inputArea}>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your e-mail"
                        className={style.input1}
                      />
                      <button>
                        <BiRightArrowAlt />
                      </button>
                    </div>
                    <div className={style.fSocial}>
                      <h5>Follow Us at</h5>
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
