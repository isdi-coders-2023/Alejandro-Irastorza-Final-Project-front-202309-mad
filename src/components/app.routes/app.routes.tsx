import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/login.page/login.page';
import { RegisterPage } from '../../pages/register.page/register.page';
import { Header } from '../header/header';
import { MenuPage } from '../../pages/menu.page/menu.page';
import { ErrorPage } from '../../pages/error.page/error.page';
import { AddProductPage } from '../../pages/add.product.page/add.product.page';
import { EditProductPage } from '../../pages/edit.product.page/edit.product.page';
import { AdminPannelMenu } from '../../pages/admin.pannel.menu.page/admin.pannel.menu.page';
import { DetailsPage } from '../../pages/details.page/details.page';
export function AppRoutes() {
  return (
    <main>
      <Routes>
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
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </main>
  );
}
