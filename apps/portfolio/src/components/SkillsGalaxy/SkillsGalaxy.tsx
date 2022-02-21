import { Box, SvgIcon, Typography, useTheme } from "@mui/material";
import { Planet } from "../Planet";
import { GalaxyRing } from "./GalaxyRing";
import { TsIcon } from "@portfolio/icons";

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
        <GalaxyRing radius="35vw" childrenSize="2em">
          <SvgIcon
            component={TsIcon}
            sx={{ height: "2em", width: "2em" }}
            inheritViewBox
          />
        </GalaxyRing>
        <GalaxyRing radius="25vw" childrenSize="2em">
          <SvgIcon
            component={TsIcon}
            sx={{ height: "2em", width: "2em" }}
            inheritViewBox
          />
        </GalaxyRing>
        <GalaxyRing radius="15vw" childrenSize="2em">
          <SvgIcon
            component={TsIcon}
            sx={{ height: "2em", width: "2em" }}
            inheritViewBox
          />
        </GalaxyRing>
        <Planet
          size={[100, 120, 200]}
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
            variant="h3"
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
