import { Product } from '../../entities/product';
import { AdminCard } from '../admin.card/admin.card';
import { Link } from 'react-router-dom';

type Props = {
  products: Product[] | null;
  filter: string;
};
export function AdminMenu({ products, filter }: Props) {
  return (
    <>
      <div>
        <h2>{filter}</h2>
        <button>
          <Link to={'/new-product'}>Agregar producto</Link>
        </button>
      </div>
      <ul>
        {products ? (
          products.map((product) => (
            <AdminCard key={product.id} product={product}></AdminCard>
          ))
        ) : (
          <p>No products</p>
        )}
      </ul>
    </>
  );
}
