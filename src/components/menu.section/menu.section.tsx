import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { MenuCard } from '../menu.card/menu.card';
import { useProducts } from '../../hooks/use.products';

type Props = {
  category: string;
  headingDescription: string;
};
export function MenuSection({
  category = 'Untitled',
  headingDescription = 'No description added.',
}: Props) {
  const { products } = useSelector((state: RootState) => state.products);
  const { loadAllProducts } = useProducts();

  useEffect(() => {
    loadAllProducts();
  }, []);

  const productsByCategory = products.filter(
    (product) => product.category === category
  );

  console.log('productsByCategory ', productsByCategory);

  return (
    <div>
      <h2>{category}</h2>
      <h3>{headingDescription}</h3>
      {productsByCategory.map((product) => (
        <MenuCard key={product.id} product={product}></MenuCard>
      ))}
    </div>
  );
}
