import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.firstele}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={classes.head1}>Be the first to know</div>
          <div className={classes.text1}>
            Sign up for updates from mettā muse.
          </div>
          <div className={classes.subscribe}>
            <input
              placeholder="Enter your e-mail..."
              className={classes.input}
            ></input>
            <button className={classes.button}>
              <span className={classes.buttontext}>Subscribe</span>
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "176px",
          }}
        >
          <div className={classes.contact}>CONTACT US</div>
          <div className={classes.details}>
            <div>
              <span className={classes.number}>+44 221 133 5360</span>
              <span className={classes.extrastar}></span>
            </div>
            <div className={classes.mail}>customercare@mettamuse.com</div>
          </div>
          <div className={classes.currency}>Currency</div>
          <div className={classes.language}>
            <span className={classes.country}></span>
            <span className={classes.star}></span>
            <span className={classes.countryname}>USD</span>
          </div>
          <div className={classes.transaction}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.secele}>
        <div className={classes.group1}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={classes.group1head}>mettā muse</div>
            <div className={classes.group1text}>
              <span className={classes.contents}>About Us</span>
              <span className={classes.contents}>Stories</span>
              <span className={classes.contents}>Artisans</span>
              <span className={classes.contents}>Boutiques</span>
              <span className={classes.contents}>Contact Us</span>
              <span className={classes.contents}>EU Compliances Docs</span>
            </div>
          </div>
        </div>
        <div className={classes.group2}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={classes.group2head}>Quick Links</div>
            <div className={classes.group2text}>
              <span className={classes.contents}>Orders & Shipping</span>
              <span className={classes.contents}>Join/Login as a Seller</span>
              <span className={classes.contents}>Payment & Pricing</span>
              <span className={classes.contents}>Return & Refunds</span>
              <span className={classes.contents}>FAQs</span>
              <span className={classes.contents}>Privacy Policy</span>
              <span className={classes.contents}>Terms & Conditions</span>
            </div>
          </div>
        </div>
        <div className={classes.group3}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={classes.group3head}>Follow Us</div>
            <div className={classes.group3icons}>
              <span className={classes.social}>
                <FaInstagram size={30}></FaInstagram>
              </span>
              <span className={classes.social}>
                <CiLinkedin size={30}></CiLinkedin>
              </span>
            </div>
          </div>
          <div className={classes.seceletext}>mettā muse Accepts</div>
          <div className={classes.payments}>
            <span className={classes.paymentscontent}></span>
            <span className={classes.paymentscontent}></span>
            <span className={classes.paymentscontent}></span>
            <span className={classes.paymentscontent}></span>
            <span className={classes.paymentscontent}></span>
            <span className={classes.paymentscontent}></span>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
