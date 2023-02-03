import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiFillDelete, AiOutlineCalendar, AiOutlineEdit } from "react-icons/ai";
import { TasklistByStatus } from "../../APIRequest/ApiRequest";
import { useSelector } from "react-redux";
import { DeleteToDo } from "../../helper/DeleteAlert";
const Canceled = () => {
  useEffect(() => {
    TasklistByStatus("Canceled");
  }, []);
  const canceledAll = useSelector((state) => state.task.canceledAll);
  const DeleteItem = (id) => {
    DeleteToDo(id);
    TasklistByStatus("New");
  };
  return (
    <Container fluid={true} className="content-body">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-6 col-lg-8 px-3">
          <h5>Task Canceled</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-4 float-end px-2">
          <div className="row">
            <div className="col-8">
              <input className=" form-control w-100" />
            </div>
            <div className="col-4">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0">
        {canceledAll.map((item, i) => (
          <div
            key={i.toString()}
            className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
            <div className="card h-100">
              <div className="card-body">
                <h6 className=" animated fadeInUp">{item.title}</h6>
                <p className="animated fadeInUp">{item.description}</p>
                <p className="m-0 animated fadeInUp">
                  <AiOutlineCalendar />
                  {item.createDate}
                  <a className="icon-nav text-primary mx-1">
                    <AiOutlineEdit />
                  </a>
                  <a
                    onClick={DeleteItem.bind(this, item._id)}
                    className="icon-nav text-danger mx-1">
                    <AiFillDelete />
                  </a>
                  <a className="badge float-end bg-danger">{item.status}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Canceled;
