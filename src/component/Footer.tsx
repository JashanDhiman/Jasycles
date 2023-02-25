import React from "react";
import * as footerStyles from "../styles/footer.module.css";

const Footer = () => {
 return (
  <footer className={footerStyles.footerDistributed}>
   <div className={footerStyles.footerLeft}>
    <h3>
     Company<span>logo</span>
    </h3>

    <p className={footerStyles.footerLinks}>
     <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
    </p>

    <p className={footerStyles.footerCompanyName}>Company Name © 2015</p>

    <div className={footerStyles.footerIcons}>
     {/*<a href="#">
      <i className={footerStyles.fa fa-facebook"></i>
     </a>
     <a href="#">
      <i className={footerStyles.fa fa-twitter"></i>
     </a>
     <a href="#">
      <i className={footerStyles.fa fa-linkedin"></i>
     </a>
     <a href="#">
      <i className={footerStyles.fa fa-github"></i>
     </a>*/}
    </div>
   </div>

   <div className={footerStyles.footerRight}>
    <p>Contact Us</p>

    <form action="#" method="post">
     <input type="text" name="email" placeholder="Email" />
     <textarea name="message" placeholder="Message"></textarea>
     <button>Send</button>
    </form>
   </div>
  </footer>
 );
};

export default Footer;
