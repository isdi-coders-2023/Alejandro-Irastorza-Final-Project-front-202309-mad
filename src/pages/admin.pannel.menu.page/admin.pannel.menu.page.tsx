import { AdminMenu } from '../../components/admin.menu.list/admin.menu.list';
import './admin.pannel.menu.style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { useEffect } from 'react';
import { HeaderAdmin } from '../../components/header.admin/header.admin';

export function AdminPannelMenu() {
  const { products, productFilter, productState } = useSelector(
    (state: RootState) => state.products
  );

  const { getByCategory, loadAllProducts } = useProducts();
  useEffect(() => {
    loadAllProducts();
  }, [productState]);

  const { loggedUser } = useSelector((state: RootState) => state.users);

  const handleSelect = () => {
    const selectedItem = document.getElementById('filter') as HTMLSelectElement;

    if (selectedItem!.value === 'Todos') {
      loadAllProducts();
    } else {
      getByCategory(selectedItem!.value);
    }
  };

  return (
    <>
      <HeaderAdmin
        handleSelectFn={handleSelect}
        user={loggedUser!}
        title="Menú"
      ></HeaderAdmin>
      <div className="admin-menu-page-container">
        <AdminMenu products={products} filter={productFilter}></AdminMenu>
      </div>
    </>
  );
}
