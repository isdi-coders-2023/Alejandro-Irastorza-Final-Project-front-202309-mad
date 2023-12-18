import { ProductForm } from '../../components/new.product/new.product';
import { SyntheticEvent } from 'react';
import { useProducts } from '../../hooks/use.products';
import './add.product.page.style.scss';
import { User } from '../../entities/user';
import { HeaderAdmin } from '../../components/header.admin/header.admin';
import { useNavigate } from 'react-router-dom';
export function AddProductPage() {
  const { addNewProduct } = useProducts();

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

    const temporalUserId = '112233445566778899009988' as User['id'];

    addNewProduct(formData, temporalUserId);
    navigate('/admin');
  };

  return (
    <div className="add-product-page-container-master">
      <HeaderAdmin
        user={{ name: 'Alejandro', profilePic: { url: 'Google.com' } } as User}
      ></HeaderAdmin>
      <div className="add-product-page-container">
        <ProductForm
          title="Nuevo producto"
          handleSubmit={handleSubmit}
        ></ProductForm>
      </div>
    </div>
  );
}
