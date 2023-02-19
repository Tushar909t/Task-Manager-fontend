import React, { Fragment, useEffect } from "react";
import { TaskCountRequest } from "../../APIRequest/ApiRequest";

import { useSelector } from "react-redux";
const Dashboard = () => {
  useEffect(() => {
    TaskCountRequest();
  }, []);
  const summaryCount = useSelector((state) => state.summary.value);
  return (
    <Fragment>
      <div className="container">
        <div className=" row">
          {summaryCount.map((item, i) => (
            <div
              key={i.toString()}
              className="col-12 col-lg-3 col-sm-6 col-md-3 p-2">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className=" animated fadeInDown">Total{item._id}</h5>
                  <h6 className=" text-secondary animated fadeInDown">
                    {item.sum}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
