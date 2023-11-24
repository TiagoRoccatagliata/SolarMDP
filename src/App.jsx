import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "./componentes/routes/Home";
import About from "./componentes/routes/About";
import Productos from "./componentes/routes/Productos";
import Contact from "./componentes/routes/Contact";

import Services from "./componentes/routes/Services"; // Asegúrate de importar el componente Services

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} /> {/* Nueva ruta para servicios */}
      </Routes>
    </div>
  );
}
