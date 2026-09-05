import { useState } from "react";
import "./App.css";

function App() {
  const [detalle, setDetalle] = useState(null);

  const experiencias = [
    {
      nombre: "Senderismo en la Sierra Nevada",
      lugar: "Santa Marta, Magdalena",
      precio: "$120.000 COP",
      imagen: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      descripcion: "Recorrido por senderos naturales rodeados de montañas, vegetación y biodiversidad."
    },
    {
      nombre: "Avistamiento de aves",
      lugar: "Leticia, Amazonas",
      precio: "$150.000 COP",
      imagen: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      descripcion: "Conoce diferentes especies de aves mientras disfrutas de los paisajes del Amazonas."
    },
    {
      nombre: "Ecocamping bajo las estrellas",
      lugar: "Guatapé, Antioquia",
      precio: "$180.000 COP",
      imagen: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=80",
      descripcion: "Una experiencia de descanso y conexión con la naturaleza en un entorno sostenible."
    }
  ];

  return (
    <>
      <header>
        <h2>🌿 Naturago</h2>
        <nav>
          <a href="#experiencias">Experiencias</a>
          <a href="#sobre">Sobre nosotros</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <small>ECOTURISMO SOSTENIBLE</small>
          <h1>Descubre Colombia de una forma diferente</h1>
          <p>
            Encuentra experiencias únicas para disfrutar de la naturaleza
            de manera responsable.
          </p>
          <a href="#experiencias" className="btn">Explorar</a>
        </div>
      </section>

      <main id="experiencias">
        <h2>Experiencias sostenibles</h2>
        <p className="subtitulo">
          Conoce algunas experiencias que puedes encontrar en Naturago.
        </p>

        <section className="cards">
          {experiencias.map((e, i) => (
            <article className="card" key={i}>
              <img src={e.imagen} alt={e.nombre} />

              <div>
                <span>🌿 Ecoturismo</span>
                <h3>{e.nombre}</h3>
                <p>📍 {e.lugar}</p>
                <p>{e.descripcion}</p>

                <footer>
                  <strong>{e.precio}</strong>
                  <button onClick={() => setDetalle(e)}>
                    Ver detalles
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </section>
      </main>

      <section id="sobre" className="sobre">
        <h2>🌱 Sobre Naturago</h2>
        <p>
          Naturago conecta viajeros con experiencias de ecoturismo
          sostenible en diferentes lugares de Colombia.
        </p>
      </section>

      {detalle && (
        <div className="modal" onClick={() => setDetalle(null)}>
          <div className="ventana" onClick={e => e.stopPropagation()}>
            <img src={detalle.imagen} alt={detalle.nombre} />
            <div>
              <h2>{detalle.nombre}</h2>
              <p>📍 {detalle.lugar}</p>
              <p>{detalle.descripcion}</p>
              <h3>{detalle.precio}</h3>
              <button onClick={() => setDetalle(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;