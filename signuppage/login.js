// validation form login
const inputUsername = document.querySelector("#LGname");
const inputPassword = document.querySelector("#LGpassword");
const inputEmail = document.querySelector("#LGemail");
const btnLogin = document.querySelector("#LGbutton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsername.value === "" ||
    inputPassword.value === "" ||
    inputEmail.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value &&
      user.email === inputEmail.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "loading1.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
