import { useState } from "react";

function ExperienciaCard({
  imagen,
  categoria,
  nombre,
  ubicacion,
  calificacion,
  precio,
  descripcion,
  dificultad,
  duracion
}) {

  // Estado para controlar si la experiencia es favorita
  const [favorito, setFavorito] = useState(false);

  // Cambia el estado del botón de favoritos
  const cambiarFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <article className="experiencia-card">

      {/* Imagen de la experiencia */}
      <div className="imagen-container">

        <img
          src={imagen}
          alt={nombre}
        />

        {/* Categoría */}
        <span className="categoria">
          {categoria}
        </span>

        {/* Botón de favoritos */}
        <button
          className="favorito"
          onClick={cambiarFavorito}
        >
          {favorito ? "♥" : "♡"}
        </button>

      </div>

      {/* Información */}
      <div className="contenido-card">

        <h2>{nombre}</h2>

        <p className="ubicacion">
          📍 {ubicacion}
        </p>

        <p className="calificacion">
          ⭐ {calificacion}
        </p>

        <p className="descripcion">
          {descripcion}
        </p>

        {/* Información de la actividad */}
        <div className="informacion">

          <span>
            📊 {dificultad}
          </span>

          <span>
            🕐 {duracion}
          </span>

        </div>

        {/* Precio y botón */}
        <div className="parte-inferior">

          <div>
            <small>Desde</small>

            <strong>
              ${precio} COP
            </strong>
          </div>

          <button className="boton-detalles">
            Ver detalles
          </button>

        </div>

      </div>

    </article>
  );
}

export default ExperienciaCard;