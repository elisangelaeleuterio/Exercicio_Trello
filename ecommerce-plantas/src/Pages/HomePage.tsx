import React from "react";
import PlantGrid from "@organisms/PlantGrid";
import { Plant } from "@molecules/CardPlant";
import StoreLayout from "components/template/StoreLayout";// Corrigido de MainLayout para StoreLayout
import { Typography } from "@mui/material";

const plants: Plant[] = [
  { id: 1, name: "Samambaia", price: 12.3, light: "shade", image: "../public/samambaia.jpg" },
  { id: 2, name: "Cacto", price: 22.5, light: "sun", image: "../public/cactos.jpg" },
  { id: 3, name: "Espada de São Jorge", price: 18.9, light: "shade", image: "../public/espada sao jorge.jpg" },
  { id: 4, name: "Suculenta", price: 9.99, light: "sun", image: "../public/suculenta.jpg"},
  { id: 5, name: "Rabo de Macaco", price: 25.99, light: "sun", image: "../public/rabo de macaco.jpg" },
  { id: 6, name: "Flor de Cera", price: 33.99, light: "shade", image: "./public/flor de cera.jpg" },
];

const HomePage = () => {
  return (
    <StoreLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        Loja de Plantas
      </Typography>
      <PlantGrid plants={plants} />
    </StoreLayout>
  );
};

export default HomePage;

