import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use.users';

export function Register() {
  const { doRegister } = useUsers();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    doRegister(formData);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input required type="file" name="profilePic"></input>
      <div className="input-container">
        <div>
          <p>Nombre</p>
          <input required type="text" name="name" />
        </div>
        <div>
          <p>Apellido paterno</p>
          <input required type="text" name="firstSurname" />
        </div>
        <div>
          <p>Apellido materno</p>
          <input type="text" name="secondSurname" />
        </div>
        <div>
          <p>Correo electrónico</p>
          <input required type="email" name="email" />
        </div>
        <div>
          <p>Contraseña</p>
          <input type={showPassword ? 'text' : 'password'} name="password" />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            See
          </button>
        </div>
      </div>
      <button type="submit">Registrarme</button>
    </form>
  );
}
