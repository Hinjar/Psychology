import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import "./Pagination.css";

export const Pagination = () => {
  return (
    <Paper className="pagination-paper">
      <Grid
        className="grid"
        direction="row"
        justify="space-between"
        alignItems="center"
        container
        spacing={1}
      >
        <Button variant="outlined">{"<- 21 марта"}</Button>
        <span>{"22 марта"}</span>
        <Button variant="outlined">{"23 марта ->"}</Button>
      </Grid>
    </Paper>
  );
};
