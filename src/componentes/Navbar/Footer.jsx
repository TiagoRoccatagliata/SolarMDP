import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="about">
          <h1 className="brand">SolarMdp</h1>
          <p>
            Desde la comodidad de tu hogar, solicita el equipo que más se
            acomode a tu proyecto solar.
          </p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/solarmdp">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/solarmdp/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/solarmdp/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x9584dbca8ba1778f:0xfd9bac8017a482da?source=g.page.m.we">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="contact-info">
          <h2>Contacto</h2>
          <p>
            Dirección: Maríe Curie 5159, B7605GAC Mar del Plata, Provincia de Buenos Aires.
            <br />
            Teléfono: 02235697486
            <br />
            Correo Electrónico: solarmdp@gmail.com
          </p>
        </div>
        <div className="business-hours">
          <h2>Horario de Atención</h2>
          <p>
            Viernes: 8:30 a.m. - 6:00 p.m.
            <br />
            Sábado: Cerrado
            <br />
            Domingo: Cerrado
            <br />
            Lunes: 8:30 a.m. - 6:00 p.m.
            <br />
            Martes: 8:30 a.m. - 6:00 p.m.
            <br />
            Miércoles: 8:30 a.m. - 6:00 p.m.
            <br />
            Jueves: 8:30 a.m. - 6:00 p.m.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
