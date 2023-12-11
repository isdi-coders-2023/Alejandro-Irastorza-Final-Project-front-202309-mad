import { Product } from '../../entities/product';
import { useProducts } from '../../hooks/use.products';

type Params = {
  product: Product;
};
export function AdminCard({ product }: Params) {
  const { deleteProduct } = useProducts();

  return (
    <div>
      <div>
        <h3>{product.name.toUpperCase()}</h3>
        <img src="" alt="" />
      </div>
      <div>
        <p>Editar</p>
        <p onClick={() => deleteProduct(product.id)}>Eliminar</p>
      </div>
    </div>
  );
}
