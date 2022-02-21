import { BoxProps } from "@mui/material";
import React from "react";
import { ResponsiveStyleValue, SxProps } from "@mui/system";

export type PlanetProps = Omit<BoxProps, "color"> & {
    size?: Array<number | string> | number | string;
    children?: React.ReactNode;
    innerBoxProps?: BoxProps;
    boxShadowSize?: number;
    color?: string;
}