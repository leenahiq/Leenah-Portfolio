import "../components/footer.css";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <h3>
        Leenah Iqbal
        <BiCopyright />
      </h3>
      <div className="footer_icon">
        <a href="/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="/" target="_blank">
          <BsGithub />
        </a>
        <a href="/" target="_blank">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
