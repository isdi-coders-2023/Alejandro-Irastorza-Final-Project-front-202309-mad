import { Link } from 'react-router-dom';
import { Product } from '../../entities/product';

type Params = {
  product?: Product;
};
export function MenuCard({ product }: Params) {
  if (!product) return <>Error loading your product.</>;
  return (
    <Link
      to={'/menu/details/' + product.id}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div>
        <div>
          {product.new && <p>Nuevo</p>}
          {product.noStock && <p>Agotado</p>}
          {product.topOrder && <p>Top pedidos</p>}
        </div>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>

        <img src={product.modelImg.url} />
      </div>
    </Link>
  );
}
