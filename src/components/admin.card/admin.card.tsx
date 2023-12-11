import { Product } from '../../entities/product';
import { useProducts } from '../../hooks/use.products';

type Params = {
  product: Product;
};
export function AdminCard({ product }: Params) {
  const { deleteProduct } = useProducts();

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
  };

  return (
    <div>
      <div>
        <h3>{product.name.toUpperCase()}</h3>
        <img src={product.modelImg.url} alt="" />
      </div>
      <div>
        <p>Editar</p>
        <p onClick={() => handleDeleteProduct(product.id)}>Eliminar</p>
      </div>
    </div>
  );
}
