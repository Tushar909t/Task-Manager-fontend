import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiFillDelete, AiOutlineCalendar, AiOutlineEdit } from "react-icons/ai";
import { TasklistByStatus } from "../../APIRequest/ApiRequest";
import { useSelector } from "react-redux";
import { DeleteToDo } from "./../../helper/DeleteAlert";
import { UpdateTodo } from "../../helper/UpdateAlert";
const New = () => {
  useEffect(() => {
    TasklistByStatus("New");
  }, []);
  const newAll = useSelector((state) => state.task.newAll);

  const DeleteItem = (id) => {
    DeleteToDo(id).then((result) => {
      if (!result === true) {
        TasklistByStatus("New");
      } else {
        console.log("Error Api Call");
      }
    });
  };

  const UpdateUser = (id, status) => {
    UpdateTodo(id, status).then((res) => {
      if (!res === true) {
        TasklistByStatus("New");
      } else {
        console.log("error api call");
      }
    });
  };
  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task Progress</h5>
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
          {newAll.map((item, i) => (
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
                    <a
                      href={() => false}
                      onClick={UpdateUser.bind(this, item._id, item.status)}
                      className="icon-nav text-primary mx-1">
                      <AiOutlineEdit />
                    </a>
                    <a
                      href={() => false}
                      onClick={DeleteItem.bind(this, item._id)}
                      className="icon-nav text-danger mx-1">
                      <AiFillDelete />
                    </a>
                    <a href={() => false} className="badge float-end bg-info">
                      {item.status}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default New;
