import React from "react";
import { Button } from "../../button";
import { Card } from "../../card";
import { Ingredients } from "../../ingredients/ingredients";
import styles from "./menu.module.css";

const Menu = () => {
  const onClick = () => {};
  return (
    <div>
      <h1>Tu mejor sabor esta en Habi</h1>
      <div className={styles.card_group}>
        <Card
          precio="$ 10.000"
          title="Pizza Peperoni"
          img="/images/peperoni.jpg"
        />
        <Card precio="$ 10.000" title="Pizza Pollo" img="/images/pollo.jpg" />
        <Card precio="$ 10.000" title="Pizza Base" img="/images/base.jpg" />
        <Button onClick={() => onClick} text="Crear Pizza" />
      </div>
    </div>
  );
};

export default Menu;
