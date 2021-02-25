import React, {useState, useEffect} from 'react'
import '../css/products.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
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

function Products() {
    const [cosas, setCosas] = useState([]); 
    const [sidebar, setSidebar] = useState(false);

    const sidebarData = [
        {
            title: 'Oficina',
            path: '/oficina',
            icon: Oficina,
            cName: 'nav-text'
        },
        {
            title: 'Catalogo',
            path: '/catalogo',
            icon: Catalogo,
            cName: 'nav-text'
        },
        {
            title: 'Bonos',
            path: '/bonos',
            icon: Bonos,
            cName: 'nav-text'
        },
        {
            title: 'Red',
            path: '/red',
            icon: Red,
            cName: 'nav-text'
        },
        {
            title: 'Invitar',
            path: '/invitar',
            icon: Invitar,
            cName: 'nav-text'
        },
        {
            title: 'Wonedero',
            path: '/woneder0',
            icon: Wonedero,
            cName: 'nav-text'
        },
        {
            title: 'Notificaciones',
            path: '/notificaciones',
            icon: Notificaciones,
            cName: 'nav-text'
        },
        {
            title: 'Recursos',
            path: '/recursos',
            icon: Recursos,
            cName: 'nav-text'
        },
        {
            title: 'Legal',
            path: '/legald',
            icon: Legal,
            cName: 'nav-text'
        },
        {
            title: 'Cuéntanos',
            path: '/cuentanos',
            icon: Cuentanos,
            cName: 'nav-text'
        },
        {
            title: 'Historial',
            path: '/historial',
            icon: Cuentanos,
            cName: 'nav-text'
        },
        {
            title: 'Cerrar sesión',
            path: '/logout',
            icon: Logout,
            cName: 'nav-text'
        },

    ]

    const showSidebar = () => setSidebar(!sidebar)

     useEffect(() => {
        const baseUrl = "https://www.wonapp.co/products/top";
        
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        
            /* axios.get(baseUrl, config)
            .then((response) => {
                setCosas(response.data.data);
                console.log('cosas', cosas)})
               
            .catch((error) => {console.log(error)}) */

            fetch(baseUrl, config)
            .then((res) => res.json())
            .then((data) => {
              
              setCosas(data.data);
              
            });
            console.log(cosas);
        
    }, []) 

    return (
        <>
        <div className="navbar">
            <Link to = "#" className="menu-bars">
                <div onClick={showSidebar}>x</div>
            </Link>
        </div>
        <div className="navbar2">
            <div>
                sidebar
            </div>
            <Link to = "#" >
                <div >TOP 10</div>
            </Link>
            <Link to = "#" >
                <div >APPS</div>
            </Link>
            <Link to = "#" >
                <div >BONOS</div>
            </Link>
            <Link to = "#" >
                <div >PAQUETES</div>
            </Link>
            <Link to = "#" >
                <div >RECARGAS</div>
            </Link>
            <div>
                nada
            </div>
            <div>
                boton
            </div>
            <div>
                lupa
            </div>
        </div>
        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <img className="logo" src = {Logo}/>
                    </Link>
                </li>
                {sidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <img src={item.icon} />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        <main>afsafsadfsdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              {cosas.map((item, index) => {return <li key={index}>{item.id}</li>})}
        </main>
           
        </>
    )
}

export default Products
