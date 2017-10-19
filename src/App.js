// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import VoucherForm from "./components/VoucherForm";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <VoucherForm />
    </Container>
  </ThemeProvider>
);

export default App;
