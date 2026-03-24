import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import { ProjectCard } from './components/ProjectCard';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCard />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;