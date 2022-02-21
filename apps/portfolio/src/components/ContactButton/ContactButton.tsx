import { Button, SvgIcon, Typography, ButtonProps } from "@mui/material";
import { MdMail } from "react-icons/md";
import { ContactButtonProps } from "./types";

export const ContactButton = ({
  buttonProps,
  typographyProps,
}: ContactButtonProps) => {
  return (
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
    >
      <Typography variant="h5" component="span" {...typographyProps}>
        contact@victor-diaz.dev
      </Typography>
    </Button>
  );
};
