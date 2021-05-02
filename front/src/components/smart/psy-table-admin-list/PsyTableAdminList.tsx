import React from "react";
import "../psy-table-list/PsyTableList.css";
import { Button, IconButton, Paper, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { PsyTableWindowListAdmin } from "../psy-table-window-list-admin/PsyTableWindowListAdmin";
import { WindowAdd } from "../../ordinary/window-add/WindowAdd";

export const PsyTableAdminList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {[0, 1, 2].map((e, index) => {
        return (
          <Paper elevation={2} square={true} className="table-list-wrapper">
            <span className="table-list-time">
              <b>{e}:</b>
            </span>
            <PsyTableWindowListAdmin />
            <Tooltip title="Удалить">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Paper>
        );
      })}
      <Button
        onClick={handleClickOpen}
        className="add"
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Добавить
      </Button>
      <WindowAdd open={open} handleClose={handleClose} />
    </div>
  );
};
