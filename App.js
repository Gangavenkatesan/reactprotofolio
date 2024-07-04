
import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Contact from './components/contact.js';
import Footer from './components/fotter.js';
import Project from './components/project.js';
import Resume from './components/resume.js';
import Skills from './components/skills.js';



function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <Skills/>
     <Project/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
