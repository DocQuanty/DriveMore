function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

// =======form======
let form = document.querySelector("#form-registration");
let validateBtn = form.querySelector(".button-form");

let name = form.querySelector("#name");
let email = form.querySelector("#email");
let department = form.querySelector("#department");
let time = form.querySelector("#time");

let fields = form.querySelectorAll(".field");

// ===========
let generateError = (text) => {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerText = text;
  return error;
};
let removeValidation = () => {
  let errors = form.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
    console.log("1st", i);
  }
};
let checkFieldPresents = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError("This place should not be empty!");
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeValidation();
  checkFieldPresents();
});
//   // =====
