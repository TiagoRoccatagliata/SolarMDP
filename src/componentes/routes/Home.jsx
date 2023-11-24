
import Destination from "../Navbar/Destination";
import Footer from "../Navbar/Footer";
import Hero from "../Navbar/Hero";
import Navbar from "../Navbar/Navbar"
import Trip from "../Navbar/Trip";

function Home (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="src\assets\hero5.jpg"
        tittle="Bienvenido al ShowRoom de Solar MDP"
        text="Tu Tienda online de productos sustentables."
        buttonText="Comprar"
        url="https://api.whatsapp.com/send?phone=5492235697486&text="
        btnClass="show"
        />
        <Destination />
        <Trip/>
        <Footer/>
        </>
    )
}


export default Home;