import "../components/footer.css";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <h5>
        Build and designed by Leenah Iqbal 2022
        <BiCopyright />
      </h5>
      <div className="footer_icon">
        <a
          href="https://www.linkedin.com/in/leenah-iqbal/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/leenahiq" target="_blank" rel="noreferrer">
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
    </footer>
  );
};

export default Footer;
