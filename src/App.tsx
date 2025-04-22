import { useState } from "react";
import "./assets/styles/App.css";
import Menu from "./features/menu/pages/menu";
import background from "./assets/images/background.png";
import logo from "./assets/images/logo.png";

import user_logo from "./assets/images/user-logo.png";
import shopping_car_logo from "./assets/images/shopping-car-logo.png";

import instagram from "./assets/images/socials logos/Instagram.png";
import facebook from "./assets/images/socials logos/facebook.png";
import x_logo from "./assets/images/socials logos/X_logo.jpg";

function App() {
  return (
    <>
      <img src={background} alt="" className="background" />
      <div className="background-color"></div>
      <header>
        <div className="logo">
          <img src={logo} alt="" className="logo-img" />
          <div className="logo-text">Encanto Floral</div>
        </div>
        <div className="navigation">
          <div className="button-nav">INICIO</div>
          <div className="button-nav">CATEGORÍAS</div>
          <div className="button-nav">PEDIDOS</div>
          <div className="button-nav">CATÁLOGO</div>
          <div className="button-nav">CARRITO</div>
        </div>
        <div className="options">
          <img src={user_logo} alt="" className="user-logo logo-option" />
          <img
            src={shopping_car_logo}
            alt=""
            className="shopping-car-logo logo-option"
          />
        </div>
      </header>
      <main>
        <Menu></Menu>
      </main>
      <footer>
        <section className="footer-main">
          <article className="footer-logo">
            <div className="footer-logo-title">Encanto Floral</div>
            <div className="footer-logo-subtitle">
              Llena el aroma de tu hogar
            </div>
          </article>
          <article className="footer-socials">
            <div className="footer-socials-title">Redes Sociales</div>
            <div className="footer-socials-icons">
              <img className="footer-socials-icon" src={facebook} alt="" />
              <img className="footer-socials-icon" src={x_logo} alt="" />
              <img className="footer-socials-icon" src={instagram} alt="" />
            </div>
          </article>
          <article className="footer-terms">
            <div className="footer-terms-title">Información Legal</div>
            <div className="footer-terms-options">
              <div className="footer-terms-text">Términos y Condiciones</div>
              <div className="footer-terms-text">Política de Privacidad</div>
            </div>
          </article>
        </section>
        <div className="footer-copyright">
          © 2025 Encanto Floral. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default App;
