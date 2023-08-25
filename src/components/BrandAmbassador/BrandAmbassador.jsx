import React from "react";
import "./BrandAmbassador.css";
import img1 from "../../Images/modals/model1.PNG";
import img2 from "../../Images/modals/model2.PNG";
import img3 from "../../Images/modals/model3.PNG";
import img4 from "../../Images/modals/model4.PNG";
import img5 from "../../Images/modals/model5.PNG";
import img6 from "../../Images/modals/model6.PNG";

function BrandAmbassador() {
  return (
    <section className="b-wrapper">
      <div className="b-container paddings innerWidth">

        <div className="primaryText " style={{textAlign:'center'}}>YOU & US</div>
        <div className="row1">
          <div className="item">
            <a href="https://www.instagram.com/jaya.ahsan/" target="_blank">
              <img src={img1} alt="Not load" />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.instagram.com/kiaraaliaadvani/"
              target="_blank"
            >
              <img src={img2} alt="Not load" />
            </a>
          </div>

          <div className="item">
            <a
              href="https://www.instagram.com/madhumita_sarcar/"
              target="_blank"
            >
              <img src={img3} alt="Not load" />
            </a>
          </div>
        </div>
        <div className="row1">
          <div className="item">
            <a href="https://www.instagram.com/souravganguly/" target="_blank">
              <img src={img4} alt="Not load" />
            </a>
          </div>

          <div className="item">
            <a href="https://www.instagram.com/sunitakaushik5/" target="_blank">
              <img src={img5} alt="Not load" />
            </a>
          </div>

          <div className="item">
            <a href="https://www.instagram.com/balanvidya/" target="_blank">
              <img src={img6} alt="Not load" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandAmbassador;
