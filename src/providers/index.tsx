import React, { memo } from "react";

import { BrowserRouter } from "react-router-dom";
import GeneralLayout from "./GeneralLayout";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "../apolloClient";

// import { ThemeProvider as ThemeProviderV5, Theme } from "@mui/material/styles";

// declare module '@mui/styles/defaultTheme' {
// 	// eslint-disable-next-line @typescript-eslint/no-empty-interface
// 	interface DefaultTheme extends Theme {}
// }

interface IProviders {
  children: React.ReactNode;
}

const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <GeneralLayout>{children}</GeneralLayout>
      </MockedProvider>
    </BrowserRouter>
  );
};

export default memo(Providers);
