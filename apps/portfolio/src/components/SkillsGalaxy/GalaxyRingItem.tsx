import { Box } from "@mui/material";
import { GalaxyRingItemProps } from "./types";

// https://stackoverflow.com/questions/12813573/position-icons-into-circle

export const GalaxyRingItem = ({
  children,
  position,
  totalChildren,
  childrenSize,
  radius,
}: GalaxyRingItemProps) => {
  const angle = `calc(${position}*1turn/${totalChildren})`;

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `rotate(${angle}) translate(${radius}) rotate(calc(-1*${angle}))`,
        margin: `calc(-.5*${childrenSize})`,
      }}
    >
      {children}
    </Box>
  );
};
