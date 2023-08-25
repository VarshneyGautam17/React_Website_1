import React from "react";
import img from "../../Images/img1.PNG";
import "./ContactNew.css";
import img2 from "../../Images/mainlogo.PNG";
import img3 from "../../Images/googlePlay.PNG";

function ContactNew() {
  return (
    <section className="c1-wrapper">
      <div className="paddings innerWidth  c1-container">
        <div className="c1-left">
          <div>
            <div className="c1-text">
              <h1>
                Get Personalized
                <br />
                <span className="primaryText" style={{ fontSize: 38 }}>
                  HOROSCOPE
                </span>
                <br />
                & Exclusive sneak peek
                <br />
                to the latest collection
              </h1>
            </div>

            <img
              src={img2}
              alt="Not Load"
              style={{ height: 200, width: 260, marginLeft: 30, padding: 0 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "70%",
                alignItems: "center",
              }}
            >
              <span>Download Now</span>
              <img
                src={img3}
                alt=""
                style={{ borderRadius: "5px", width: 150 }}
              />
            </div>
          </div>

          
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
            <div
              className="image-container"
              style={{
                border: "8px solid rgba(232 232 232 / 93%)",
                // marginLeft: "5rem",
              }}
            >
              <img src={img} alt="Not Load" style={{ height: 560 }} />
            </div>
          </div>
      </div>
    </section>
  );
}

export default ContactNew;
