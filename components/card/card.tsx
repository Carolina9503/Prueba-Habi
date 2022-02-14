import React from "react";
import { Button } from "../button";
import styles from "./card.module.css";

type CardProps = {
  img: string;
  title: string;
  precio: String;
};

const Card = ({ img, title, precio }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="pizza" className={styles.card__img} />
      <div className="body">
        <h1>{title}</h1>

        <p> Precio base: {precio}</p>
        <h2>Vendio + 10 veces</h2>
        <Button text="Ordenar" />
      </div>
    </div>
  );
};
export default Card;
