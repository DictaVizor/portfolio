import {
  Button,
  SvgIcon,
  Typography,
  ButtonProps,
  Snackbar,
  Alert,
  Portal,
} from "@mui/material";
import { Fragment, useState } from "react";
import { MdMail } from "react-icons/md";
import { ContactButtonProps } from "./types";

export const ContactButton = ({
  buttonProps,
  typographyProps,
}: ContactButtonProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText("contact@victor-diaz.dev");
    setSnackbarOpen(true);
    console.log("asd");
  };

  return (
    <Fragment>
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
            sx={{ height: 40, width: 40 }}
          />
        }
        size="large"
        {...buttonProps}
        onClick={handleClick}
      >
        <Typography variant="h5" component="span" {...typographyProps}>
          contact@victor-diaz.dev
        </Typography>
      </Button>
      <Portal>
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          autoHideDuration={2000}
          sx={{ position: "fixed" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert>Email copied to clipboard !</Alert>
        </Snackbar>
      </Portal>
    </Fragment>
  );
};

export default ContactButton;
