import { signal } from "@preact/signals-react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
//import "../styles/header.module.css";
import * as headerStyles from "../styles/header.module.css";

const Header = () => {
 const state = signal(0);
 return (
  <section className={headerStyles.headerSection}>
   <StaticImage src="../images/jascycles logo.png" alt="logo" placeholder="blurred" layout="fixed" width={50} height={50} />
   <ul className={headerStyles.list}>
    <li>{state.value}</li>
    <li>home</li>
    <li>about us</li>
    <li>adventure</li>
   </ul>
  </section>
 );
};

export default Header;
