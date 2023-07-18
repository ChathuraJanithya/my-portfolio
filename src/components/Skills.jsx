import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import php from "../assets/img/php.svg";
import cPlus from "../assets/img/cPlus.svg";
import Java from "../assets/img/Java.svg";
import react from "../assets/img/react.svg";
import Node from "../assets/img/Node.svg";
import mongo from "../assets/img/mongo.svg";
import sql from "../assets/img/sql.svg";
import kotlin from "../assets/img/kotlin.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="technical-skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Technical Skills</h2>
                <p></p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3500}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={html} alt={`${html}`} />
                  </div>
                  <div className="item">
                    <img src={css} alt={`${css}`} />
                  </div>
                  <div className="item">
                    <img src={php} alt={`${php}`} />
                  </div>
                  <div className="item">
                    <img src={cPlus} alt={`${cPlus}`} />
                  </div>
                  <div className="item">
                    <img src={sql} alt={`${sql}`} />
                  </div>
                </Carousel>
                <p></p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={Java} alt={`${Java}`} />
                  </div>
                  <div className="item">
                    <img src={react} alt={`${react}`} />
                  </div>
                  <div className="item">
                    <img src={Node} alt={`${Node}`} />
                  </div>
                  <div className="item">
                    <img src={mongo} alt={`${mongo}`} />
                  </div>
                  <div className="item">
                    <img src={kotlin} alt={`${kotlin}`} />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Other Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt={`${meter1}`} />
                  <h5>Problem solving</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={`${meter2}`} />
                  <h5>Communication Skills</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={`${meter3}`} />
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={`${meter3}`} />
                  <h5>Object oriented concepts</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={`${meter3}`} />
                  <h5>Programming</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={`${meter1}`} />
                  <h5>Creativity</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt={`${colorSharp}`}
      />
    </section>
  );
};
