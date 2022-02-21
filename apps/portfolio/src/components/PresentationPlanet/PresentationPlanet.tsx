import { Button, Typography, SvgIcon, Box, darken } from "@mui/material";
import { Planet } from "../Planet";
import { MdMail } from "react-icons/md";

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
      >
        i help companies to turn ideas from zero into a functional and wonderful
        experience
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          textTransform: "none",
        }}
        startIcon={
          <SvgIcon
            component={MdMail}
            inheritViewBox
            sx={{
              fontSize: 40,
            }}
          />
        }
        size="large"
      >
        <Typography
          variant="h5"
          component="span"
          sx={{
            padding: 1,
          }}
        >
          contact@victor-diaz.dev
        </Typography>
      </Button>
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
