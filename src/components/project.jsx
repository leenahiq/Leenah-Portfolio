import apple from "../assets/apple.png";
// import recipe from "../assets/recipe.png";
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
      <div>
        {/* <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img className="" src={recipe} alt="recipe site" />
          </div>
          <h3>project 1</h3>
          <a href="/" className="btn">
            gitHub
          </a>
          <a href="/" className="btn btn-primary">
            Live Demo
          </a>
        </article> */}
      </div>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={apple} alt="apple clone" />
          </div>
          <h3>project 1</h3>
          <a
            href="https://github.com/leenahiq/Apple-Clone"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            gitHub
          </a>
          <a
            href="apple-website-clone-project.netlify.app"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={insta} alt="insta clone" />
          </div>
          <h3>project 1</h3>
          <a
            href="https://github.com/leenahiq/Insta-Clone-React-App"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            gitHub
          </a>
          <a
            href="https://insta-clone-react-app.netlify.app/"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={dice} alt="dice game" />
          </div>
          <h3>project 1</h3>
          <a href="https://github.com/leenahiq/Dice-Roll" className="btn">
            gitHub
          </a>
          <a
            href=" https://tender-noyce-aedbc2.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={list} alt="to-do-list" />
          </div>
          <h3>project 1</h3>
          <a href="https://github.com/leenahiq/TO_DO_LIST" className="btn">
            gitHub
          </a>
          <a
            href="https://to-do-list-react-app1.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={poke} alt="poke-search-bar" />
          </div>
          <h3>project 1</h3>
          <a
            href="https://github.com/leenahiq/Pokemon-Search-Bar"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            gitHub
          </a>
          <a
            href="https://poke-search-bar.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="img" src={drum} alt="drum-kit" />
          </div>
          <h3>project 1</h3>
          <a
            href="https://github.com/leenahiq/Drum-Kit"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            gitHub
          </a>
          <a
            href="https://quizzical-mestorf-f7282b.netlify.app"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Project;
