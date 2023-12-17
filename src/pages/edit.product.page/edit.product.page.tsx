import { SyntheticEvent, useEffect } from 'react';
import { ProductForm } from '../../components/new.product/new.product';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { Product } from '../../entities/product';
import { HeaderAdmin } from '../../components/header.admin/header.admin';
import './edit.product.page.style.scss';
import { User } from '../../entities/user';

export function EditProductPage() {
  const { currentProduct } = useSelector((state: RootState) => state.products);

  const { id } = useParams();

  const { loadOneProduct, updateCurrentProduct } = useProducts();

  useEffect(() => {
    loadOneProduct(id!);
  }, []);

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
    console.log(id);
  };

  console.log('hola', currentProduct);

  return (
    <div className="edit-product-page-master-container">
      <HeaderAdmin
        user={{ profilePic: { url: 'Google.com' } } as User}
      ></HeaderAdmin>
      <ProductForm
        title="Editar"
        handleSubmit={handleSubmit}
        productToEdit={currentProduct || ({} as Product)}
      ></ProductForm>
    </div>
  );
}
