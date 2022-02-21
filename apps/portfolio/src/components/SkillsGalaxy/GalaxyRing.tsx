import { GalaxyRingProps } from "./types";
import { Box } from "@mui/material";
import React from "react";
import { GalaxyRingItem } from "./GalaxyRingItem";

// https://stackoverflow.com/questions/12813573/position-icons-into-circle

export const GalaxyRing = ({
  radius,
  childrenSize,
  children,
}: GalaxyRingProps) => {
  const count = React.Children.count(children);

  return (
    <Box
      sx={{
        width: `calc(2*${radius})`,
        height: `calc(2*${radius})`,
        borderRadius: "50%",
        border: "solid 1px",
        display: "flex",
        position: "absolute",
      }}
    >
      {React.Children.map(children, (child, childIndex) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return (
          <GalaxyRingItem
            position={childIndex * 1}
            totalChildren={count}
            radius={radius}
            childrenSize={childrenSize}
          >
            {React.cloneElement(child)}
          </GalaxyRingItem>
        );
      })}
    </Box>
  );
};
