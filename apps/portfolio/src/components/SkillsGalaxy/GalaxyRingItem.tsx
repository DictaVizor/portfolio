import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { GalaxyRingItemProps } from "./types";

// https://stackoverflow.com/questions/12813573/position-icons-into-circle

export function GalaxyRingItem<C extends React.ElementType = "div">({
  children,
  childrenPosition,
  totalChildren,
  childrenSize,
  radius,
  ...props
}: GalaxyRingItemProps<C>) {
  const angle = `calc(${childrenPosition}*1turn/${totalChildren})`;

  const transform = useMemo(() => {
    if (typeof radius === "number" || typeof radius === "string") {
      return `rotate(${angle}) translate(${radius}) rotate(calc(-1*${angle}))`;
    }

    return radius.map(
      (value) =>
        `rotate(${angle}) translate(${value}) rotate(calc(-1*${angle}))`
    );
  }, [radius, angle]);

  const margin = useMemo(() => {
    if (typeof childrenSize === "number" || typeof childrenSize === "string") {
      return `calc(-.5*${childrenSize})`;
    }

    return childrenSize.map((value) => `calc(-.5*${value})`);
  }, [childrenSize]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: transform,
        margin: margin,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default GalaxyRingItem;
