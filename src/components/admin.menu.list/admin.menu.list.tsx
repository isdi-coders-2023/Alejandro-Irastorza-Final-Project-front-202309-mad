import { Product } from '../../entities/product';
import { AdminCard } from '../admin.card/admin.card';
import { Link } from 'react-router-dom';
import './admin.menu.list.style.scss';

type Props = {
  products: Product[] | null;
  filter: string;
};
export function AdminMenu({ products, filter }: Props) {
  return (
    <>
      <div className="admin-menu-container">
        <div className="admin-menu-headding-container">
          <h2>{filter}</h2>
          <button>
            <Link to={'/new-product'}>Agregar producto</Link>
          </button>
        </div>
      </div>
      <ul className="admin-menu-list-cards-container">
        {products ? (
          products.map((product) => (
            <AdminCard key={product.id} product={product}></AdminCard>
          ))
        ) : (
          <li>No products</li>
        )}
      </ul>
    </>
  );
}
