import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  SvgIcon,
  Box,
} from "@mui/material";
import { Link } from "@portfolio/common";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const AppBar = () => {
  return (
    <MuiAppBar
      position="absolute"
      sx={{ background: "transparent", zIndex: 100 }}
      elevation={0}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          size="large"
          sx={{
            color: "text.primary",
            fontSize: 30,
          }}
          LinkComponent={Link}
          href={"https://www.linkedin.com/in/victor-diaz-4956a0211/"}
          target="_blank"
        >
          <SvgIcon component={BsLinkedin} inheritViewBox fontSize="inherit" />
        </IconButton>
        <IconButton
          size="large"
          sx={{
            color: "text.primary",
            fontSize: 30,
          }}
          LinkComponent={Link}
          href={"https://github.com/DictaVizor"}
          target="_blank"
        >
          <SvgIcon component={BsGithub} inheritViewBox fontSize="inherit" />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
