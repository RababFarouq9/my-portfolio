import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Intro from "./Components/Intro/intro";
import Navbar from "./Components/NavBar/navbar";
import Skills from "./Components/Skils/skills";
import Works from "./Components/Works/works";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function App() {
   useEffect(() => {
    ScrollReveal({ 
      distance:'80px',
      duration:2000,
      delay:200
    });

    ScrollReveal().reveal('.bg,.introContent', { origin: 'top' });
    ScrollReveal().reveal('.skills', { origin: 'bottom' });
    ScrollReveal().reveal('.worksTitle,.worksDesc,.worksImg,.worksBtn', { origin: 'left' });
    ScrollReveal().reveal('.clientImg', { origin: 'right' });
  }, []);
  return (
    <div className="App">
 <Navbar/>
 <Intro/>
 <Skills/>
<Works/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
