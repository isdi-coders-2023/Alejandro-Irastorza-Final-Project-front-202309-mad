import { AdminMenu } from '../../components/admin.menu.list/admin.menu.list';
import './admin.pannel.menu.style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { useEffect } from 'react';
import { HeaderAdmin } from '../../components/header.admin/header.admin';
import { useNavigate } from 'react-router-dom';

export function AdminPannelMenu() {
  const { loggedUser, loginState } = useSelector(
    (state: RootState) => state.users
  );

  const navigate = useNavigate();

  const { products, productFilter, productState } = useSelector(
    (state: RootState) => state.products
  );

  if (loginState !== 'logged') {
    navigate('/admin/login');
    return;
  }

  const { getByCategory, loadAllProducts } = useProducts();
  useEffect(() => {
    loadAllProducts();
  }, [productState]);

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
