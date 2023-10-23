import Hero from "../Navbar/Hero";
import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer";
import AboutUS from "../Navbar/AboutUs";



function About (){
    return(
        <>
        <Navbar />  
        <Hero 
        cName="hero-mid"
        heroImg="src\componentes\Assets\hero3.jpg"
        tittle="Sobre la Empresa SolarMdp"
        
      
        btnClass="hide"
        />
        <AboutUS />
        <Footer/>
        </>
    )
}


export default About