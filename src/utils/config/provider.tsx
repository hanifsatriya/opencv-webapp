import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { Theme } from "./theme";
import { store } from "./store";

const queryClient = new QueryClient();
type AppProviderComponent = [React.ElementType, any];

export const BuildProviderTree = (components: AppProviderComponent[]) => {
  return components.reduceRight(
    (Accumulated, [Provider, props]) =>
      ({ children }: { children: ReactNode }) =>
        (
          <Provider {...props}>
            <Accumulated>{children}</Accumulated>
          </Provider>
        ),
    ({ children }: { children: ReactNode }) => <>{children}</>
  );
};

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const providers: AppProviderComponent[] = [
    [Provider, { store }],
    [BrowserRouter, {}],
    [ThemeProvider, { theme: Theme }],
    [LocalizationProvider, { dateAdapter: AdapterDayjs }],
    [QueryClientProvider, { client: queryClient }],
    [SnackbarProvider, {}],
  ];

  const ProviderTree = BuildProviderTree(providers);
  return <ProviderTree>{children}</ProviderTree>;
};
