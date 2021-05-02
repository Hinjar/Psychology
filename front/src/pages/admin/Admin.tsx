import React from "react";
import { PsyInfo } from "../../components/simple/psy-info/PsyInfo";
import { Container } from "@material-ui/core";
import { PsyTableList } from "../../components/smart/psy-table-list/PsyTableList";
import { SnackbarContainer } from "../../containers/snackbar/Snackbar.container";
import { Pagination } from "../../components/ordinary/pagination/Pagination";
import { Footer } from "../../components/ordinary/footer/Footer";
import { PsyTableAdminList } from "../../components/smart/psy-table-admin-list/PsyTableAdminList";

export const Admin = () => {
  return (
    <>
      <Footer />
      <Container className="container">
        <SnackbarContainer>
          <PsyInfo></PsyInfo>
          <Pagination></Pagination>
          <PsyTableAdminList></PsyTableAdminList>
        </SnackbarContainer>
      </Container>
    </>
  );
};
