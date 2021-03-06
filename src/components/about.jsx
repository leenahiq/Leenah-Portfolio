import "../components/about.css";
import pic from "../assets/pic.jpeg";
// import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={pic} alt="img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about-card">
              <h5>Profile</h5>
              <small>
                I am a self-motivated, highly ambitious and result-oriented
                technical professional, who has a keen interest in web
                development/frontend development and UI/UX design.{" "}
              </small>
            </article>
            <article className="about-card">
              <h5>Experience</h5>
              <small>
                Recently, I completed Develop course IT Level 2 and Master
                Bootcamp IT Level 4 at{" "}
                <a
                  href="https://wearecodenation.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Nation
                </a>{" "}
                and am passionate to explore and learn more about new skills and
                technologies.{" "}
              </small>
            </article>
            <article className="about-card">
              <h5>Goals</h5>
              <small>
                Earnestly focused on securing long-term employment to utilise my
                existing skills to develop a career in web development and
                advance my knowledge in the industry.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
