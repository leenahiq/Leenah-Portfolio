import apple from "../assets/apple.png";
import recipe from "../assets/recipe.png";
import insta from "../assets/insta.jpg";
import dice from "../assets/dice.png";
import list from "../assets/list.png";
import poke from "../assets/poke.png";
import drum from "../assets/drum.png";
import "../components/project.css";
const Project = () => {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img src={recipe} alt="recipe site" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={apple} alt="apple clone" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={insta} alt="insta clone" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={dice} alt="dice game" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={list} alt="to-do-list" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={poke} alt="poke-search-bar" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={drum} alt="drum-kit" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Project;
