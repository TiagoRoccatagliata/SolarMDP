import React, { useState } from 'react';
import axios from 'axios';

import './ContactFormStyles.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tema: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/enviar-correo', formData);
      alert('Correo enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el correo:', error.message);
      alert('Hubo un problema al enviar el correo');
    }
  };

  return (
    <div className="form-container">
      <h1>Envíanos un Mensaje</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tema"
          placeholder="Tema"
          value={formData.tema}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
