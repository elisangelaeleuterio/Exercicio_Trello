import React from "react";
import { useMediaQuery, useTheme, Paper } from "@mui/material";
import CardPlant, { Plant } from "@molecules/CardPlant";
import styles from "./PlantGrid.module.css";

const PlantGrid = ({ plants }: { plants: Plant[] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isDesktop) return 3;
    return 1;
  };

  const columns = getColumns();

  return (
    <Paper
      elevation={3}
      className={styles.paperWrapper}
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {plants.map((plant) => (
          <CardPlant key={plant.id} plant={plant} />
        ))}
      </div>
    </Paper>
  );
};

export default PlantGrid;
