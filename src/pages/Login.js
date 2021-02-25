import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";
import Logo from "../assets/logo.svg";
import LogoRojo from "../assets/logorojo.svg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "https://www.wonapp.co/login";

  const onChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "email") {
      await setEmail(value);
      console.log("email", setEmail);
    } else if (name === "password") {
      await setPassword(value);
      console.log("email", setPassword);
    }
  };

  const signin = async () => {
    await axios
      .post(baseUrl, { email: email, password: password, type: "User" })
      .then((response) => {
        localStorage.setItem('token', response.data.data.token);
        console.log('token', response.data.data.token)
      })
      .then(response => {
        window.location.href="./drawer";
      }) 
      .catch((error) => {
        console.log(error);
      });
  };

  /* const signin = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => console.log(data))
  } */

  return (
    <div className="container">
      <div className="bg">
        <section className="logo">
          <img src={Logo} alt="logo" />
        </section>

        <section className="login">
          <div className="login__container">
            <img src={LogoRojo} alt="logo" />
            <h3 className="login__title">Iniciar sesión</h3>
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={onChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={onChange}
              required
            />
            <span className="login__forgot"></span>
            <button onClick={signin} className="login__btn signin">
              INGRESAR
            </button>
            <hr />
            <button className="login__btn register">Crear Cuenta</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
