import React from "react";
import cj from "../assets/img/cj.jpeg";
import whatsapp from "../assets/img/whatsapp.svg";
import fb from "../assets/img/fb.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";

export const Contact = () => {
  return (
    <section className="skill contact" id="contact">
      <div className="technical-skills">
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
      <p></p>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-bx">
              <h2>Contact Details</h2>
              <p></p>
              <div className="contact-me">
                <div className="row1">
                  {/* image of me */}
                  <div className="me">
                    <img src={cj} alt={cj} />
                  </div>
                </div>
                <div className="row2">
                  <div className="item">
                    <img src={fb} alt={fb} />
                    <a href="https://www.facebook.com/chathura.janithya.9/">
                      Chathura Janithya
                    </a>
                  </div>
                  <div className="item">
                    <img src={whatsapp} alt={whatsapp} />
                    <a href="#a">+94 71 2150 138</a>
                  </div>
                  <div className="item">
                    <img src={github} alt={github} />
                    <a href="https://github.com/ChathuraJanithya">
                      github.com/Chathura_Janithya
                    </a>
                  </div>
                  <div className="item">
                    <img src={linkedin} alt={linkedin} />
                    <a href="https://www.linkedin.com/in/chathura-janithya-60b27b249/">
                      Chathura Janithya
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
