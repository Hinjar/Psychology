import { Snack } from "../../components/simple/snackbar/SnackBar";
import { SnackContext } from "../../context/snackbar/snackbar-context";
import React, { useState } from "react";
import { SnackbarTypes } from "../../core/const/snackbar-types";

interface SnackbarContainerPropsDto {
  children: React.ReactNode;
}

export const SnackbarContainer: React.FC<SnackbarContainerPropsDto> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(SnackbarTypes.INFO);
  function checkType(type: SnackbarTypes) {
    switch (type) {
      case SnackbarTypes.INFO: {
        return SnackbarTypes.INFO;
      }
      case SnackbarTypes.ERROR: {
        return SnackbarTypes.ERROR;
      }
      case SnackbarTypes.SUCCESS: {
        return SnackbarTypes.SUCCESS;
      }
      case SnackbarTypes.WARNING: {
        return SnackbarTypes.WARNING;
      }
    }
  }

  function handleOpen(message: string, type = SnackbarTypes.INFO) {
    setType(checkType(type));
    setMessage(message);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <SnackContext.Provider
      value={{
        open: handleOpen,
        close: handleClose,
      }}
    >
      {children}
      <Snack
        type={type}
        message={message}
        open={open}
        handleClose={handleClose}
        duration={2000}
      />
    </SnackContext.Provider>
  );
};
