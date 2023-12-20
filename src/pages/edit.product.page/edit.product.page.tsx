import { SyntheticEvent } from 'react';
import { ProductForm } from '../../components/new.product/new.product';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { HeaderAdmin } from '../../components/header.admin/header.admin';
import './edit.product.page.style.scss';
import Swal from 'sweetalert2';

export default function EditProductPage() {
  const { products } = useSelector((state: RootState) => state.products);
  const { loggedUser } = useSelector((state: RootState) => state.users);

  const { id } = useParams();

  const { updateCurrentProduct } = useProducts();

  const currentProductMapped = products?.find((product) => product.id === id);

  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const htmlFormElement = event.target as HTMLFormElement;
    const formDataDeclaration = new FormData(htmlFormElement);
    const firstNewCheckbox = formDataDeclaration.get('new');
    const secondNoStockCheckbox = formDataDeclaration.get('noStock');
    const thirdTopOrderCheckbox = formDataDeclaration.get('topOrder');

    if (firstNewCheckbox === 'on') {
      formDataDeclaration.set('new', 'true');
    } else {
      formDataDeclaration.set('new', 'false');
    }

    if (secondNoStockCheckbox === 'on') {
      formDataDeclaration.set('noStock', 'true');
    } else {
      formDataDeclaration.set('noStock', 'false');
    }

    if (thirdTopOrderCheckbox === 'on') {
      formDataDeclaration.set('topOrder', 'true');
    } else {
      formDataDeclaration.set('topOrder', 'false');
    }

    updateCurrentProduct(id!, formDataDeclaration);
    Swal.fire('Producto editado correctamente').then(() => navigate('/admin'));
  };

  return (
    <div className="edit-product-page-master-container">
      <HeaderAdmin user={loggedUser!}></HeaderAdmin>
      <ProductForm
        title="Editar"
        handleSubmit={handleSubmit}
        productToEdit={currentProductMapped}
      ></ProductForm>
    </div>
  );
}
