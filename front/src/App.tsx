import React from "react";
import { PsyRouters } from "./routes/psy-routing/PsyRouters";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PsyRouters />
    </BrowserRouter>
  );
}

export default App;
