import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import "./Pagination.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

export const Pagination: React.FC<any> = ({ setDate }) => {
  const { date }: any = useParams();

  date && setDate(date);

  moment.locale("ru");

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
        <Link className="link" to={`/${moment(date).add(-1, "day")}`}>
          <Button variant="outlined">
            {moment(date).add(-1, "day").format("LL")}
          </Button>
        </Link>
        <span>{moment(date).format("LL")}</span>
        <Link className="link" to={`/${moment(date).add(1, "day")}`}>
          <Button variant="outlined">
            {moment(date).add(1, "day").format("LL")}
          </Button>
        </Link>
      </Grid>
    </Paper>
  );
};
