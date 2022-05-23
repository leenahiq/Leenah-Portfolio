import apple from "../assets/apple.png";
// import recipe from "../assets/recipe.png";
import insta from "../assets/insta.png";
import dice from "../assets/dice.png";
import list from "../assets/list.png";
import poke from "../assets/poke.png";
import drum from "../assets/drum.png";
import "../components/project.css";
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";

const Project = () => {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <div>
        {/* <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img className="" src={recipe} alt="recipe site" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn1">
           <BsGithub className="project-icon"/>
          </a>
          <a href="/" className="btn1 ">
            Live Demo
          </a>
        </article> */}
      </div>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <h3>Apple Clone</h3>
          <div className="portfolio_item-image">
            <img className="img" src={apple} alt="apple clone" />
          </div>
          <p>HTML & CSS</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/Apple-Clone"
              target="_blank"
              rel="noreferrer"
              className="btn1"
            >
              <BsGithub className="project-icon" />
            </a>
            <a href="apple-website-clone-project.netlify.app" className="btn1 ">
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>Insta Clone</h3>
          <div className="portfolio_item-image">
            <img className="img" src={insta} alt="insta clone" />
          </div>
          <p>MERN Stack App</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/Insta-Clone-React-App"
              className="btn1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://insta-clone-react-app.netlify.app/"
              className="btn1 "
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>Dice Roll Game</h3>
          <div className="portfolio_item-image">
            <img className="img" src={dice} alt="dice game" />
          </div>
          <p>HTML, CSS3 & JavaScript </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/Dice-Roll"
              className="btn1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href=" https://tender-noyce-aedbc2.netlify.app/"
              className="btn1 "
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>TO Do List</h3>
          <div className="portfolio_item-image">
            <img className="img" src={list} alt="to-do-list" />
          </div>
          <p>React.js and CSS3</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/TO_DO_LIST"
              className="btn1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://to-do-list-react-app1.netlify.app/"
              className="btn1 "
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>Poke-Search-Bar</h3>
          <div className="portfolio_item-image">
            <img className="img" src={poke} alt="poke-search-bar" />
          </div>
          <p>React.js, CSS3 and API</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/Pokemon-Search-Bar"
              className="btn1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://poke-search-bar.netlify.app/"
              className="btn1 "
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <h3>Drum Kit</h3>
          <div className="portfolio_item-image">
            <img className="img" src={drum} alt="drum-kit" />
          </div>
          <p>HTML, CSS & JavaScript</p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/leenahiq/Drum-Kit"
              className="btn1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="project-icon" />
            </a>
            <a
              href="https://quizzical-mestorf-f7282b.netlify.app"
              className="btn1 "
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPlayCircleFill className="project-icon" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
