import React from "react";
import "./PsyTableList.css";
import { Paper } from "@material-ui/core";
import { PsyTableWindowListContainer } from "../../../containers/psy-table-window-list/PsyTableWindowList.container";

export const PsyTableList: React.FC<any> = ({ items }) => {
  return (
    <div>
      {items.map((e: any, index: any) => {
        return (
          <Paper
            key={index}
            elevation={2}
            square={true}
            className="table-list-wrapper"
          >
            <span className="table-list-time">
              <b>{e}:</b>
            </span>
            <PsyTableWindowListContainer items={e} />
          </Paper>
        );
      })}
    </div>
  );
};
