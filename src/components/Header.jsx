import CV from "../assets/cv.pdf";
import "../components/header.css";
import ME from "../assets/img.jpg";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello! I am</h2>
        <h1 className="name">Leenah Iqbal</h1>
        <h3>I am an aspiring software developer</h3>
        <div>
          <h5>
            I build full-Stack/MERN-Stack, UX/UI and responsive web application.
          </h5>
          <h5>I always look forward to explore and learn more!</h5>
        </div>
        <div className="cta">
          <a
            href={CV}
            download
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/leenah-iqbal/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/leenahiq"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/LeenahIqbal"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <img src={ME} alt="img" />
        </div>
        <a href="#contact" className="scroll_down">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
