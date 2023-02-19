import React, { Suspense, lazy } from "react";
import LazyLoader from "../../components/masterLayout/LazyLoader";
const SendOTP = lazy(() => import("../../components/AccountRecovery/SendOTP"));

const SendOtpPages = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <SendOTP />
    </Suspense>
  );
};

export default SendOtpPages;
