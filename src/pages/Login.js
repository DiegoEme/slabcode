import React from "react";
import "../css/login.css";
import Logo from "../assets/logo.svg";

function Login() {
  return (
    <div className="container">
      <div className="bg" >
        <section className="logo">
          <img src={Logo} />
        </section>

        <section className="login">
            <div className="login__container">
                <h3 className="login__title">Iniciar sesión</h3>
                <input placeholder="Correo electrónico"/>
                <input placeholder="Contraseña"/>
                <span className="login__forgot">Olvidé la contraseña</span>
                <button className="login__btn signin">INGRESAR</button>
                <hr />
                <button className="login__btn register">Crear Cuenta</button>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
