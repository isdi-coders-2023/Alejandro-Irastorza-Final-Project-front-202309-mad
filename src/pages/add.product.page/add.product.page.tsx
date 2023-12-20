import { ProductForm } from '../../components/new.product/new.product';
import { SyntheticEvent } from 'react';
import { useProducts } from '../../hooks/use.products';
import './add.product.page.style.scss';
import { HeaderAdmin } from '../../components/header.admin/header.admin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export default function AddProductPage() {
  const { addNewProduct } = useProducts();
  const { loggedUser } = useSelector((state: RootState) => state.users);

  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const newCheckbox = formData.get('new');
    const noStockCheckbox = formData.get('noStock');
    const topOrderCheckbox = formData.get('topOrder');

    if (newCheckbox === 'on') {
      formData.set('new', 'true');
    } else {
      formData.set('new', 'false');
    }

    if (noStockCheckbox === 'on') {
      formData.set('noStock', 'true');
    } else {
      formData.set('noStock', 'false');
    }

    if (topOrderCheckbox === 'on') {
      formData.set('topOrder', 'true');
    } else {
      formData.set('topOrder', 'false');
    }

    addNewProduct(formData, loggedUser!.id);
    Swal.fire({
      title: 'Producto agregado correctamente',
    }).then(() => navigate('/admin'));
  };

  return (
    <div className="add-product-page-container-master">
      <HeaderAdmin user={loggedUser!}></HeaderAdmin>
      <div className="add-product-page-container">
        <ProductForm
          title="Nuevo producto"
          handleSubmit={handleSubmit}
        ></ProductForm>
      </div>
    </div>
  );
}
