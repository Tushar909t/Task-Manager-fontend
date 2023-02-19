import React, { Fragment, Suspense, lazy } from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Profile = lazy(() => import("../components/Profile/Profile"));

const ProfilePages = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ProfilePages;
