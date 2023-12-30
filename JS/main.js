// start of region catch any value the user entered

// let inEmail = document.getElementById("signupName");
// let inPassword = document.getElementById("signupName");
let upName = document.getElementById("signupName");
let upEmail = document.getElementById("signupEmail");
let upPassword = document.getElementById("signupPassword");
// end of region

// start of region catch my signin button
// let logUp = document.getElementById("logUpBtn");
// logUp.addEventListener("click", signup);
// end of region
// start of region an empaty array to store our values
var box = [];
// end of region

function signup() {
  if (upName.value !== "" && upEmail.value !== "" && upPassword.value !== "") {
    let data = {
      pname: upName.value,
      pmail: upEmail.value,
      paas: upPassword.value,
    };
    box.push(data);
    localStorage.setItem("items", JSON.stringify(box));
    document.getElementById("errorMassage").innerHTML = `Secces`;
  } else {
    document.getElementById("errorMassage").innerHTML = `Enter Value`;
  }
}
