import React, { Suspense, lazy } from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";
const VeriFyOTP = lazy(() =>
  import("../../components/AccountRecovery/VerifyOTP")
);

const VerifyOTPpages = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <VeriFyOTP />
    </Suspense>
  );
};

export default VerifyOTPpages;
