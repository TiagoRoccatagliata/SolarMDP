import "./DestinationStyles.css"
import DestinationData2 from "./DestinationData2"
import SolarTermica from "../Assets/solar_termica_image.jpg"
import SolarFoto from "../Assets/solar_fotovoltaica_image.jpg"
import SolarAereo from "../Assets/aerogeneradores_image.jpg"
import huellaDeCarbonoImage from "../Assets/HCO2.jpg"
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Soluciones en Energía Renovable</h1>
            <p>Nos dedicamos al proyecto, instalación y mantenimiento de instalaciones de energías renovables no solo para el ahorro energético sino también para el ahorro económico en las facturas de electricidad, gas, en viviendas, campos y negocios.</p>
            <DestinationData2
            className="first-des"
            heading="SOLAR TERMICA"
            text="La Energía del sol Calienta el agua mediante la instalacion de colectores termicos, obteniendo asi agua caliente gratis y reduciendo considerablemente el consumo de electricidad, o gas, para calentar el agua que consumimos, si se trata de Agua Caliente Sanitaria O para climatizar el agua de su Piscina"
            img1={SolarTermica}
            
            />

            <DestinationData2
            className="first-des-reverse"
            heading="SOLAR FOTOVOLTAICA"
            text="Realizamos instalaciones para el autoconsumo indistintamente del lugar en el que habite (rural o urbano).
            Los paneles solares fotovoltaicos se componen de celdas. Dichas celdas se aprovechan del efecto fotovoltaico, mediante el cual la energía luminosa produce cargas positivas y negativas en dos semiconductores próximos de distinto tipo, por lo que se produce un campo eléctrico con la capacidad de generar corriente."
            img1={SolarFoto}

            />    

             <DestinationData2
            className="first-des"
            heading="AEROGENERADORES"
            text="La energía eólica tiene mucho potencial y gran cantidad de aplicaciones. La instalación de un aerogenerador en una región ventosa permite producir electricidad para una vivienda aislada, para bombear agua, o para cualquier otra aplicación aislada en las que se necesite electricidad.
            
   Su uso puede ser en hogares, puestos, cabinas, y donde se requiera energía eléctrica de manera autónoma.
Los aerogeneradores pueden ser colocados en todo lugar donde los vientos soplen con cierta regularidad.
​"
            img1={SolarAereo}

            />    
    <div className="destination2">
    <div className="content-container">
    <div className="image-container">
      <img src={huellaDeCarbonoImage} alt="Huella de Carbono" />
    </div>
    <div className="text-container">
      <h1 className="section-title">HUELLA DE CARBONO</h1>
      <p className="section-text">
        Las organizaciones cada vez más comprometidas con los desafíos de crecimiento y desarrollo de las naciones se han propuesto como misión para el periodo actual y futuro contribuir al desarrollo sostenido y equilibrado de las actividades industriales, generando las condiciones para su desarrollo competitivo y socialmente responsable. Es por esto que cada vez es más importante conocer el alcance y el impacto de los procesos y de cada una de las fases del mismo, por ende incluyen sistemas de evaluación de los impactos ambientales de las operaciones de la compañía, en este caso específicamente se considera la evaluación de la Huella de Carbono (HdC), un método apenas conocido y relativamente novedoso que permite establecer el impacto de las emisiones de manera más certera.
        <br />
        <br />
        Esto nace debido a la presión de la cadena de abastecimiento por medir su impacto ambiental en este caso la HdC en sus productos y servicios; y de esta manera marcar la diferencia con sus competidores.
        <br />
        <br />
        En el mundo se ha empezado a trabajar en medir la huella de carbono por medio de diferentes metodologías, por otro lado las compañías están exigiendo a sus proveedores minoristas el valor de su HdC, lo que proyecta que todas las empresas van a tener que medirla en cada uno de sus productos si quieren ser competitivas en el mercado global. Y de igual manera en cada una de las etapas del proceso, ya que en su mayoría estas contribuyen en la generación de energía y de emisiones, esto se realiza con el fin de cumplir con las políticas ambientales de la organización, además de los requerimientos, que exige la normatividad y los estatutos, porque ya no es algo que se deba hacer por obligación es más bien una ventaja competitiva, en un mundo cada día más consciente de la problemática ambiental.
      </p>
    </div>
  </div>
</div>
        </div>
        
        

    )
}


export default Destination