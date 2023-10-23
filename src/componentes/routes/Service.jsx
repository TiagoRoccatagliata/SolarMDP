import Hero from "../Navbar/Hero";
import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer";
import Trip from "../Navbar/Trip";

function Service (){
    return(
        <>
        <Navbar />  
        <Hero
        cName="hero-mid"
        heroImg="src\componentes\Assets\hero1.jpg"
        tittle="Productos"
        
      
        btnClass="hide"
        />
        <Trip />
        <Footer/>
        </>
    )
}


export default Service