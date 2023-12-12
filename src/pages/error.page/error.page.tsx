import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <>
      <div>
        <img src="/alien-bar-isotipe.svg" alt="" />
        <h2>404 Not Found</h2>
        <h3>¡Ups! Parece que la página que buscas acceder, no existe.</h3>
        <button>
          <Link
            to={'/menu'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Regresar
          </Link>
        </button>
        <img
          src="/apolo.svg"
          alt="Imagen de Apolo el alien con una sudadera negra."
        />
      </div>
    </>
  );
}
