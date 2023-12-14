import { Link } from 'react-router-dom';
import { Product } from '../../entities/product';
import { useProducts } from '../../hooks/use.products';
import './admin.card.style.scss';

type Params = {
  product: Product;
};
export function AdminCard({ product }: Params) {
  const { deleteProduct } = useProducts();

  const handleDeleteProduct = () => {
    deleteProduct(product.id);
  };

  return (
    <li className="admin-card-container">
      <div className="admin-card-inner-container">
        <h3>{product.name.toUpperCase()}</h3>
        <img src={product.modelImg.url} alt="" />
      </div>

      <div className="admin-card-footer-container">
        <p className="admin-card-edit-item">
          <Link to={'/admin/edit-product/' + product.id}>Editar</Link>
        </p>
        <p className="admin-card-delete-item" onClick={handleDeleteProduct}>
          Eliminar
        </p>
      </div>
    </li>
  );
}
