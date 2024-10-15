import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PublicRoute } from "@/components/templates";

import { ROUTES } from "@/utils/constant";
import { publicPage } from "@/routes/data/public";

const renderLoading = () => <></>;

function AppRoutes() {
  return (
    <Routes>
      {/* --------------------- Public ---------------------   */}
      <Route path={ROUTES.BASE_URL} element={<PublicRoute />}>
        {publicPage.map((page) => {
          return (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Suspense fallback={renderLoading()}>{page.element}</Suspense>
              }
            />
          );
        })}
      </Route>
      {/* ---------------------------- Protected Routes ---------------------------- */}
    </Routes>
  );
}

export default AppRoutes;
