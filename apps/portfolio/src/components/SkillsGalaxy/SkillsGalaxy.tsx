import { Box, SvgIcon, Typography, useTheme } from "@mui/material";
import { Planet } from "../Planet";
import { GalaxyRing } from "./GalaxyRing";
import {
  JsIcon,
  TsIcon,
  Css3Icon,
  Html5Icon,
  PythonIcon,
  PostgresqlIcon,
  MongodbIcon,
  ReactIcon,
  GraphqlIcon,
  ApolloIcon,
  PrismaIcon,
  SassIcon,
  LessIcon,
  MuiIcon,
  AntIcon,
  TailwindIcon,
  NextjsIcon,
  DjangoIcon,
  NodejsIcon,
  FigmaIcon,
  GitIcon,
  JenkinsIcon,
  CircleciIcon,
} from "@portfolio/icons";

const iconSizes = ["1em", "2em", "2em", "1.8em"];

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
            component={DjangoIcon}
            sx={{
              height: iconSizes.map((size) => `calc(${size}*2)`),
              width: iconSizes.map((size) => `calc(${size}*2)`),
            }}
            inheritViewBox
          />

          <SvgIcon
            component={NodejsIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />

          <SvgIcon
            component={FigmaIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />
          <SvgIcon
            component={GitIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />
          <SvgIcon
            component={JenkinsIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />
          <SvgIcon
            component={CircleciIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />
        </GalaxyRing>

        <GalaxyRing
          radius={["35vw", "30vw", "28vw", "20vw"]}
          childrenSize={iconSizes}
          animationSpeed="fast"
        >
          <SvgIcon
            component={ReactIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={GraphqlIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={ApolloIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={PrismaIcon}
            sx={{
              height: iconSizes,
              width: iconSizes,
            }}
            inheritViewBox
          />
          <SvgIcon
            component={SassIcon}
            sx={{
              height: iconSizes.map((size) => `calc(${size}*1.5)`),
              width: iconSizes.map((size) => `calc(${size}*1.5)`),
            }}
            inheritViewBox
          />
          <SvgIcon
            component={LessIcon}
            sx={{
              height: iconSizes.map((size) => `calc(${size}*1.5)`),
              width: iconSizes.map((size) => `calc(${size}*1.5)`),
            }}
            inheritViewBox
          />
          <SvgIcon
            component={MuiIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={AntIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={TailwindIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={NextjsIcon}
            sx={{
              height: iconSizes.map((size) => `calc(${size}*2)`),
              width: iconSizes.map((size) => `calc(${size}*2)`),
            }}
            inheritViewBox
          />
        </GalaxyRing>

        <GalaxyRing
          radius={["23vw", "19vw", "18vw", "14vw"]}
          childrenSize={iconSizes}
          animationSpeed="faster"
        >
          <SvgIcon
            component={TsIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={JsIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={Css3Icon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={PythonIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={Html5Icon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={PostgresqlIcon}
            sx={{ height: iconSizes, width: iconSizes }}
            inheritViewBox
          />
          <SvgIcon
            component={MongodbIcon}
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

export default SkillsGalaxy;
