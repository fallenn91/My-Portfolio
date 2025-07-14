import styles from './styles.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import Navbar from './Components/Navbar.jsx';
import Skills from './Components/Skills.jsx';
import Carousel from './Components/Carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
