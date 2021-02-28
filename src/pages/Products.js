import React, { useState, useEffect } from "react";
import "../css/products.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Oficina from "../assets/Trazado 5.svg";
import Catalogo from "../assets/Grupo 18.svg";
import Bonos from "../assets/Grupo 22.svg";
import Red from "../assets/Grupo 23.svg";
import Invitar from "../assets/Grupo 24.svg";
import Wonedero from "../assets/Grupo 25.svg";
import Notificaciones from "../assets/Trazado 22.svg";
import Recursos from "../assets/Trazado 19.svg";
import Legal from "../assets/Trazado 21.svg";
import Cuentanos from "../assets/Trazado 20.svg";
import Logout from "../assets/Grupo 26.svg";
import Lupa from "../assets/Grupo 636.svg";
import Hamburguesa from "../assets/Hamburguesa.svg";

function Products() {
  const [cosas, setCosas] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  let user = localStorage.getItem("token");

  const sidebarData = [
    {
      title: "Oficina",
      path: "/oficina",
      icon: Oficina,
      cName: "nav-text",
    },
    {
      title: "Catalogo",
      path: "/products",
      icon: Catalogo,
      cName: "nav-text",
    },
    {
      title: "Bonos",
      path: "/bonos",
      icon: Bonos,
      cName: "nav-text",
    },
    {
      title: "Red",
      path: "/red",
      icon: Red,
      cName: "nav-text",
    },
    {
      title: "Invitar",
      path: "/invitar",
      icon: Invitar,
      cName: "nav-text",
    },
    {
      title: "Wonedero",
      path: "/woneder0",
      icon: Wonedero,
      cName: "nav-text",
    },
    {
      title: "Notificaciones",
      path: "/notificaciones",
      icon: Notificaciones,
      cName: "nav-text",
    },
    {
      title: "Recursos",
      path: "/recursos",
      icon: Recursos,
      cName: "nav-text",
    },
    {
      title: "Legal",
      path: "/legald",
      icon: Legal,
      cName: "nav-text",
    },
    {
      title: "Cuéntanos",
      path: "/cuentanos",
      icon: Cuentanos,
      cName: "nav-text",
    },
    {
      title: "Historial",
      path: "/historial",
      icon: Cuentanos,
      cName: "nav-text",
    },
  ];
  const logout = () => {
    localStorage.clear();
    history.push("/");
    console.log("logout baby");
  };
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const baseUrl =
      "https://www.wonapp.co/products/search?page=1&per_page=20&category=&subcategory=";

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    fetch(baseUrl, config)
      .then((res) => res.json())
      .then((data) => {
        setCosas(data.data);
      });
  }, []);

  return (
    <>
      <div className="navbar">
        <Link to="#">
          <img className="menu-bars" onClick={showSidebar} src={Hamburguesa} />
        </Link>
      </div>
      <div className="navbar2">
        <div></div>
        <Link className="navbar2-link" to="#">
          <a>TOP 10</a>
        </Link>
        <Link className="navbar2-link" to="#">
          <a>APPS</a>
        </Link>
        <Link className="navbar2-link" to="#">
          <a>BONOS</a>
        </Link>
        <Link className="navbar2-link" to="#">
          <a>PAQUETES</a>
        </Link>
        <Link className="navbar2-link" to="#">
          <a>RECARGAS</a>
        </Link>
        <div></div>
        <div>
          <button className="btn">
            <img src={Wonedero} />$ 100.000
          </button>
        </div>
        <div>
          <img className="lupa" src={Lupa} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul onClick={showSidebar} className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <img src={item.icon} alt={item.title} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li onClick={logout} className="nav-text">
              <Link>
                <img src={Logout} />
                <span>Cerrar sesión</span>
              </Link>
          </li>
        </ul>
      </nav>
      <main>
        {cosas.map((item, index) => {
          
          return (
            <div key={index} className="product-card">
              <div className="image-box">
                <img
                  src={item.image_url}
                  className="product-image"
                  alt={item.name}
                />
              </div>

              <span className="name">{item.name}</span>
              <span className="price">$ {item.value}</span>
              <span className="points">Obtienes {item.points} punto</span>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Products;
