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
    productsByCategory = products
      .filter((product) => product.category === category && !product.noStock)
      .sort((a, b) => {
        if ((a.topOrder && !b.topOrder) || (a.new && !b.new)) {
          return -1;
        } else if ((!a.topOrder && b.topOrder) || (!a.new && b.new)) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  return (
    <div className="menu-section-container">
      <div className="menu-section-info">
        <h2 className="menu-section-category">{category}</h2>
        <h3 className="menu-section-description">{headingDescription}</h3>
      </div>
      <div className="menu-section-container">
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
    </div>
  );
}
