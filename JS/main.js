// start of region catch any value the user entered

let inEmail = document.getElementById("signupName");
let inPassword = document.getElementById("signupName");
let upName = document.getElementById("signupName");
let upEmail = document.getElementById("signupEmail");
let upPassword = document.getElementById("signupPassword");
// end of region

// start of region an empaty array to store our values
var box = [];
// end of region

function signup() {
  if (upName.value !== "" && upEmail.value !== "" && upPassword.value !== "") {
    let data = {
      pname: upName.value,
      pmail: upEmail.value,
      pass: upPassword.value,
    };
    box.push(data);
    localStorage.setItem("items", JSON.stringify(box));
    document.getElementById("errorMassage").innerHTML = `Secces`;
  } else {
    document.getElementById("errorMassage").innerHTML = `Enter Value`;
  }
}

var cartona = JSON.parse(localStorage.getItem("items"));
var i = 0;

function login() {
  for (i = 0; i < cartona.length; i++) {
    if (
      cartona &&
      cartona[i].pmail === inEmail.value &&
      cartona[i].pass === inPassword.value
    ) {
      localStorage.setItem("name", JSON.stringify(cartona[i].pname));
      window.location.href = "./welcome.html?";
      console.log(cartona[i].pname);
      return;
    } else {
      document.getElementById("incorrect").innerHTML = `No Acc`;
    }
  }
}

function welcom() {
  var welc = document.getElementById("welcome");
  welc.innerHTML = `welcome ${JSON.parse(localStorage.getItem("name"))} `;
}
// start of region catch my signin button
// let logUp = document.getElementById("logUpBtn");
// logUp.addEventListener("click", signup);
// end of region
