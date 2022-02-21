import { BoxProps } from "@mui/material";
import React from "react";

export type GalaxyRingProps = {
    radius: number | string | Array<number | string>;
    children?: React.ReactNode;
    childrenSize: number | string | Array<number | string>;
    animationSpeed?: "slow" | "fast" | "faster";
}


export type GalaxyRingItemProps<C extends React.ElementType = "div"> = BoxProps<C, {component?: C}> & {
    children?: React.ReactNode;
    childrenPosition: number;
    totalChildren: number;
    radius: GalaxyRingProps["radius"];
    childrenSize: number | string | Array<number | string>;
}