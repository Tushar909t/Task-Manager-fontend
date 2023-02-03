import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { NewTaskRequest } from "../../APIRequest/ApiRequest";
import { ErrorToast, SuccessToast, IsEmpty } from "../../helper/FormHelper";

const Create = () => {
  let title,
    description = useRef();

  const CreatTask = () => {
    let Title = title.value;
    let Des = description.value;
    if (IsEmpty(Title)) {
      ErrorToast("Title Requried");
      return false;
    } else if (IsEmpty(Des)) {
      ErrorToast("Description Requried");
      return false;
    } else {
      NewTaskRequest(Title, Des).then((result) => {
        if (result === true) {
          window.location.href = "/All";
          SuccessToast("Task Created");
          return true;
        }
      });
    }
  };
  return (
    <Container fluid={true} className="content-body">
      <Row className="d-flex justify-content-center">
        <div className="col-12 col-lg-8  col-sm-12 col-md-8 p-2">
          <div className="card">
            <div className="card-body">
              <h4>Create New</h4>
              <br />
              <input
                ref={(input) => (title = input)}
                placeholder="Task Name"
                type="text"
                className=" form-control animated fadeInRight"
              />
              <br />
              <textarea
                ref={(input) => (description = input)}
                rows={5}
                placeholder="Task Description"
                className="form-control animated fadeInDown"
                type="text"></textarea>
              <br />
              <button onClick={CreatTask} className="btn btn-primary float-end">
                Create
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Create;
