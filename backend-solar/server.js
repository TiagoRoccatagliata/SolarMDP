const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: 'http://tu-frontend.com',  // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar-correo', async (req, res) => {
  const { nombre, email, tema, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'tucorreo@gmail.com',
      to: 'tiagoroccatagliata@gmail.com',
      subject: tema,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    res.status(500).send('Hubo un problema al enviar el correo');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
