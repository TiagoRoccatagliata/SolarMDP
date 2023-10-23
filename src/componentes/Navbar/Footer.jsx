import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>SolarMdp</h1>
                    
                    <p>Desde la comodidad de tu hogar,solicita el equípo  que más se acomode a tu proyecto!</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-google"></i>
                    </a>
                </div>
            </div>
         
        </div>
    )
}

export default Footer