import { ProductForm } from '../../components/new.product/new.product';
import { SyntheticEvent } from 'react';
import { useProducts } from '../../hooks/use.products';
export function AddProductPage() {
  const { addNewProduct } = useProducts();
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

    addNewProduct(formData);
  };

  return (
    <>
      <ProductForm
        title="Nuevo producto"
        handleSubmit={handleSubmit}
      ></ProductForm>
    </>
  );
}
