import React from "react";
import "./Footer.css";
import img from "../../Images/mainlogo1.PNG";
import img1 from "../../Images/cer3.PNG";
import img2 from "../../Images/cer2.PNG";
import img3 from "../../Images/cer1.PNG";
import img4 from "../../Images/footerdown.PNG";
import { SiWhatsapp } from "react-icons/si";
import { RiYoutubeLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <>
      <section className="f-wrapper">
        <div className="upperpart">
          <div style={{ width: "60%" }}>
            <img src={img} alt="Not Load" className="image" />
          </div>
          <div style={{ width: "40%" }}>
            <div style={{ width: "100%", display: "flex", height: "100%" }}>
              <div className="cer">
                <img
                  src={img3}
                  alt=""
                  style={{ width: "100px", height: "80px" }}
                />
              </div>
              <div className="cer">
                <img
                  src={img1}
                  alt=""
                  style={{ width: "80px", height: "120px" }}
                />
              </div>
              <div className="cer">
                <img
                  src={img2}
                  alt=""
                  style={{ width: "170px", height: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="f-container">
          <div className="f-left">
            <div className="col1" style={{ margin: 0, padding: 0 }}>
              <div className="item">HOME</div>
              <div className="item">CUSTOMER SERVICE</div>
              <div className="item">PAYMENT POLICY</div>
              <div className="item">FAQ</div>
              <div className="item">CORPORATE SALES ENQUIRY</div>
              <div className="item">CORPORATE GOVERNANCE</div>
              <div className="item">CERTIFICATE FOR DIAMOND JEWELLERY</div>
            </div>
            <div className="col2" style={{ margin: 0, padding: 0 }}>
              <div className="item">ABOUT US</div>
              <div className="item">DATA PRIVACY NOTICE</div>
              <div className="item">RETURN POLICY</div>
              <div className="item">JEWELLERY CARE GUIDE</div>
              <div className="item">FRANCHISE ENQUIRY</div>
              <div className="item">PRIVACY POLICY</div>
            </div>
          </div>
          <div className="f-right">
            <div className="col1" style={{ margin: 0, padding: 0 }}>
              <div className="item">CONTACT US </div>
              <div className="item">INVESTOR RELATIONS</div>
              <div className="item">LOYALTYPOINTS T&C </div>
              <div className="item">CSR</div>
              <div className="item">FOREVERMARK</div>
              <div className="item">SHIPPING POLICY</div>
            </div>
            <div className="col2" style={{ margin: 0, padding: 0 }}>
              <div className="item">BLOG</div>
              <div className="item">SWARNA YOJANA T&C</div>
              <div className="item">OFFER'S TERMS & CONDITIONS</div>
              <div className="item">EASY RETURNS </div>
              <div className="item">BOARD OF DIRECTORS</div>
              <div className="item">CANCELLATION AND REFUND POLICY</div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="footer "
        style={{ display: "flex", justifyContent: "space-between",flexWrap:'wrap'}}
      >
        <div
          className="primaryText"
          style={{ fontSize: "larger", display: "flex", alignItems: "center" }}
        >
          © 2023 Jewellery Town . All Rights Reserved.
        </div>
        <div style={{ display: "flex" }}>
          <div className="icn primaryText">
            <SiWhatsapp />
          </div>
          <div className="icn primaryText">
            <RiYoutubeLine />
          </div>
          <div className="icn primaryText">
            <GrInstagram />
          </div>
          <div className="icn primaryText">
            <FaFacebook />
          </div>
          <div className="icn primaryText">
            <BsTwitter />
          </div>
        </div>
        <div>
          <img
            src={img4}
            alt="Not Load"
            style={{ width: "250px", height: "35px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
