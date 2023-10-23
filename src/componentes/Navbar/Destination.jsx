import "./DestinationStyles.css"
import DestinationData from "./DestinationData"
import Mountain1 from "../Navbar/img1.jpg"
import Mountain2 from "../Navbar/img2.jpg"
import Mountain3 from "../Navbar/im3.jpg"
import Mountain4 from "../Navbar/img6.jpg"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Productos Sustentables</h1>
            <p>Queremos vivir de una manera que mejore nuestro planeta, y creemos en mantener un balance entre la actividad humana y los procesos naturales. Es por eso que nuestros productos se centran en mejorar la salud del ecosistema global.</p>
            <DestinationData
            className="first-des"
            heading="Responsabilidad SocioAmbiental"
            text="En SolarMDP nos preocupamos profundamente por la salud de la Tierra, es por eso que estamos orgullosos de ofrecer productos amigables con el medioambiente. Creemos que los consumidores deberían siempre considerar la sustentabilidad en primera instancia."
            img1={Mountain1}
            img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading="¿Por qué elegir SolarMDP ?"
            text="SolarMDP se originó de manera modesta, pero nuestro impulso y voluntad por lograr cambios positivos nos proporcionó crecer y convertirnos en un(a) gran Tienda online de productos sustentables el día de hoy. No solo se trata de ofrecer productos ecológicos y socialmente responsables, sino que nos esforzamos por informar e inspirar a la comunidad Local, y Nacional a adoptar un estilo de vida sustentable."
            img1={Mountain3}
            img2={Mountain4}
            />    

        </div>

    )
}


export default Destination