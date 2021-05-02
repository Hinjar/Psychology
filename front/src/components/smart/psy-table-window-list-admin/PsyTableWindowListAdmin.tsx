import React from "react";
import { Button, Grid } from "@material-ui/core";
import { PsyListWindowItem } from "../../ordinary/psy-list-window-item/PsyListWindowItem";
import "./PsyTableWindowListAdmin.css";
import { WritingDialog } from "../../../containers/psy-table-writing-dialog/WritingDialog";
import { WindowInfo } from "../../ordinary/window-info/WindowInfo";
import { WindowAdd } from "../../ordinary/window-add/WindowAdd";

export const PsyTableWindowListAdmin: React.FC<any> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [addOpen, addSetOpen] = React.useState(false);

  const handleClickOpen = (add: boolean) => {
    add ? addSetOpen(true) : setOpen(true);
  };

  const handleClose = (add: boolean) => {
    add ? addSetOpen(false) : setOpen(false);
  };
  return (
    <>
      <Grid item xs={12}>
        <Grid
          direction="row"
          justify="flex-start"
          alignItems="center"
          container
          spacing={1}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <PsyListWindowItem
                handleClickOpen={() => handleClickOpen(false)}
                time={"14:20"}
                active={false}
              />
            </Grid>
          ))}
          <Button onClick={() => handleClickOpen(true)} color={"primary"}>
            +
          </Button>
        </Grid>
      </Grid>
      <WindowAdd open={addOpen} handleClose={() => handleClose(true)} />
      <WindowInfo open={open} handleClose={() => handleClose(false)} />
    </>
  );
};
