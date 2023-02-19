import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import {
  getToken,
  setEmail,
  setOTP,
  setToken,
  setUserDetails,
} from "../helper/SessionHelper";
import { HideLoader, ShowLoader } from "../redox/state-slice/settingSlice";
import { SetSummary } from "../redox/state-slice/summarySlice";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../redox/state-slice/taskSlice";
import { setProfile } from "../redox/state-slice/profileSlice";
import store from "../redox/store/store";

const baseURL = "http://localhost:5500/api/v1";
const AxiosHeader = { headers: { token: getToken() } };

export function NewTaskRequest(title, description) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/CreateTask";
  let postBody = { title: title, description: description, status: "New" };
  return axios
    .post(URL, postBody, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("Task Created");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something is Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
export function LoginRequest(email, password) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/Logins";
  let postBody = { email: email, password: password };
  return axios
    .post(URL, postBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);
        SuccessToast("Login Success");
        return true;
      } else {
        ErrorToast("Invalid Email or Password");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Wrong Email or Password");
      store.dispatch(HideLoader());
      return false;
    });
}

export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/Registrations";
  let postBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        if (res.data["status"] === "fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorToast("Email already Exits");
            return false;
          } else {
            ErrorToast("Something Went Wrong!");
            return false;
          }
        } else {
          SuccessToast("Registration Success!");
          return true;
        }
      } else {
        ErrorToast("Something Wrong!");
        return false;
      }
    })
    .catch((err) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
      return false;
    });
}

export function TasklistByStatus(status) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/ListTaskByStatus/" + status;
  axios
    .get(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        if (status === "New") {
          store.dispatch(SetNewTask(res.data["data"]));
        } else if (status === "Completed") {
          store.dispatch(SetCompletedTask(res.data["data"]));
        } else if (status === "Progress") {
          store.dispatch(SetProgressTask(res.data["data"]));
        } else if (status === "Canceled") {
          store.dispatch(SetCanceledTask(res.data["data"]));
        }
      } else {
        ErrorToast("Something Went Wrong");
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
    });
}

export function TaskCountRequest() {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/TaskStausCount?";
  axios
    .get(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        store.dispatch(SetSummary(res.data["data"]));
      } else {
        ErrorToast("Something Wrong");
      }
    })
    .catch((err) => {
      store.dispatch(HideLoader());
      ErrorToast("Something Went Wrong");
    });
}

export function DeleteRequest(id) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/DeleteTask/" + id;
  axios
    .delete(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("Delete SuccessFul");
        return true;
      } else {
        ErrorToast("Something Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

export function UpdateRequest(id, status) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/UpdateTask/" + id + "/" + status;
  axios
    .get(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("Update Status Success");
        return true;
      } else {
        ErrorToast("Something Wrong");
        return false;
      }
    })
    .catch(() => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

export function DeleteUserRequest(id) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/DeleteUser/" + id;
  return axios
    .delete(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("User Delete Success");
        return true;
      } else {
        ErrorToast("Error User Delete");
        return false;
      }
    })
    .catch((err) => {
      console.log("error", err);
      store.dispatch(HideLoader());
      return false;
    });
}

export function GetProfileDetails() {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/UserProfileDetails";
  return axios
    .get(URL, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        store.dispatch(setProfile(res.data["data"][0]));
      } else {
        ErrorToast("Something Wrong");
      }
    })
    .catch((err) => {
      ErrorToast("Somethig went Wrong");
      store.dispatch(HideLoader());
    });
}

export function UserProfileUpdate(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/UpdateProfiles";
  let postBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
  let UserDetalis = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    photo: photo,
  };
  return axios
    .post(URL, postBody, AxiosHeader)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("Profile Update Success");
        setUserDetails(UserDetalis);
        return true;
      } else {
        ErrorToast("Somethig Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

// Recovery Password step 1 SendOTP

export function RecoveryVerifyEmailRequest(email) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/RecoveryVerifyEmail/" + email;
  return axios
    .get(URL)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        setEmail(email);
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Somethig Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

// Recovery Password step 2 Verify OTP

export function RecoveryVerifyOTPRequest(email, OTP) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/RecoveryVerifyOTP/" + email + "/" + OTP;
  return axios
    .get(URL)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 201) {
        SuccessToast("OTP Verification Success");
        setOTP(OTP);
        return true;
      } else {
        ErrorToast(res.data["data"]);
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}

// Recovery Password step 3 Rest Password
export function ResetPasswordRequest(email, OTP, password) {
  store.dispatch(ShowLoader());
  let URL = baseURL + "/ResetPassword";
  let PostBody = { email: email, OTP: OTP, password: password };

  return axios
    .post(URL, PostBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.data["status"] === "success") {
        setOTP(OTP);
        SuccessToast("New Password Update");
        return true;
      } else {
        ErrorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((err) => {
      ErrorToast("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
}
