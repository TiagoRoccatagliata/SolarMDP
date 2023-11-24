

import Navbar from "../Navbar/Navbar";
import Hero from "../Navbar/Hero";
import Footer from "../Navbar/Footer";
import Destination2 from "../Navbar/Destination2";
 

function Services() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero"
        heroImg="src/componentes/Assets/servicies1.jpg"
        tittle="Servicios"
        text="Tu Tienda online de productos sustentables."
        url="/"
        />
        <Destination2/>
       
     

      <Footer />
    </>
  );
}

export default Services;
