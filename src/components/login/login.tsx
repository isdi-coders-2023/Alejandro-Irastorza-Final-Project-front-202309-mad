import { SyntheticEvent, useState } from 'react';
import { User } from '../../entities/user';
import { useUsers } from '../../hooks/use.users';
import './login.style.scss';

export function Login() {
  const { doLogin } = useUsers();
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const userLoginData: Partial<User> = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    doLogin(userLoginData);
  };
  return (
    <form className="login-form" aria-label="form" onSubmit={handleSubmit}>
      <h2 className="login-title">Inicia sesión</h2>
      <div className="input-container">
        <div className="input-style">
          <p>Correo electrónico</p>
          <input required type="email" name="email" />
        </div>
        <div className="input-style input-password">
          <p>Contraseña</p>
          <div className="login-password">
            <input type={showPassword ? 'text' : 'password'} name="password" />
            <button
              name="see-button"
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              data-testid="see-button"
            >
              Hide
            </button>
          </div>
        </div>
      </div>

      <button
        className="login-submit-button"
        name="submit-button"
        type="submit"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
