import { StarIcon, StarIconProps } from "../StarIcon";
import { styled, Box } from "@mui/material";
import { Fragment } from "react";

export const BaseStar = styled(StarIcon)({
  position: "absolute",
  zIndex: -1,
});

export const SmallStar = (props: StarIconProps) => {
  return (
    <BaseStar
      {...props}
      sx={{
        height: {
          xs: 5,
          md: 10,
        },
        width: {
          xs: 5,
          md: 10,
        },
        ...props?.sx,
      }}
      animationSpeed="slow"
    />
  );
};

export const MediumStar = (props: StarIconProps) => {
  return (
    <BaseStar
      {...props}
      sx={{
        height: {
          xs: 10,
          md: 20,
        },
        width: {
          xs: 10,
          md: 20,
        },
        ...props?.sx,
      }}
      animationSpeed="fast"
    />
  );
};

export const LargeStar = (props: StarIconProps) => {
  return (
    <BaseStar
      {...props}
      sx={{
        height: {
          xs: 20,
          md: 40,
        },
        width: {
          xs: 20,
          md: 40,
        },
        ...props?.sx,
      }}
      animationSpeed="faster"
    />
  );
};

export const StarsBackground = () => {
  return (
    <Fragment>
      <Box
        sx={{
          zIndex: -1,
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
      >
        <MediumStar
          sx={{
            top: "40%",
            left: "70%",
          }}
        />
        <MediumStar
          sx={{
            top: "80%",
            left: "40%",
          }}
        />
        <SmallStar
          sx={{
            top: "8%",
            left: "60%",
          }}
        />
        <SmallStar
          sx={{
            top: "62%",
            left: "10%",
          }}
        />
        <SmallStar
          sx={{
            top: "22%",
            left: "18%",
          }}
        />
        <SmallStar
          sx={{
            top: "14%",
            left: "90%",
          }}
        />
        <SmallStar
          sx={{
            top: "91%",
            left: "1%",
          }}
        />
        <SmallStar
          sx={{
            top: "72%",
            left: "85%",
          }}
        />
        <LargeStar sx={{ top: "72%", left: "43%" }} />
        <LargeStar sx={{ top: "45%", left: "21%" }} />
        <LargeStar sx={{ top: "89%", left: "78%" }} />
      </Box>
    </Fragment>
  );
};

export default StarsBackground;
