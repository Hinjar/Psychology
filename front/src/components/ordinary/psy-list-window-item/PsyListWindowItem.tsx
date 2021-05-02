import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { WritingDialog } from "../../../containers/psy-table-writing-dialog/WritingDialog";
import { SnackContext } from "../../../context/snackbar/snackbar-context";
import "./PsyListWindowItem.css";

export const PsyListWindowItem: React.FC<any> = ({
  time,
  active,
  handleClickOpen,
}) => {
  return (
    <div>
      <Button
        variant="contained"
        color={active ? "primary" : "secondary"}
        disableElevation
        className="window-button"
        onClick={handleClickOpen}
      >
        {time}
      </Button>
    </div>
  );
};
