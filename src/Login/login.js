const CLIENT_ID = "96edb16bebb64a8e878c8714cb0c956a";
const SCOPES =
  "user-top-read user-follow-read playlist-read-private user-library-read";
const REDIRECT_URI = "http://localhost:3000/Login/login.html";
const APP_URL = "http://localhost:3000";
const ACCESS_TOKEN = "accessToken";

const authoriseUser = () => {
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&show_dialog=true`;
  window.open(url, "login", "width=800,height=600");
};

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("#loginToSpotify");
  loginButton.addEventListener("click", authoriseUser);
});

window.addEventListener("load", () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    window.location.href = `${APP_URL}/dashboard/dashboard.html`;
  }
  if (window.opener && !window.opener.closed()) {
    window.focus();
    if (window.location.href.includes("error")) {
      window.close();
    }
    console.log(window.location.hash);
  }
});
