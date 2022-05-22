import { BsPatchCheckFill } from "react-icons/bs";
import "../components/skills.css";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Netlify</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Developement</h3>

          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Mongoose</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>SQL</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Squelise</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>Heroku</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
