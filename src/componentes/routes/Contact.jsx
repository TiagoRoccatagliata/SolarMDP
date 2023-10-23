import Hero from "../Navbar/Hero";
import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer";
import ContactForm from "../Navbar/ContactForm"


function Contact (){
    return(
        <>
        <Navbar />  
        <Hero
        cName="hero-mid"
        heroImg="src\componentes\Assets\362232026_704216638384635_4906389604703660220_n.jpg "
        tittle="Contac"
        
      
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )   
}


export default Contact