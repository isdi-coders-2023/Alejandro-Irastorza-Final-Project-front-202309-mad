import { Link } from 'react-router-dom';
import { Product } from '../../entities/product';
import { useProducts } from '../../hooks/use.products';
import './admin.card.style.scss';

import Swal from 'sweetalert2';
type Props = {
  readonly product: Product;
};
export function AdminCard({ product }: Props) {
  const { deleteProduct } = useProducts();

  const handleDeleteProduct = () => {
    Swal.fire({
      title: `¿Quieres eliminar ${product.name}?`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((userClick) => {
      if (userClick.isConfirmed === true) {
        deleteProduct(product.id);
        Swal.fire('Ha sido eliminado correctamente');
      }
    });
  };

  return (
    <li className="admin-card-container">
      <div className="admin-card-inner-container">
        {product.noStock && <p className="hide-tag">Oculto</p>}

        <h3>{product.name.toUpperCase()}</h3>
        <img
          className="img-hover-zoom--colorize "
          src={product.modelImg.url}
          alt=""
        />
        <p>Creado por: {product.creator.name}</p>
      </div>

      <div className="admin-card-footer-container">
        <p className="admin-card-edit-item">
          <Link to={'/admin/edit-product/' + product.id}>Editar</Link>
        </p>
        <p
          className="admin-card-delete-item"
          onClick={handleDeleteProduct}
          role="button"
        >
          Eliminar
        </p>
      </div>
    </li>
  );
}
