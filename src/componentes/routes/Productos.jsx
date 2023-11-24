import Hero from "../Navbar/Hero";
import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer";

import Trip2 from "../Navbar/Trip2"

function Productos (){
    return(
        <>
        <Navbar />  
        <Hero
        cName="hero-mid"
        heroImg="src\componentes\Assets\hero1.jpg"
        tittle="Productos"
        
      
        btnClass="hide"
        />
        
        <Trip2 />
        <Footer/>
        </>
    )
}


export default Productos