import CV from "../assets/cv.pdf";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Leenah Iqbal</h1>
        <h5 className="text-light">full Stack Developer</h5>
        <div>
          <h5>I love designing and building web applications </h5>
        </div>
        <div className="ctm">
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
        <a href="#contact" className="scroll_down">
          Contact
        </a>
        <div className="header__socials"></div>
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
    </header>
  );
};

export default Header;
