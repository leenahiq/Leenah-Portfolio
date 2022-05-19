import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Nav from "./components/nav";
import Project from "./components/project";
import "./App.css";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
