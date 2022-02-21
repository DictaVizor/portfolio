import { Planet } from "../Planet";
import { Typography, Box, SvgIcon, IconButton } from "@mui/material";
import { ContactButton } from "../ContactButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "@portfolio/common";

export const ContactPlanet = () => {
  return (
    <Planet
      sx={{
        mr: ["0", "0"],
        ml: ["0", "auto"],
        transform: ["translateY(20%)", "translateY(65%)"],
      }}
      size={["100vw", "70vw"]}
      innerBoxProps={{
        sx: {
          display: "flex",
          alignItems: "center",
          pt: 4,
          flexDirection: "column",
        },
      }}
      color="#a9a9a9"
    >
      <Typography
        variant="h4"
        sx={{
          color: "transparent",
          WebkitTextStroke: "1px white",
        }}
        component="h1"
      >
        Contact
      </Typography>
      <Typography variant="h3" component="p" fontWeight="medium">
        Interested ?
      </Typography>
      <Typography variant="h3" component="p" fontWeight="medium" gutterBottom>
        Lets get in touch !
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ContactButton />
        <Box sx={{ mr: "auto", ml: "auto" }}>
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
        </Box>
      </Box>
    </Planet>
  );
};

export default ContactPlanet;
