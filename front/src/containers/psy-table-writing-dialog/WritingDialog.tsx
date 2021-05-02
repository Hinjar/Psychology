import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { WritingForm } from "../../components/ordinary/writing-form/WritingForm";

export const WritingDialog: React.FC<any> = ({ open, handleClose }) => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <WritingForm />
      </DialogContent>
    </Dialog>
  );
};
