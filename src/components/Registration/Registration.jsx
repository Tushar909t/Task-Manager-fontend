import React, { Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../../APIRequest/ApiRequest";
import {
  IsEmail,
  IsEmpty,
  IsMobile,
  ErrorToast,
} from "../../helper/FormHelper";

const Registration = () => {
  let navigate = useNavigate();

  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    let Email = emailRef.value;
    let FirstName = firstNameRef.value;
    let LastName = lastNameRef.value;
    let Mobile = mobileRef.value;
    let password = passwordRef.value;

    if (IsEmail(Email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(FirstName)) {
      ErrorToast("First Name Required");
    } else if (IsEmpty(LastName)) {
      ErrorToast("Last Name Required");
    } else if (!IsMobile(Mobile)) {
      ErrorToast("Vaild Mobile Number Required");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
    } else {
      RegistrationRequest(
        Email,
        FirstName,
        LastName,
        Mobile,
        password,
        ""
      ).then((result) => {
        if (result === true) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <Fragment>
      <div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h5>Sing Up</h5>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className=" form-control animated fadeInDown"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (firstNameRef = input)}
                  placeholder="First Name"
                  className=" form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <input
                  ref={(input) => (lastNameRef = input)}
                  placeholder="Last Name"
                  className=" form-control animated fadeInLeft"
                  type="text"
                />
                <br />
                <input
                  ref={(input) => (mobileRef = input)}
                  placeholder="Mobile"
                  className=" form-control animated fadeIn"
                  type="mobile"
                />
                <br />
                <input
                  ref={(input) => (passwordRef = input)}
                  placeholder="User Password"
                  className=" form-control animated fadeInLeft"
                  type="password"
                />
                <br />
                <button
                  onClick={onRegistration}
                  className="btn float-end w-100 btn-primary animated fadeInDown">
                  Next
                </button>
                <div className="text-center w-100">
                  <Link className="text-center" to="/Login">
                    Sign In
                  </Link>
                  <br />
                  <Link className="text-center" to="/">
                    Forgrt Passsword
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Registration;
