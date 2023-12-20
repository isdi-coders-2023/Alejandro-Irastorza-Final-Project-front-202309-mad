import { Link } from 'react-router-dom';
import { Product } from '../../entities/product';
import './menu.card.scss';
type Params = {
  product?: Product;
};
export function MenuCard({ product }: Params) {
  let currentUrl;
  let secureUrl;
  let webpUrl;

  if (product) {
    currentUrl = product.modelImg.url.slice(4);
    secureUrl = 'https' + currentUrl;
    const imgExtentionIndex = secureUrl.lastIndexOf('.');
    webpUrl = secureUrl.slice(0, imgExtentionIndex) + '.webp';
  }
  if (!product) return <>Error loading your product.</>;

  return (
    <li className="card-container">
      <Link
        to={'/menu/details/' + product.id}
        style={{ textDecoration: 'none', color: 'inherit' }}
        rel="preload"
      >
        <div className="card-tags-container">
          {product.new && <p className="card-new-tag">NUEVO</p>}
          {product.topOrder && (
            <p className="card-top-order-tag">TOP PEDIDOS</p>
          )}
        </div>
        <div className="card-info-container">
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
        </div>

        <img
          alt={'Bebida llamada: ' + product.name}
          className="card-image img-hover-zoom--colorize"
          src={webpUrl}
          loading="lazy"
        />
      </Link>
    </li>
  );
}
