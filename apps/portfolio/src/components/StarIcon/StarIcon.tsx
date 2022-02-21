import { SvgIcon } from "@mui/material";
import { StarIconProps } from "./types";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  slow: {
    x: [0, 25, 50, 75, 100],
    opacity: [0, 1, 1, 1, 0],
  },
  fast: {
    x: [0, 50, 100, 150, 200],
    opacity: [0, 1, 1, 1, 0],
  },
  faster: {
    x: [0, 200, 400, 600],
    opacity: [0, 1, 1, 1, 0],
  },
};

export const StarIcon = ({
  animationSpeed = "fast",
  ...props
}: StarIconProps<typeof motion.svg>) => {
  return (
    <SvgIcon
      component={motion.svg}
      width="104"
      height="112"
      viewBox="0 0 104 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animationSpeed}
      transition={{
        ease: "linear",
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.1, 1],
        delay: Math.floor(Math.random() * 3),
      }}
      variants={variants}
      {...props}
    >
      <g clipPath="url(#clip0_8_393)">
        <path
          d="M102.653 53.9406L64.5113 44.5835C64.4611 44.5705 64.4126 44.5631 64.3622 44.5557C63.3707 44.4089 62.5804 43.5615 62.4175 42.3386L53.69 1.4439C53.5098 0.598469 52.8095 0 52 0C51.1905 0 50.4904 0.598469 50.31 1.4439L41.5567 42.4983C41.4198 43.5613 40.6295 44.4087 39.4889 44.5833L1.34672 53.9406C0.558188 54.134 0 54.8847 0 55.7526C0 56.6204 0.558188 57.3714 1.34672 57.5645L39.6378 66.9495C40.6293 67.0963 41.4196 67.9437 41.5825 69.1665L50.31 110.061C50.4904 110.907 51.1905 111.505 52 111.505C52.8095 111.505 53.5098 110.907 53.69 110.061L62.4433 69.0069C62.5802 67.9439 63.3705 67.0965 64.5111 66.9218L102.653 57.5645C103.442 57.3714 104 56.6204 104 55.7526C104 54.8847 103.442 54.134 102.653 53.9406Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_393">
          <rect width="104" height="111.505" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default StarIcon;
