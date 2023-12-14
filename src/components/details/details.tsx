import { Link } from 'react-router-dom';
// import { RootState } from '../../store/store';
// import { useSelector } from 'react-redux';
import './details.style.scss';
import { Product } from '../../entities/product';

type Params = {
  products: Product[] | null;
  id: string;
};
export function Details({ products, id }: Params) {
  // const { id } = useParams();

  // const { products } = useSelector((state: RootState) => state.products);

  if (!products) {
    return <div>There was an error loading the product.</div>;
  }

  const product = products!.find((item) => item.id === id);

  console.log('From Params: ', id);

  return (
    <div className="details-container">
      <div className="details-tags-container">
        {product!.new && <p className="details-new-tag">NUEVO</p>}
        {product!.noStock && <p className="details-noStock-tag">AGOTADO</p>}
        {product!.topOrder && (
          <p className="details-top-order-tag">TOP PEDIDOS</p>
        )}
      </div>
      <div className="details-headers-container">
        <h2>{product!.name}</h2>
        <h3>${product!.price}</h3>
      </div>
      <div className="details-image-container">
        <img src={product!.modelImg.url} />
      </div>
      <div className="details-description-container">
        <p>{product!.description}</p>
      </div>

      <button>
        <Link to={'/menu'} style={{ textDecoration: 'none', color: 'inherit' }}>
          Regresar
        </Link>
      </button>
    </div>
  );
}
