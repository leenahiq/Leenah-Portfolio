import "../components/about.css";
import pic from "../assets/pic.jpeg";
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
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about-card">
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about-card">
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
