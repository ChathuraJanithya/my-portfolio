import React from "react";

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h1 className="head-me">
        Meet the person <br />
        behind the screen.
      </h1>
      <div className="container">
        <div className="col1">
          <p>
            Hi, I'm Chathura, I'm a passionate Software Engineering Student,
            self-taught Full stack Developer, Blogger and Tech-Enthusiast who
            addicted to learning, researching and I love to collaborate with
            Open Source.
          </p>
          <p>
            With a strong foundation in coding and problem-solving, I am always
            eager to learn and adapt to new technologies. I believe in
            continuous improvement and strive to write clean, efficient, and
            maintainable code. I enjoy collaborating with teams to bring ideas
            to life and contribute to impactful projects.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest web
            development trends, reading tech blogs, or playing video games. I'm
            also an avid traveler and love capturing moments through
            photography.
          </p>
        </div>
        <div className="col2">
          <h1 className="head-edu">Education</h1>
          <hr />
          <ul>
            <li>
              <h3>Sri Lanka Institute of Information Technology (SLIIT)</h3>
              <p>2021 - Present</p>
              <p>
                BSc (Hons) in Information Technology speacialising in Software
                Engineering with a GPA of 3.12
              </p>
            </li>
            <li>
              <h3>Maliyadewa Model College, Kurunagala</h3>
              <p>2007 - 2020</p>
              <p> G.C.E. Advanced Level Examination (2017)</p>
              <p> G.C.E. Ordinary Level Examination (2020)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
