import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export const WindowInfo: React.FC<any> = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <h3>Информация о пользователе</h3>
        <Button variant="contained" color="secondary" fullWidth={true}>
          УДАЛИТЬ
        </Button>
      </DialogContent>
    </Dialog>
  );
};
