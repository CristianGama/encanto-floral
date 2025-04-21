import { useState } from "react";
import "./assets/styles/App.css";
import Menu from "./features/menu/pages/menu";
import background from "./assets/images/background.png";
import logo from "./assets/images/logo.png";

import user_logo from "./assets/images/user-logo.png";
import shopping_car_logo from "./assets/images/shopping-car-logo.png";

//sdfsdfsfsdfsfsdf
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
    </>
  );
}

export default App;
