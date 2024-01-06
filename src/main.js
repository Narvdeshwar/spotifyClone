document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = "Dashboard/dashboard.html";
  } else {
    window.location.href = "Login/login.html";
  }
});
