import React from 'react';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Hi, I am Rahul Sai. I started out with programming in C during my
            summer vacations when I was 10. Since then, I have evolved into a
            Full Stack Engineer / Machine Learning Engineer.
          </p>
          <p className="lead mb-5">
            I have extensive experience across various programming languages,
            tools and frameworks; you name it and I have probably used it. I can
            adapt to any project or team that you might need me in. P.S Check
            out my Github profile for some projects that I have made.
          </p>
          <p className="lead mb-5">
            I have previously worked with early-stage as well as funded startups
            in order to build products in tight timeframes.
          </p>

          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Engineer</h3>
              <div className="subheading mb-3">MathonGo</div>
              <p>
                Developed a Live Class Platform from scratch (MERN stack) with a
                low latency public and private chat system along with
                Interactive Polls to improve user engagement.
              </p>
              <p>
                Also developed internal tools to grade and tag questions for
                competitive examinations.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - June 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">React Developer</h3>
              <div className="subheading mb-3">
                Grexter Housing Solutions Pvt. Ltd.
              </div>
              <p>
                Worked primarily on the development and overall optimization of
                the website built on React and Next.js and improved the page
                load speeds by nearly 40% and Improved the SERP of the website
                and increased the organic traffic on the website by 30%.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - July 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Vellore Institute of Technology (Vellore,TN)
              </h3>
              <div className="subheading mb-3">
                Bachelor of Technology (B.Tech)
              </div>
              <div>Computer Science and Engineering</div>
              <p>CGPA: 9.25</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - May 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                SBOA School and Junior College (Chennai, TN)
              </h3>
              <div className="subheading mb-3">Class 12th (CBSE)</div>
              <p>Percentage: 93%</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2015 - May 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Delhi Public School (Korba, CG)</h3>
              <div className="subheading mb-3">Class 10th (CBSE)</div>
              <p>CGPA: 10.0</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2004 - June 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Other Tools</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              C++
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Golang
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              SQL
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              MongoDB
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              GraphQL
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Numpy/Pandas
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Matplotlib
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Scikit-Learn
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              TensorFlow
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Keras
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Continous Integration
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Continous Deployment
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a developer, I enjoy most of my time gathering
            technical knowledge in all forms possible and not just limited to
            topics related to computers. I have a fascination with cars and I
            happen to have an extensive knowledge on automotive engineering. I
            am an avid Formula 1 fan, and I also enjoy simulator racing.
          </p>
          <p className="mb-0">
            When forced indoors, I am a movie and series buff.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="cert"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Deep Learning Specialization - Coursera and deeplearning.ai
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              TensorFlow in Practice Specialization - Coursera and
              deeplearning.ai
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Web Developer Bootcamp - Udemy and Colt Steele
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Machine Learning A-Z - Udemy and Kiril Eremenko
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
