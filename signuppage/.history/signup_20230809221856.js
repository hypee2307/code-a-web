// validation form register and register user local storage
const inputUsernameRegister = document.querySelector("#name");
const inputPasswordRegister = document.querySelector("#password");
const inputEmailRegister = document.querySelector("#email");
const btnRegister = document.querySelector("#button");
// const user = JSON.parse(localStorage.getItem(inputUsername.value));
// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputEmailRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  }

  // else if (user.username === inputUsernameRegister.value) {
  //   alert("Username đã được đăng kí");
  // }
  else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      email: inputEmailRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
