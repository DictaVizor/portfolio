import { Button, Typography, SvgIcon, Box, darken } from "@mui/material";
import { Planet } from "../Planet";
import { MdMail } from "react-icons/md";
import { ContactButton } from "../ContactButton";

export const PresentationPlanet = () => {
  return (
    <Planet
      sx={{
        transform: "translate(-36%, -15%)",
      }}
      size={[800, 1000, 1200, 1200, 1400]}
      innerBoxProps={{
        sx: {
          paddingTop: "20%",
          marginLeft: "36%",
          maxWidth: "100vw",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          height: [50, 100],
          width: [50, 100],
          backgroundColor: "primary.dark",
          marginRight: "10em",
          marginLeft: "auto",
          marginBottom: 10,
        }}
      />

      <Typography
        variant="h3"
        sx={{
          color: "transparent",
          WebkitTextStroke: "1px white",
        }}
      >
        Hello ! I&apos;m Victor
      </Typography>
      <Typography variant="h2" fontWeight="medium" gutterBottom>
        I&apos;m a Full Stack Developer
      </Typography>
      <Typography
        variant="h4"
        component="p"
        gutterBottom
        color="text.secondary"
        sx={{ pr: 2 }}
      >
        i help companies to turn ideas from zero into a functional and wonderful
        experience
      </Typography>
      <ContactButton />
      <Box
        sx={{
          borderRadius: "50%",
          height: [20, 35],
          width: [20, 35],
          backgroundColor: "primary.dark",
          marginTop: 7,
          marginLeft: 4,
        }}
      />
    </Planet>
  );
};
