import { Register } from '../../components/register/register';
import './register.page.style.scss';

export default function RegisterPage() {
  return (
    <div className="register-page-container">
      <div className="admin-pannel-logo-container">
        <img
          className="logo-isotipe"
          src="/alien-bar-isotipe-black.png"
          alt=""
        />
        <p>Admin Pannel</p>
      </div>
      <Register></Register>
    </div>
  );
}
