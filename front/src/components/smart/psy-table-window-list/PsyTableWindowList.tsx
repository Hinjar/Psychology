import React from "react";
import { Button, Grid } from "@material-ui/core";
import { PsyListWindowItem } from "../../ordinary/psy-list-window-item/PsyListWindowItem";
import "./PsyTableWindowList.css";
import { WritingDialog } from "../../../containers/psy-table-writing-dialog/WritingDialog";

export const PsyTableWindowList: React.FC<any> = ({
  open,
  handleCLose,
  handleClickOpen,
  children,
}) => {
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
          {children}
        </Grid>
      </Grid>
      <WritingDialog open={open} handleClose={handleCLose} />
    </>
  );
};
