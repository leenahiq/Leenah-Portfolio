import About from "./components/about";
import Contact from "./components/contact";

import Skills from "./components/skills";
import Nav from "./components/nav";
import Project from "./components/project";
import "./App.css";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
