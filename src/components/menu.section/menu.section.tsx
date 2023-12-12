import { MenuCard } from '../menu.card/menu.card';
import { Product } from '../../entities/product';

type Props = {
  category: string;
  headingDescription: string;
  products: Product[] | null;
};
export function MenuSection({
  category = 'Untitled',
  headingDescription = 'No description added.',
  products,
}: Props) {
  let productsByCategory;
  if (products) {
    productsByCategory = products.filter(
      (product) => product.category === category
    );
  }

  console.log('productsByCategory ', productsByCategory);

  return (
    <div>
      <h2>{category}</h2>
      <h3>{headingDescription}</h3>
      {productsByCategory ? (
        productsByCategory.map((product) => (
          <MenuCard key={product.id} product={product}></MenuCard>
        ))
      ) : (
        <p>No products</p>
      )}
    </div>
  );
}
