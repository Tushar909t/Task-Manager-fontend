import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Registration = lazy(() =>
  import("../components/Registration/Registration")
);

const RegistrationPages = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPages;
