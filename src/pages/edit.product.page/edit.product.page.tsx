import { SyntheticEvent, useEffect } from 'react';
import { ProductForm } from '../../components/new.product/new.product';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { Product } from '../../entities/product';

export function EditProductPage() {
  const { currentProduct } = useSelector((state: RootState) => state.products);

  const { id } = useParams();

  const { loadOneProduct, updateCurrentProduct } = useProducts();

  useEffect(() => {
    loadOneProduct(id!);
  }, []);

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

    updateCurrentProduct(id!, formData);
    console.log(id);
  };

  console.log('hola', currentProduct);

  return (
    <ProductForm
      title="Editar"
      handleSubmit={handleSubmit}
      productToEdit={currentProduct || ({} as Product)}
    ></ProductForm>
  );
}
