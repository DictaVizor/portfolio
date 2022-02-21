import { PlanetProps } from "./types";
import { Box, useTheme, alpha, darken, lighten } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";

export const Planet = (props: PlanetProps) => {
  const theme = useTheme();
  const {
    size = 500,
    color = theme.palette.primary.main,
    children,
    boxShadowSize = 92,
    innerBoxProps,
    ...boxProps
  } = props;

  return (
    <Box
      {...boxProps}
      sx={{
        height: size,
        width: size,
        backgroundColor: color,
        borderRadius: "50%",
        boxShadow: `0px 0px 0px ${boxShadowSize}px ${alpha(
          lighten(color, 0.1),
          0.28
        )}`,
        ...boxProps?.sx,
      }}
      component={motion.div}
      animate={{
        boxShadow: `0px 0px 0px ${boxShadowSize * 0.7}px ${alpha(
          lighten(color, 0.1),
          0.15
        )}`,
      }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 10,
      }}
    >
      <Box {...innerBoxProps}>{children}</Box>
    </Box>
  );
};

export default Planet;
