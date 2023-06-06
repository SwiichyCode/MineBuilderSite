import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
};
