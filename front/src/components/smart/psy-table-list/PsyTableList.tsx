import React from "react";
import { PsyTableWindowList } from "../psy-table-window-list/PsyTableWindowList";
import "./PsyTableList.css";
import { Grid, Paper } from "@material-ui/core";
import { PsyTableWindowListContainer } from "../../../containers/psy-table-window-list/PsyTableWindowList.container";

export const PsyTableList = () => {
  return (
    <div>
      {[0, 1, 2].map((e, index) => {
        return (
          <Paper elevation={2} square={true} className="table-list-wrapper">
            <span className="table-list-time">
              <b>{e}:</b>
            </span>
            <PsyTableWindowListContainer />
          </Paper>
        );
      })}
    </div>
  );
};
