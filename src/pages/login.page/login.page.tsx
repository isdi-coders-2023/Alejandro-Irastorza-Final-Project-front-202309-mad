import { useSelector } from 'react-redux';
import { Login } from '../../components/login/login';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import './login.page.style.scss';

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginState } = useSelector((state: RootState) => state.users);

  if (loginState === 'logged') {
    navigate('/admin');
  }

  return (
    <div className="login-page-container">
      <div className="admin-pannel-logo-container">
        <img
          className="logo-isotipe"
          src="/alien-bar-isotipe-black.png"
          alt=""
        />
        <p>Admin Pannel</p>
      </div>
      <Login></Login>
      <p className="login-page-password-message">
        Si olvidaste tu constraseña, contacta al adminisrador en
        admin@alienbar.mx
      </p>
    </div>
  );
}
