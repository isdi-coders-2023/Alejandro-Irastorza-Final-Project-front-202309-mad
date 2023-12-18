import { MenuCard } from '../menu.card/menu.card';
import { Product } from '../../entities/product';
import './menu.section.style.scss';

type Props = {
  category: string;
  headingDescription?: string;
  products: Product[] | null;
};
export function MenuSection({
  category,
  headingDescription = 'No description added.',
  products,
}: Props) {
  let productsByCategory;
  if (products) {
    productsByCategory = products.filter(
      (product) => product.category === category && !product.noStock
    );
  }

  return (
    <div className="menu-section-container">
      <div className="menu-section-info">
        <h2 className="menu-section-category">{category}</h2>
        <h3 className="menu-section-description">{headingDescription}</h3>
      </div>
      <ul className="menu-section-card-container">
        {productsByCategory ? (
          productsByCategory.map((product) => (
            <MenuCard key={product.id} product={product}></MenuCard>
          ))
        ) : (
          <li>No products</li>
        )}
      </ul>
    </div>
  );
}
