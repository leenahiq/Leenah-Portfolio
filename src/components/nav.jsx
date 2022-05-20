import "../components/nav.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle, FaBookReader } from "react-icons/fa";
import { MdMessage, MdWork } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#home" rel="noreferrer">
        <AiFillHome />
      </a>
      <a href="#about" rel="noreferrer">
        <FaUserCircle />
      </a>
      <a href="#skills" rel="noreferrer">
        <FaBookReader />
      </a>
      <a href="#projects" rel="noreferrer">
        <MdWork />
      </a>
      <a href="#contact" rel="noreferrer">
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
