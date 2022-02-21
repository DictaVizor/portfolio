import { BoxProps } from "@mui/material";
import React from "react";
import { ResponsiveStyleValue, SxProps } from "@mui/system";
import { motion } from "framer-motion";

export type PlanetProps = Omit<BoxProps<typeof motion.div>, "color"> & {
    size?: Array<number | string> | number | string;
    children?: React.ReactNode;
    innerBoxProps?: BoxProps;
    boxShadowSize?: number;
    color?: string;
}