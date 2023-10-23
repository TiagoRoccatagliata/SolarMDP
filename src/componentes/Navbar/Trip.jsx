import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../Navbar/trip1.webp"
import Trip2 from "../Navbar/trip2.webp"
import Trip3 from "../Navbar/trip3.webp"

function Trip(){
    return(
        <div className="trip">
            <h1>Productos Destacados</h1>
            <div className="tripcard">
                <TripData
                    image={Trip1} 
                    heading="Bomba Solar Sumergible Centrífuga 4 2200W"  
                               
                />

<TripData
                    image={Trip2} 
                    heading="Bomba Solar Sumergible Centrífuga 4 500W"
                />

<TripData
                    image={Trip3} 
                    heading="Termotanque Solar Termosifónico 100 litros"  
                               
                />
            </div>
        </div>
    )
}

export default Trip