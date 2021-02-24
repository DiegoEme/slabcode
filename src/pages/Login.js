import React from "react";
import "../css/login.css";
import Logo from "../assets/logo.svg";
import LogoRojo from "../assets/logorojo.svg";


function Login() {
  return (
    <div className="container">
      <div className="bg" >
        
        <section className="logo">
          <img src={Logo} alt="logo"/>
        </section>

        <section className="login">
            <div className="login__container">
              <img src={LogoRojo} alt="logo" />
                <h3 className="login__title">Iniciar sesión</h3>
                <input placeholder="Correo electrónico"/>
                <input placeholder="Contraseña"/>
                <span className="login__forgot"></span>
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
