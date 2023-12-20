import { useParams } from 'react-router-dom';
import { Details } from '../../components/details/details';
import { Header } from '../../components/header/header';
import './details.page.style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function DetailsPage() {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.products);
  return (
    <div className="details-page-container">
      <Header></Header>
      <Details products={products} id={id!}></Details>
    </div>
  );
}
