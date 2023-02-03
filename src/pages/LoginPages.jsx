import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "./../components/masterLayout/LazyLoader";
const Login = lazy(() => import("../components/Login/Login"));

const LoginPages = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </Fragment>
  );
};

export default LoginPages;
