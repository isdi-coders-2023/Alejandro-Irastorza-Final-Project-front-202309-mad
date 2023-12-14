import { AdminMenu } from '../../components/admin.menu.list/admin.menu.list';
import './admin.pannel.menu.style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useProducts } from '../../hooks/use.products';
import { useEffect } from 'react';

export function AdminPannelMenu() {
  const { products, productFilter, productState } = useSelector(
    (state: RootState) => state.products
  );
  const { loadAllProducts } = useProducts();
  useEffect(() => {
    loadAllProducts();
  }, [productState]);
  return (
    <div className="admin-menu-page-container">
      <AdminMenu products={products} filter={productFilter}></AdminMenu>
    </div>
  );
}
