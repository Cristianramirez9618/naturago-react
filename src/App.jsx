// Importamos useState desde React para manejar información que puede cambiar
import { useState } from "react";

// Importamos los estilos CSS de la aplicación
import "./App.css";

// Creamos el componente principal de la aplicación
function App() {
  // Creamos el estado detalle para almacenar la experiencia seleccionada
  const [detalle, setDetalle] = useState(null);

  // Creamos un arreglo con las experiencias de ecoturismo que mostrará Naturago
  const experiencias = [
    {
      // Nombre de la primera experiencia
      nombre: "Senderismo en la Sierra Nevada",

      // Ubicación de la experiencia
      lugar: "Santa Marta, Magdalena",

      // Precio de la experiencia
      precio: "$120.000 COP",

      // Imagen utilizada para representar la experiencia
      imagen:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",

      // Descripción de la experiencia
      descripcion:
        "Recorrido por senderos naturales rodeados de montañas, vegetación y biodiversidad.",
    },

    {
      // Nombre de la segunda experiencia
      nombre: "Avistamiento de aves",

      // Ubicación de la experiencia
      lugar: "Leticia, Amazonas",

      // Precio de la experiencia
      precio: "$150.000 COP",

      // Imagen utilizada para representar la experiencia
      imagen:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",

      // Descripción de la experiencia
      descripcion:
        "Conoce diferentes especies de aves mientras disfrutas de los paisajes del Amazonas.",
    },

    {
      // Nombre de la tercera experiencia
      nombre: "Ecocamping bajo las estrellas",

      // Ubicación de la experiencia
      lugar: "Guatapé, Antioquia",

      // Precio de la experiencia
      precio: "$180.000 COP",

      // Imagen utilizada para representar la experiencia
      imagen:
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=80",

      // Descripción de la experiencia
      descripcion:
        "Una experiencia de descanso y conexión con la naturaleza en un entorno sostenible.",
    },
  ];

  // Retornamos la estructura visual de la aplicación
  return (
    <>
      {/* Creamos el encabezado principal de Naturago */}
      <header>
        {/* Mostramos el nombre y logo de Naturago */}
        <h2>🌿 Naturago</h2>

        {/* Creamos el menú de navegación */}
        <nav>
          {/* Enlace que lleva a la sección de experiencias */}
          <a href="#experiencias">Experiencias</a>

          {/* Enlace que lleva a la sección sobre nosotros */}
          <a href="#sobre">Sobre nosotros</a>
        </nav>
      </header>

      {/* Creamos la sección principal o hero de la página */}
      <section className="hero">
        {/* Contenedor del contenido principal */}
        <div>
          {/* Texto pequeño que identifica el enfoque del proyecto */}
          <small>ECOTURISMO SOSTENIBLE</small>

          {/* Título principal de la página */}
          <h1>Descubre Colombia de una forma diferente</h1>

          {/* Descripción general del servicio */}
          <p>
            Encuentra experiencias únicas para disfrutar de la naturaleza
            de manera responsable.
          </p>

          {/* Botón que dirige al usuario a las experiencias */}
          <a href="#experiencias" className="btn">
            Explorar
          </a>
        </div>
      </section>

      {/* Creamos la sección donde se muestran las experiencias */}
      <main id="experiencias">
        {/* Título de la sección */}
        <h2>Experiencias sostenibles</h2>

        {/* Texto descriptivo de la sección */}
        <p className="subtitulo">
          Conoce algunas experiencias que puedes encontrar en Naturago.
        </p>

        {/* Creamos el contenedor de las tarjetas */}
        <section className="cards">
          {/* Recorremos el arreglo de experiencias para crear una tarjeta por cada elemento */}
          {experiencias.map((e, i) => (
            <article className="card" key={i}>
              {/* Creamos una tarjeta individual para cada experiencia */}

              {/* Mostramos la imagen correspondiente a la experiencia */}
              <img src={e.imagen} alt={e.nombre} />

              {/* Contenedor de la información de la experiencia */}
              <div>
                {/* Indicamos que la experiencia pertenece al ecoturismo */}
                <span>🌿 Ecoturismo</span>

                {/* Mostramos el nombre de la experiencia */}
                <h3>{e.nombre}</h3>

                {/* Mostramos la ubicación */}
                <p>📍 {e.lugar}</p>

                {/* Mostramos la descripción */}
                <p>{e.descripcion}</p>

                {/* Pie de la tarjeta con precio y botón */}
                <footer>
                  {/* Mostramos el precio */}
                  <strong>{e.precio}</strong>

                  {/* Botón que guarda la experiencia seleccionada */}
                  <button onClick={() => setDetalle(e)}>
                    Ver detalles
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Creamos la sección informativa sobre Naturago */}
      <section id="sobre" className="sobre">
        {/* Título de la sección */}
        <h2>🌱 Sobre Naturago</h2>

        {/* Descripción del proyecto */}
        <p>
          Naturago conecta viajeros con experiencias de ecoturismo sostenible
          en diferentes lugares de Colombia.
        </p>
      </section>

      {/* Mostramos el modal solamente cuando existe una experiencia seleccionada */}
      {detalle && (
        <div className="modal" onClick={() => setDetalle(null)}>
          {/* Creamos la ventana modal para mostrar los detalles */}
          <div
            className="ventana"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mostramos la imagen de la experiencia seleccionada */}
            <img src={detalle.imagen} alt={detalle.nombre} />

            {/* Contenedor de los detalles */}
            <div>
              {/* Mostramos el nombre de la experiencia */}
              <h2>{detalle.nombre}</h2>

              {/* Mostramos la ubicación */}
              <p>📍 {detalle.lugar}</p>

              {/* Mostramos la descripción */}
              <p>{detalle.descripcion}</p>

              {/* Mostramos el precio */}
              <h3>{detalle.precio}</h3>

              {/* Botón para cerrar el modal */}
              <button onClick={() => setDetalle(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Exportamos el componente App para poder utilizarlo en main.jsx
export default App;