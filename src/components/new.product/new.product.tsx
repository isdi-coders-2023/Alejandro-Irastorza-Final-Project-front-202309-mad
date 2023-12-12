import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

type Params = {
  title?: string;
  handleSubmit: (event: SyntheticEvent) => void;
};
export function ProductForm({ title = 'Untitled', handleSubmit }: Params) {
  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <div>
        <div>
          <p>Nombre del producto</p>
          <input type="text" name="name" />
        </div>
        <div>
          <div>
            <p>Categoría</p>
            <select name="category">
              <option value={'Litros 1.0'}>Litros 1.0</option>
              <option value={'Litros 2.0'}>Litros 2.0</option>
              <option value={'Sueritos'}>Sueritos</option>
            </select>
          </div>
          <div>
            <p>Precio</p>
            <input type="number" name="price" />
          </div>
        </div>
        <div>
          <p>Descripcción</p>
          <input type="text" name="description" />
        </div>
        <input type="file" name="modelImg" />
        <div>
          <input type="checkbox" name="new" id="Nuevo" />
          <label htmlFor="Nuevo">Nuevo</label>

          <input type="checkbox" name="noStock" id="Agotado" />
          <label htmlFor="Agotado">Agotado</label>

          <input type="checkbox" name="topOrder" id="Top pedidos" />
          <label htmlFor="Top pedidos">Top pedidos</label>
        </div>
        <div>
          <button type="submit">Agregar</button>
          <button>
            <Link to={'/admin'}>Cancelar</Link>
          </button>
        </div>
      </div>
    </form>
  );
}
