import { GalaxyRingProps } from "./types";
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { GalaxyRingItem } from "./GalaxyRingItem";
import { motion, Transition } from "framer-motion";

// https://stackoverflow.com/questions/12813573/position-icons-into-circle

const duration: Record<string, number> = {
  slow: 10,
  fast: 8,
  faster: 6,
};

const getTransition = (
  animationSpeed: GalaxyRingProps["animationSpeed"] = "slow"
): Transition => ({
  ease: "linear",
  duration: duration[animationSpeed],
  repeat: Infinity,
  repeatType: "loop",
});

export const GalaxyRing = ({
  radius,
  childrenSize,
  children,
  animationSpeed = "slow",
}: GalaxyRingProps) => {
  const count = React.Children.count(children);

  const size = useMemo(() => {
    if (typeof radius === "number" || typeof radius === "string") {
      return `calc(2*${radius})`;
    }

    return radius.map((value) => `calc(2*${value})`);
  }, [radius]);

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "solid 1px",
        display: "flex",
        position: "absolute",
      }}
      component={motion.div}
      animate={{
        transform: "rotate(360deg)",
      }}
      transition={getTransition(animationSpeed)}
    >
      {React.Children.map(children, (child, childIndex) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return (
          <GalaxyRingItem
            childrenPosition={childIndex * 1}
            totalChildren={count}
            radius={radius}
            childrenSize={childrenSize}
          >
            <Box
              component={motion.div}
              animate={{ transform: "rotate(-360deg)" }}
              transition={getTransition(animationSpeed)}
            >
              {React.cloneElement(child)}
            </Box>
          </GalaxyRingItem>
        );
      })}
    </Box>
  );
};
