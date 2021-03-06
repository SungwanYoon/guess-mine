const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_IN = "loggedIn";
const LOGGED_OUT = "loggedOut";

const nickname = localStorage.getItem(NICKNAME);

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className == LOGGED_IN;
}

const handleSubmitListener = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmitListener);
}

console.log(nickname);
