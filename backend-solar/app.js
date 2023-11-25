const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.post('/enviar-correo', async (req, res) => {
    try {
        const { nombre, email, tema, mensaje } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tucorreo@gmail.com',
                pass: 'tucontraseña',
            },
        });

        const mailOptions = {
            from: 'tucorreo@gmail.com',
            to: 'destinatario@gmail.com',
            subject: tema,
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo:', error.message);
        res.status(500).send('Hubo un problema al enviar el correo');
    }
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
