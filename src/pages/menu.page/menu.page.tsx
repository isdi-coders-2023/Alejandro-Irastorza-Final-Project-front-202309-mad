import { Header } from '../../components/header/header';
import { MenuSection } from '../../components/menu.section/menu.section';

export function MenuPage() {
  return (
    <>
      <Header title="Menú"></Header>
      <MenuSection
        category="Litros 1.0"
        headingDescription="Pídelo con o sin alcohol"
      ></MenuSection>
      <MenuSection
        category="Litros 2.0"
        headingDescription="Nueva gama 2.0 con doble alcohol y fórmulas exclusivas"
      ></MenuSection>
      <MenuSection
        category="Sueritos"
        headingDescription="Es como un litro, pero pega más...👀"
      ></MenuSection>
    </>
  );
}
