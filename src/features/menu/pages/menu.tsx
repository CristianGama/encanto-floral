import { useState } from "react";
import header from "../../../assets/images/main/header.jpg";
import delivery from "../../../assets/images/main/advantages/delivery.png";
import box from "../../../assets/images/main/advantages/box.png";
import price from "../../../assets/images/main/advantages/price.png";
import watch from "../../../assets/images/main/advantages/watch.png";

import "../../../assets/styles/menu.css";

import { RecommendedProductList } from "../components/RecommendedProductList";

function Menu() {
  return (
    <>
      <div className="main-screen">
        <img src={header} alt="none" className="main-screen-img" />
        <div className="main-screen-background"></div>
        <div className="main-screen-name">Encanto Floral</div>
        <div className="main-screen-subtitle">Llena el aroma de tu hogar</div>
      </div>
      <section className="main-advantages-section">
        <article className="main-advantages">
          <div className="main-advantage">
            <img src={delivery} alt="" className="main-advantage-img" />
            <div>Envío Rápido</div>
          </div>
          <div className="main-advantage">
            <img src={box} alt="" className="main-advantage-img" />
            <div>Entrega Segura</div>
          </div>
          <div className="main-advantage">
            <img src={watch} alt="" className="main-advantage-img" />
            <div>Sin retrasos</div>
          </div>
          <div className="main-advantage">
            <img src={price} alt="" className="main-advantage-img" />
            <div>Precio Justo</div>
          </div>
        </article>
      </section>
      <section className="main-about-section">
        <article className="main-about">
          <div className="main-about-title">Sobre Nosotros</div>
          <div className="main-about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
            totam nostrum ipsum, impedit ipsa dolores cumque earum eos unde quam
            quaerat porro nobis cum quos. Dolores quo quibusdam, consectetur
            porro corporis dignissimos accusamus blanditiis aperiam, ducimus
            atque, quaerat amet.
          </div>
        </article>
        <article className="main-about">
          <div className="main-about-title">Misión</div>
          <div className="main-about-description">
            Brindar arreglos florales únicos y de alta calidad que transmitan
            sentimientos y embellezcan cada ocasión, ofreciendo un servicio
            excepcional y comprometido con la sostenibilidad y la creatividad.
          </div>
        </article>
        <article className="main-about main-vision">
          <div className="main-about-title">Visión</div>
          <div className="main-about-description">
            Ser la florería de referencia en la región, reconocida por la
            originalidad de nuestros diseños, la frescura de nuestras flores y
            nuestro compromiso con la satisfacción de los clientes, expandiendo
            nuestra presencia en el mercado físico y digital.
          </div>
        </article>
      </section>
      <section className="main-recommendations-section">
        <article className="main-buttons">
          <div className="main-button">Novedades</div>
          <div className="main-button">Promociones</div>
          <div className="main-button">Más Vendidos</div>
          <div className="main-button">Flores Individuales</div>
        </article>
        <RecommendedProductList products={[{name:"hola", price:200, id:1, imageUrl:header}]} />
      </section>
      <section className="main-discover-section">
        <article className="main-discover">
          <div className="main-discover-title">Categoria 0</div>
          <img className="main-discover-img" src={header} alt="" />
          <div className="main-discover-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            doloribus facilis laboriosam deserunt molestias, rerum accusamus
            illum quae nostrum. Facere?
          </div>
          <div className="main-discover-explorer">Explorar</div>
        </article>
        <article className="main-discover">
          <div className="main-discover-title">Categoria 1</div>
          <img className="main-discover-img" src={header} alt="" />
          <div className="main-discover-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            optio culpa nemo saepe dicta quos numquam omnis veniam, hic enim!
          </div>
          <div className="main-discover-explorer">Explorar</div>
        </article>
        <article className="main-discover">
          <div className="main-discover-title">Categoria 2</div>
          <img className="main-discover-img" src={header} alt="" />
          <div className="main-discover-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            laboriosam dolor ea eligendi et voluptatum porro dicta a at.
            Recusandae!
          </div>
          <div className="main-discover-explorer">Explorar</div>
        </article>
        <article className="main-discover">
          <div className="main-discover-title">Categoria 3</div>
          <img className="main-discover-img" src={header} alt="" />
          <div className="main-discover-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            mollitia voluptate commodi, deserunt necessitatibus nostrum eveniet
            doloribus reprehenderit libero a?
          </div>
          <div className="main-discover-explorer">Explorar</div>
        </article>
      </section>
      <section className="main-contact-section">
        <div className="main-contact-title">Contáctanos</div>
        <form className="form-contact" action="" method="post">
          <div className="main-input">
            <div className="main-input-title">Nombre</div>
            <input className="input-normal" type="text" name="" id="" />
          </div>
          <div className="main-input">
            <div className="main-input-title">Teléfono</div>
            <input className="input-normal" type="text" name="" id="" />
          </div>
          <div className="main-input contact-email">
            <div className="main-input-title">Correcto Electrónico</div>
            <input className="input-email" type="email" name="" id="" />
          </div>
          <div className="main-input contact-comment">
            <div className="main-input-title">Comentario</div>
            <textarea className="input-comment" name="" id=""></textarea>
          </div>
        </form>
        <div className="main-contact-send">Enviar</div>
      </section>
    </>
  );
}

export default Menu;
