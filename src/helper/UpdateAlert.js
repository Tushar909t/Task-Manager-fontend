import Swal from "sweetalert2";
import { UpdateRequest } from "../APIRequest/ApiRequest";

export function UpdateTodo(id, status) {
  return Swal.fire({
    title: "Update Status",
    input: "select",
    inputOptions: {
      New: "New",
      Completed: "Completed",
      Progress: "Progress",
      Canceled: "Canceled",
    },
    inputValue: status,
  }).then((result) => {
    return UpdateRequest(id, result.value).then((res) => {
      return res;
    });
  });
}
