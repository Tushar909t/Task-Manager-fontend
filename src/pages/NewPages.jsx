import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const New = lazy(() => import("../components/New/New"));

const NewPages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <New />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default NewPages;
