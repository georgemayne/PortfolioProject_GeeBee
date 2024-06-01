const RegisterButton = document.getElementById("Register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

RegisterButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
