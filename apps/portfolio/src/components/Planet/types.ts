import { BoxProps } from "@mui/material";
import React from "react";
import { ResponsiveStyleValue, SxProps } from "@mui/system";

export type PlanetProps = Omit<BoxProps, "color"> & {
    size?: Array<number> | number;
    children?: React.ReactNode;
    innerBoxProps?: BoxProps;
    boxShadowSize?: number;
    color?: string;
}