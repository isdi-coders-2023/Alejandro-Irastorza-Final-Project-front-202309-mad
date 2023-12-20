import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use.users';
import './register.style.scss';

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
    <form className="register-form" aria-label="form" onSubmit={handleSubmit}>
      <h2 className="register-title">Registro</h2>
      <p>Foto de perfil</p>
      <div className="input-container">
        <input
          className="register-image-upload"
          required
          type="file"
          name="profilePic"
        ></input>
        <div className="input-container">
          <div className="input-style">
            <p>Nombre</p>
            <input required type="text" name="name" />
          </div>
          <div className="input-style">
            <p>Apellido paterno</p>
            <input required type="text" name="firstSurname" />
          </div>
          <div className="input-style">
            <p>Apellido materno</p>
            <input type="text" name="secondSurname" />
          </div>
          <div className="input-style">
            <p>Correo electrónico</p>
            <input required type="email" name="email" />
          </div>
          <div className="input-style input-password">
            <p>Contraseña</p>
            <div className="register-password">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
              />
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
        </div>
      </div>

      <button className="register-submit-button" type="submit">
        Registrarme
      </button>
    </form>
  );
}
