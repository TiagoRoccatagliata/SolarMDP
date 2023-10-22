import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "./componentes/routes/Home";
import About from "./componentes/routes/About";
import Service from "./componentes/routes/Service";
import Contact from "./componentes/routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}