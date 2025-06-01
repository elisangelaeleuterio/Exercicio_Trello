// src/components/atoms/PlantIcon.tsx

import { LocalFlorist } from "@mui/icons-material";

const PlantIcon = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const fontSize = size === "sm" ? 20 : size === "md" ? 32 : 48;
  return <LocalFlorist style={{ fontSize }} />;
};

export default PlantIcon;