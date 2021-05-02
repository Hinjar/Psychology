import React from "react";
import { PsyInfo } from "../../components/simple/psy-info/PsyInfo";
import { Container } from "@material-ui/core";
import { PsyTableList } from "../../components/smart/psy-table-list/PsyTableList";
import { SnackbarContainer } from "../../containers/snackbar/Snackbar.container";
import { Pagination } from "../../components/ordinary/pagination/Pagination";
import { Footer } from "../../components/ordinary/footer/Footer";
import "./Psychologist.css";

export const Psychologist = () => {
  return (
    <>
      <Footer />
      <Container className="container">
        <SnackbarContainer>
          <PsyInfo></PsyInfo>
          <Pagination></Pagination>
          <PsyTableList></PsyTableList>
        </SnackbarContainer>
      </Container>
    </>
  );
};
