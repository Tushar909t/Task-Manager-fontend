import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "./../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Canceled = lazy(() => import("../components/Canceled/Canceled"));

const CanceledPages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Canceled />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CanceledPages;
