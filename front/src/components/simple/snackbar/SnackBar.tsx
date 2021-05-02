import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { Color } from "@material-ui/lab/Alert/Alert";

interface SnackbarPropsDto {
  open: boolean;
  handleClose: () => void;
  message: string;
  duration?: number;
  type: Color;
}

export const Snack: React.FC<SnackbarPropsDto> = ({
  open,
  handleClose,
  message,
  duration,
  type,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
    >
      <MuiAlert
        onClose={handleClose}
        elevation={6}
        variant="filled"
        severity={type}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
