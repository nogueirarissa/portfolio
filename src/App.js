import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/footer/Footer.css';
import './components/navbar/NavBar.css';
import './components/banner/Banner.css';
import './components/projects/Projects.css';
import './components/contact/Contact.css';
import './components/skills/Skills.css';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
//import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
