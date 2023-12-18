import { useSelector } from 'react-redux';
import { Login } from '../../components/login/login';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import './login.page.style.scss';

export function LoginPage() {
  const navigate = useNavigate();
  const { loginState } = useSelector((state: RootState) => state.users);

  if (loginState === 'logged') {
    navigate('/admin');
  }

  return (
    <div className="login-page-container">
      <div>
        <img src="" alt="" />
        <p>Admin Pannel</p>
      </div>
      <Login></Login>
      <p>
        Si olvidaste tu constraseña, contacta al adminisrador en
        admin@alienbar.mx
      </p>
    </div>
  );
}
