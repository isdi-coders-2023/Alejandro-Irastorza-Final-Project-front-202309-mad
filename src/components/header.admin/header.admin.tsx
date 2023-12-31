import { useNavigate } from 'react-router-dom';
import { User } from '../../entities/user';
import { useUsers } from '../../hooks/use.users';
import './header.admin.style.scss';

type Props = {
  title?: string;
  user: User;
  handleSelectFn?: () => void;
};
export function HeaderAdmin({ title, user, handleSelectFn }: Props) {
  const navigate = useNavigate();
  const { doLogout } = useUsers();
  const handleLogout = () => {
    doLogout();
    navigate('/admin/login');
  };
  return (
    <header className="admin-header">
      <div className="admin-header-top">
        <div className="header-admin-logo-container">
          <img
            className="header-admin-logo"
            src="/alien-bar-isotipe-black.png"
            alt=""
          />
          <p>Admin Pannel</p>
        </div>

        <div className="header-admin-user-info-container">
          <img
            className="header-admin-user-profile-picture"
            src={user.profilePic.url}
            alt=""
          />
          <p onClick={handleLogout} onKeyDown={handleLogout}>
            Cerrar sesión
          </p>
        </div>
      </div>
      {title && (
        <div className="header-admin-bottom">
          {title && <h2>{title}</h2>}
          <select
            onChange={handleSelectFn}
            className="header-admin-menu-filter"
            name="menuFilter"
            id="filter"
          >
            <option>Todos</option>
            <option>Litros 1.0</option>
            <option>Litros 2.0</option>
            <option>Sueritos</option>
            <option>Cervezas</option>
            <option>Tequila</option>
            <option>Brandy</option>
            <option>Ginebra</option>
          </select>
        </div>
      )}
    </header>
  );
}
