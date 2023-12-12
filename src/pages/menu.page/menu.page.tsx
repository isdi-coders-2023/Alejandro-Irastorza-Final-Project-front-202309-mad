import { Header } from '../../components/header/header';
import { MenuSection } from '../../components/menu.section/menu.section';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useProducts } from '../../hooks/use.products';

export function MenuPage() {
  const { products, productState } = useSelector(
    (state: RootState) => state.products
  );

  const { loadAllProducts } = useProducts();
  useEffect(() => {
    loadAllProducts();
  }, [productState]);

  return (
    <>
      <Header title="Menú"></Header>
      <MenuSection
        products={products}
        category="Litros 1.0"
        headingDescription="Pídelo con o sin alcohol"
      ></MenuSection>
      <MenuSection
        products={products}
        category="Litros 2.0"
        headingDescription="Nueva gama 2.0 con doble alcohol y fórmulas exclusivas"
      ></MenuSection>
      <MenuSection
        products={products}
        category="Sueritos"
        headingDescription="Es como un litro, pero pega más...👀"
      ></MenuSection>
    </>
  );
}
