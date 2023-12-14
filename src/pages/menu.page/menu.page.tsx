import { Header } from '../../components/header/header';
import { MenuSection } from '../../components/menu.section/menu.section';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useProducts } from '../../hooks/use.products';
import './menu.page.style.scss';
import { Heading } from '../../components/heading/heading';
export function MenuPage() {
  const { products, productState } = useSelector(
    (state: RootState) => state.products
  );

  const { loadAllProducts } = useProducts();
  useEffect(() => {
    loadAllProducts();
  }, [productState]);

  return (
    <div className="menu-page-container">
      <Header title="Menú"></Header>
      <div className="body-container">
        <Heading
          imagePath="https://static.wixstatic.com/media/1c872a_7d560af2df0148749feeff4df090f10d~mv2.jpg/v1/fill/w_1880,h_576,usm_1.20_1.00_0.01/file.jpg"
          imgDescription="Sueritos de Azulito"
        ></Heading>
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
      </div>
    </div>
  );
}
