import { SyntheticEvent, useState } from 'react';
import { User } from '../../entities/user';
import { useUsers } from '../../hooks/use.users';

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
    console.log(userLoginData);
  };
  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <h2>Inicia sesión</h2>
      <div className="input-container">
        <div>
          <p>Correo electrónico</p>
          <input required type="email" name="email" />
        </div>
        <div>
          <p>Contraseña</p>
          <input type={showPassword ? 'text' : 'password'} name="password" />
          <button
            name="see-button"
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            data-testid="see-button"
          >
            See
          </button>
        </div>
      </div>
      <button name="submit-button" type="submit">
        Iniciar sesión
      </button>
    </form>
  );
}
