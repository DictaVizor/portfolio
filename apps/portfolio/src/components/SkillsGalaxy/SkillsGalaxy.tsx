import { Box, SvgIcon, Typography, useTheme } from "@mui/material";
import { Planet } from "../Planet";
import { GalaxyRing } from "./GalaxyRing";
import { TsIcon } from "@portfolio/icons";

const iconSizes = ["1em", "2em", "2em", "2em"];

export const SkillsGalaxy = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: {
            xs: "100vw",
            md: "70vw",
            lg: "60vw",
          },
          width: {
            xs: "100vw",
            md: "70vw",
            lg: "60vw",
          },
          position: "relative",
        }}
      >
        <GalaxyRing
          radius={["45vw", "40vw", "38vw", "26vw"]}
          childrenSize={iconSizes}
          animationSpeed="slow"
        >
          <SvgIcon
            component={TsIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
        </GalaxyRing>

        <GalaxyRing
          radius={["35vw", "30vw", "28vw", "20vw"]}
          childrenSize={iconSizes}
          animationSpeed="fast"
        >
          <SvgIcon
            component={TsIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
        </GalaxyRing>

        <GalaxyRing
          radius={["25vw", "20vw", "18vw", "14vw"]}
          childrenSize={iconSizes}
          animationSpeed="faster"
        >
          <SvgIcon
            component={TsIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
        </GalaxyRing>

        <Planet
          size={[80, 80, 120]}
          boxShadowSize={10}
          color={theme.palette.secondary.main}
          innerBoxProps={{
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            },
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              color: "transparent",
              WebkitTextStroke: "1px white",
            }}
          >
            Skills
          </Typography>
        </Planet>
      </Box>
    </Box>
  );
};
