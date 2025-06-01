// src/components/molecules/CardPlant.tsx
import React from "react";
import styles from "./CardPlant.module.css";

export interface Plant {
  id: number;
  name: string;
  price: number;
  light: "sun" | "shade";
  image: string; // Corrigido aqui
}

const CardPlant = ({ plant }: { plant: Plant }) => {
  return (
    <div className={styles.card}>
      <img src={plant.image} alt={plant.name} className={styles.image} />
      <div className={styles.name}>{plant.name}</div>
      <div className={styles.price}>R$ {plant.price.toFixed(2)}</div>
      <div className={styles.light}>
        Luz: {plant.light === "sun" ? "Sol" : "Sombra"}
      </div>
    </div>
  );
};

export default CardPlant;

