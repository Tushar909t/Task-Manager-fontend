import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "./../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Progress = lazy(() => import("../components/Progress/Progress"));
const ProgressPages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Progress />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProgressPages;
