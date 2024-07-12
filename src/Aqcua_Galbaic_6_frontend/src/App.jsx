import React from 'react';

function App() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Acqua Galbanic.</title>
        <link rel="stylesheet" href="styles.css" />
        <style>
          
         
          
        </style>
      </head>
      <body>
        <header>
          <h1>Acqua Galbanic</h1>
          </header>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#Productos">Productos</a></li>
            <li><a href="#Tecnologia">Tecnologia</a></li>
            <li><a href="#Tabla de control">Tabla de control</a></li>
          </ul>
        </nav>
        <main>
          <section id="inicio">
            <h2>Acqua Galbanic</h2>
            <p>Nuestro producto llegó para cambiar el modelo de negocio de las plantas tratadoras de agua que hacen un gasto desmedido de energía.</p>
          </section>
          <section id="productos">
            <h2>Producto</h2>
            <ul>
              <li>Celda de combustible a base de Nanopartículas</li>
              <li>Sensores de pH y turbidez</li>
              <li>Base de datos para el mejor control de calidad</li>
            </ul>
          </section>
          <section id="tecnologia">
            <h2>Tecnología</h2>
            <p>Nuestra innovación está de la mano con ICP (Internet Computer Protocol) usando sensores de pH y turbidez para tener una base de datos para el control de la purificación y autoabastecimiento de la electricidad de las plantas tratadoras de aguas.</p>
          </section>
          <section id="Tabla de control">
            <h2>Calidad del agua</h2>
            <form action="submit_form.php" method="POST">
              <label htmlFor="estado">Estado:</label>
              <input type="text" id="estado" name="estado" required /><br /><br />
              <label htmlFor="colonia">Colonia:</label>
              <input type="text" id="colonia" name="colonia" required /><br /><br />
              <label htmlFor="ph">Ph:</label><br />
              <textarea id="ph" name="ph" rows="4" required></textarea><br /><br />
              <label htmlFor="microorganismos">Microrganismos:</label><br />
              <textarea id="microrganismos" name="microrganismos" rows="4" required></textarea><br /><br />
              <button type="submit">Subir</button>
            </form>
          </section>
        </main>
       
        <script src="script.js"></script>
      </body>
    </html>
  );
}

export default App;
