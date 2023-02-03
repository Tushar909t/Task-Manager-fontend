import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const NotFound = lazy(() => import("../components/NotFound/NotFound"));
const Pages404 = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <NotFound />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Pages404;
