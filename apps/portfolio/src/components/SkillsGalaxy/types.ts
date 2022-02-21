import React from "react";

export type GalaxyRingProps = {
    radius: number | string | Array<number | string>;
    children?: React.ReactNode;
    childrenSize: number | string | Array<number | string>;
}


export type GalaxyRingItemProps = {
    children?: React.ReactNode;
    position: number;
    totalChildren: number;
    radius: GalaxyRingProps["radius"];
    childrenSize: number | string | Array<number | string>;
}