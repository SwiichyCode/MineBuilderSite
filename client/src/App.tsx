import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyles";
import AnimalExample from "@/components/AnimalExemple";
import AnimalExampleWithApiStates from "@/components/AnimalExempleWithApiStates";
import AnimalExampleWithUseApiStatus from "./components/AnimalExampleWithUseApiStatus";
import AnimalExampleWithUseApi from "./components/AnimalExempleWithUseApi";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {/* <AnimalExample /> */}
        {/* <AnimalExampleWithApiStates /> */}
        {/* <AnimalExampleWithUseApiStatus /> */}
        <AnimalExampleWithUseApi />
      </Fragment>
    </ThemeProvider>
  );
};
