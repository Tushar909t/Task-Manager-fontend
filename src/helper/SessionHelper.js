class SessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  setUserDetails(UserDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
  }
  getUserDetails() {
    return localStorage.getItem(JSON.parse("UserDetails"));
  }
  sessionRemove = () => {
    localStorage.clear();
    window.location.href = "/Login";
  };
}
export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  sessionRemove,
} = new SessionHelper();
