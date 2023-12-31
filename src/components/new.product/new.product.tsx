import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../entities/product';
import './new.product.style.scss';

type Props = {
  title?: string;
  handleSubmit: (event: SyntheticEvent) => void;
  productToEdit?: Product;
};
export function ProductForm({
  title = 'Untitled',
  handleSubmit,
  productToEdit,
}: Props) {
  const [formData, setformData] = useState<Product | undefined>(productToEdit);

  useEffect(() => {
    if (productToEdit) {
      setformData(productToEdit);
    }
  }, [productToEdit]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setformData((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  if (!productToEdit) {
    return (
      <form aria-label="form" onSubmit={handleSubmit}>
        <h2 className="new-product-title">{title}</h2>

        <div className="new-product-form-container">
          <div className="new-product-name-input input-style">
            <p>Nombre del producto</p>
            <input type="text" name="name" />
          </div>
          <div className="new-product-flex-container">
            <div className="new-product-category-input input-style">
              <p>Categoría</p>
              <select name="category">
                <option value={'Litros 1.0'}>Litros 1.0</option>
                <option value={'Litros 2.0'}>Litros 2.0</option>
                <option value={'Sueritos'}>Sueritos</option>
                <option value={'Cervezas'}>Cervezas</option>
                <option value={'Tequila'}>Tequila</option>
                <option value={'Brandy'}>Brandy</option>
                <option value={'Ginebra'}>Ginebra</option>
              </select>
            </div>
            <div className="new-product-price input-style">
              <p>Precio (MXN)</p>
              <input type="number" name="price" />
            </div>
          </div>
          <div className="new-product-description input-style">
            <p>Descripcción</p>
            <input className="large-input" type="text" name="description" />
          </div>
          <input
            className="new-product-image-upload"
            placeholder="Añadir modelo"
            type="file"
            name="modelImg"
          />
          <div className="new-product-checkbox-list-container">
            <div className="new-product-input-container">
              <input
                className="checkbox-style"
                type="checkbox"
                name="new"
                id="Nuevo"
              />
              <label htmlFor="Nuevo">Nuevo</label>
            </div>

            <div className="new-product-input-container">
              <input type="checkbox" name="noStock" id="Agotado" />
              <label htmlFor="Agotado">Agotado</label>
            </div>

            <div className="new-product-input-container">
              <input type="checkbox" name="topOrder" id="Top pedidos" />
              <label htmlFor="Top pedidos">Top pedidos</label>
            </div>
          </div>
          <div className="new-product-button-container">
            <button type="submit">Agregar</button>
            <button>
              <Link to={'/admin'}>Cancelar</Link>
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <form aria-label="form" onSubmit={handleSubmit}>
        <h2 className="new-product-title">{title}</h2>

        <div className="new-product-form-container">
          <div className="new-product-name-input input-style">
            <p>Nombre del producto</p>
            <input
              type="text"
              name="name"
              value={formData!.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-product-flex-container">
            <div className="new-product-category-input input-style">
              <p>Categoría</p>
              <select name="category">
                <option>{productToEdit.category}</option>
              </select>
            </div>
            <div className="new-product-price input-style">
              <p>Precio</p>
              <input
                type="number"
                name="price"
                value={formData!.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="new-product-description input-style">
            <p>Descripcción</p>
            <input
              type="text"
              name="description"
              value={formData!.description}
              onChange={handleInputChange}
            />
          </div>
          <input
            className="new-product-image-upload"
            type="file"
            name="modelImg"
          />
          <div className="new-product-checkbox-list-container">
            <div className="new-product-input-container">
              <input type="checkbox" name="new" id="Nuevo" />
              <label htmlFor="Nuevo">Nuevo</label>
            </div>

            <div className="new-product-input-container">
              <input type="checkbox" name="noStock" id="Agotado" />
              <label htmlFor="Agotado">Agotado</label>
            </div>

            <div className="new-product-input-container">
              <input type="checkbox" name="topOrder" id="Top pedidos" />
              <label htmlFor="Top pedidos">Top pedidos</label>
            </div>
          </div>
          <div className="new-product-button-container">
            <button type="submit">Agregar</button>
            <button>
              <Link to={'/admin'}>Cancelar</Link>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
