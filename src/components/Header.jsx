import CV from "../assets/cv.pdf";
import "../components/header.css";
// import ME from "../assets/img.png";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Leenah Iqbal</h1>
        <h5 className="text-light">full Stack Developer</h5>
        <div>
          <h5>I love designing and building web applications </h5>
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
          <a href="/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </div>

        {/* <div className="me">
          <img src={ME} alt="img" />
        </div> */}
        {/* <a href="#contact" className="scroll_down">
          Contact
        </a> */}
      </div>
    </header>
  );
};

export default Header;
