import React, { useEffect, useState } from "react";
import { PsyInfo } from "../../components/simple/psy-info/PsyInfo";
import { Container } from "@material-ui/core";
import { PsyTableList } from "../../components/smart/psy-table-list/PsyTableList";
import { SnackbarContainer } from "../../containers/snackbar/Snackbar.container";
import { Pagination } from "../../components/ordinary/pagination/Pagination";
import { Footer } from "../../components/ordinary/footer/Footer";
import "./Psychologist.css";
import moment from "moment";

export const Psychologist = () => {
  const [date, setDate] = useState(moment().format("LL"));

  console.log(date);
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      <Footer />
      <Container className="container">
        <SnackbarContainer>
          <PsyInfo />
          <Pagination setDate={setDate} />
          <PsyTableList items={items} />
        </SnackbarContainer>
      </Container>
    </>
  );
};
