import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const ForgtPass = lazy(() => import("../components/ForgetPass/ForgetPass"));

const ForgetPassPages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ForgtPass />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ForgetPassPages;
