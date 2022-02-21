import {SvgIconProps} from "@mui/material"
import { ElementType } from "react";
import {motion} from "framer-motion"

export type StarIconProps<P extends ElementType = typeof motion.svg> = Omit<SvgIconProps<P>, "component"> & {
    animationSpeed?: "slow" | "fast" | "faster"
};