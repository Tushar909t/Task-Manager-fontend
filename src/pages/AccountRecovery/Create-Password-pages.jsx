import React, { Suspense, lazy } from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";
const CreatePassword = lazy(() =>
  import("../../components/AccountRecovery/CreatePassword")
);

const CreatePasswordpages = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <CreatePassword />
    </Suspense>
  );
};

export default CreatePasswordpages;
