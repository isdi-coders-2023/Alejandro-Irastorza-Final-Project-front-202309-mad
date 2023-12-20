import { Header } from '../../components/header/header';
import { MenuSection } from '../../components/menu.section/menu.section';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useProducts } from '../../hooks/use.products';
import './menu.page.style.scss';
import { Heading } from '../../components/heading/heading';
import { PopUp } from '../../components/pop.up/pop.up';
import { Link } from 'react-router-dom';
export default function MenuPage() {
  const { products, productState, popUpState } = useSelector(
    (state: RootState) => state.products
  );

  const { loadAllProducts, closeProductPopUp } = useProducts();

  useEffect(() => {
    loadAllProducts();
  }, [productState]);

  const handlePopUp = () => {
    closeProductPopUp();
  };

  return (
    <div className="menu-page-container">
      {popUpState && (
        <PopUp imgUrl="/popup.jpg" handleDisplay={handlePopUp}></PopUp>
      )}
      <Header title="Menú"></Header>
      <Heading
        imagePath="https://res.cloudinary.com/drg2lkgg6/image/upload/v1703001381/sueritos_ajkufy.webp"
        imgDescription="Sueritos de Azulito"
      ></Heading>
      <div className="body-container">
        <MenuSection
          products={products}
          category="Sueritos"
          headingDescription="Es como un litro, pero pega más...👀"
        ></MenuSection>
        {/* <MenuSection
          products={products}
          category="Litros 1.0"
          headingDescription="Pídelo con o sin alcohol"
        ></MenuSection> */}
        <MenuSection
          products={products}
          category="Litros 2.0"
          headingDescription="Nueva gama 2.0 con doble alcohol y fórmulas exclusivas"
        ></MenuSection>
        <MenuSection
          products={products}
          category="Cervezas"
          headingDescription="¿Unas chelas heladas o qué?"
        ></MenuSection>
        <MenuSection
          products={products}
          category="Tequila"
          headingDescription="Un tequilazo para avivar el alma."
        ></MenuSection>
        <MenuSection
          products={products}
          category="Brandy"
          headingDescription="Deja que el brandy te cuente sus historias."
        ></MenuSection>
        <MenuSection
          products={products}
          category="Ginebra"
          headingDescription="¿Listo para una dosis de ginebra-lidad?"
        ></MenuSection>

        <p className="admin-button">
          <Link to={'/admin'}>Admin Pannel</Link>
        </p>
      </div>
    </div>
  );
}
