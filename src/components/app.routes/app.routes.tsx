import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LoginPage = lazy(() => import('../../pages/login.page/login.page'));

const RegisterPage = lazy(
  () => import('../../pages/register.page/register.page')
);
const MenuPage = lazy(() => import('../../pages/menu.page/menu.page'));
const ErrorPage = lazy(() => import('../../pages/error.page/error.page'));
const AddProductPage = lazy(
  () => import('../../pages/add.product.page/add.product.page')
);
const EditProductPage = lazy(
  () => import('../../pages/edit.product.page/edit.product.page')
);
const AdminPannelMenu = lazy(
  () => import('../../pages/admin.pannel.menu.page/admin.pannel.menu.page')
);
const DetailsPage = lazy(() => import('../../pages/details.page/details.page'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        {' '}
        <Routes>
          <Route path="/" element={<MenuPage></MenuPage>}></Route>
          <Route path="/admin/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/admin/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route
            path="/admin"
            element={<AdminPannelMenu></AdminPannelMenu>}
          ></Route>
          <Route
            path="/new-product"
            element={<AddProductPage></AddProductPage>}
          ></Route>
          <Route
            path="admin/edit-product/:id"
            element={<EditProductPage></EditProductPage>}
          ></Route>
          <Route path="/menu" element={<MenuPage></MenuPage>}></Route>
          <Route
            path="/menu/details/:id"
            element={<DetailsPage></DetailsPage>}
          ></Route>
          <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
