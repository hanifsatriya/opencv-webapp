import React, { lazy } from "react";

import { IRoutePage } from "@/routes/index.model";

import { ROUTES } from "@/utils/constant";

import { Landing } from "@/pages";

const onRenderImportPage = (page: () => React.JSX.Element) => {
  return lazy(() => import("@/pages").then(() => ({ default: page })));
};

/* ----------------------------- Registered Page ---------------------------- */
const LandingPage = onRenderImportPage(Landing);
/* --------------------------------- Routes --------------------------------- */
const publicPage: IRoutePage[] = [
  {
    path: ROUTES.BASE_URL,
    element: <LandingPage />,
  },
];

export { publicPage };
