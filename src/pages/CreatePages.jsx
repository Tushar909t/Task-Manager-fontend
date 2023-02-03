import React, { Fragment, Suspense, lazy } from "react";
//import Create from "../components/Create/Create";
import MasterLayout from "./../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Create = lazy(() => import("../components/Create/Create"));

const CreatePages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Create />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default CreatePages;
