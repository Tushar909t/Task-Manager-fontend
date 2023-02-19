import React, { useEffect, useRef } from "react";
import { GetProfileDetails } from "../../APIRequest/ApiRequest";
import { useSelector } from "react-redux";
import { getBase64 } from "../../helper/FormHelper";
import { DeleteUser } from "../../helper/DeleteAlert";
import { UserProfileUpdate } from "../../APIRequest/ApiRequest";
import { sessionRemove, getUserDetails } from "../../helper/SessionHelper";
import {
  IsEmpty,
  IsEmail,
  IsMobile,
  ErrorToast,
} from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  let navigate = useNavigate();
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef,
    ImageRef,
    ImgViewRef = useRef();
  useEffect(() => {
    GetProfileDetails();
  }, []);
  const previewImage = () => {
    let ImgFile = ImageRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      ImgViewRef.src = base64Img;
    });
  };
  const ProfileUpdate = () => {
    let Email = emailRef.value;
    let FirstName = firstNameRef.value;
    let LastName = lastNameRef.value;
    let Mobile = mobileRef.value;
    let Password = passwordRef.value;
    let photo = ImgViewRef.src;
    if (IsEmail(Email)) {
      ErrorToast("Email Adress Requried");
    } else if (IsEmpty(FirstName)) {
      ErrorToast("First Name Requried");
    } else if (IsEmpty(LastName)) {
      ErrorToast("Last Name Requried");
    } else if (!IsMobile(Mobile)) {
      ErrorToast("Valid Number Requried");
    } else if (IsEmpty(Password)) {
      ErrorToast("Password Requried");
    } else {
      UserProfileUpdate(
        Email,
        FirstName,
        LastName,
        Mobile,
        Password,
        photo
      ).then((result) => {
        if (result === true) {
          navigate("/");
        }
      });
    }
  };
  const onDeleteUser = (id) => {
    DeleteUser(id).then((result) => {
      if (result === true) {
        sessionRemove();
      } else {
        console.log("Erorr User Delete");
      }
    });
  };
  const ProfileData = useSelector((state) => state.profile.value);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <img
                  ref={(input) => (ImgViewRef = input)}
                  className="icon-nav-img icon-view"
                  src={ProfileData.photo}
                  alt=""
                />
                <h4 className=" mt-1">
                  {getUserDetails().firstName.toString()}
                </h4>
                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Profile Picture</label>
                    <input
                      key={Date.now()}
                      onChange={previewImage}
                      ref={(input) => (ImageRef = input)}
                      type="file"
                      className=" form-control animated fadeInDown"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      defaultValue={ProfileData["email"]}
                      readOnly={true}
                      ref={(input) => (emailRef = input)}
                      type="email"
                      className=" form-control animated fadeInDown"
                      placeholder="User Email"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>First Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["firstName"]}
                      ref={(input) => (firstNameRef = input)}
                      type="text"
                      className=" form-control animated fadeInDown"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Last Name</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["lastName"]}
                      ref={(input) => (lastNameRef = input)}
                      type="text"
                      className=" form-control animated fadeInDown"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["mobile"]}
                      ref={(input) => (mobileRef = input)}
                      type="text"
                      className=" form-control animated fadeInDown"
                      placeholder="number"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Password</label>
                    <input
                      key={Date.now()}
                      defaultValue={ProfileData["password"]}
                      ref={(input) => (passwordRef = input)}
                      type="password"
                      className=" form-control animated fadeInDown"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <button
                      onClick={ProfileUpdate}
                      className="btn float-end w-100 btn-primary animated fadeInDown">
                      Update
                    </button>
                    <button
                      onClick={onDeleteUser.bind(this, ProfileData._id)}
                      className="btn float-end w-100 btn-danger animated fadeInDown"
                      key={Date.now()}>
                      Delete User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
