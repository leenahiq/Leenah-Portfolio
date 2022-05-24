import CV from "../assets/cv.pdf";
import "../components/header.css";
import ME from "../assets/img.jpg";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  const text = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
  };

  const animateStyle = {
    initial: {
      y: 50,
      opacity: 0,
      scale: 1.25,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <header id="home">
      <div className="container header__container">
        <motion.div variants={text} initial="initial" animate="animate">
          <motion.h2 variants={animateStyle}>Hello! I am</motion.h2>
          <motion.h1 variants={animateStyle} className="name">
            Leenah Iqbal
          </motion.h1>
          <motion.h3 variants={animateStyle}>
            I am an aspiring software developer
          </motion.h3>
          <div>
            <motion.h5 variants={animateStyle}>
              I build full-Stack/MERN-Stack, UX/UI and responsive web
              application.
            </motion.h5>
            <motion.h5 variants={animateStyle}>
              I always look forward to explore and learn more!
            </motion.h5>
          </div>
        </motion.div>
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
        <div initial="initial" animate="animate" className="art">
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
