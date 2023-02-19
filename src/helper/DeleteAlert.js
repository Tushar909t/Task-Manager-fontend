import Swal from "sweetalert2";
import { DeleteRequest, DeleteUserRequest } from "../APIRequest/ApiRequest";

export function DeleteUser(id) {
  return Swal.fire({
    title: "Are you sure?",
    text: "Your Account Permanently Delete!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })
    .then((result) => {
      if (result.value) {
        return DeleteUserRequest(id);
      } else {
        console.log("Erorr");
      }
    })
    .catch((err) => {
      console.log("Error Alert", err);
    });
}
export function DeleteToDo(id) {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })
    .then((result) => {
      if (result.value) {
        return DeleteRequest(id);
      } else {
        console.log("Erorr");
      }
    })
    .catch((err) => {
      console.log("Error Alert", err);
    });
}
