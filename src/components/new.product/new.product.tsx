import { SyntheticEvent } from 'react';
import { useProducts } from '../../hooks/use.products';

type Params = {
  title?: string;
};
export function ProductForm({ title = 'Untitled' }: Params) {
  const { addNewProduct } = useProducts();
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const newCheckbox = formData.get('new');
    const noStockCheckbox = formData.get('noStock');
    const topOrderCheckbox = formData.get('topOrder');

    if (newCheckbox === 'on') {
      formData.set('new', 'true');
    } else {
      formData.set('new', 'false');
    }

    if (noStockCheckbox === 'on') {
      formData.set('noStock', 'true');
    } else {
      formData.set('noStock', 'false');
    }

    if (topOrderCheckbox === 'on') {
      formData.set('topOrder', 'true');
    } else {
      formData.set('topOrder', 'false');
    }

    addNewProduct(formData);
  };

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
          <button>Cancelar</button>
        </div>
      </div>
    </form>
  );
}
