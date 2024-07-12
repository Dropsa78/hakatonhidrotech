import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/submit_form', (req, res) => {
    const { Estado, colonia, ph, microrganismos, } = req.body;
    res.send(`Tu ${Estado} tiene un nivel de ph de ${ph} y de microorganismos ${microrganismos} `);
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
