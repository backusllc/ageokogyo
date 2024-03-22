import React from "react";
import { Link } from "gatsby";

import Logo from "../../../assets/images/logo.svg";
import { footerContainer, footerInner, termLink, logoContainer, copyrightContainer, copyright, companyName } from "./Footer.css";

const links = [
  { to: "/notification", text: "利用規約" },
  { to: "/privacy", text: "個人情報保護方針" },
  { to: "/tokushohou", text: "特定商取引法に基づく表記" },
  { to: "/refund", text: "返金ポリシー" },
  { to: "/shipping", text: "配送ポリシー" },
];

const thisYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerInner}>
        <div>
          {links.map((link, index) => (
            <Link key={index} className={termLink} to={link.to}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className={logoContainer}>
          <Logo />
          <div className={copyrightContainer}>
            <div className={companyName}>上尾工業株式会社</div>
            <div className={copyright}>{`${thisYear} ©Ageokogyo all rights reserved`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
