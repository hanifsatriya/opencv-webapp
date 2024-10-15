import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ReactQueryDevtools } from "react-query/devtools";

import { AppProviders } from "./utils/config/provider.tsx";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <App />
    </AppProviders>
  </StrictMode>
);
