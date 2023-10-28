let emailInput = document.getElementById("#SiEmailInput");
let PwInput = document.getElementById("#SiPasswordInput");
let inputs = document.querySelectorAll(".inputTest");

let buttonSubmit = document.getElementById("#SiSubmit");

console.log(emailInput);
console.log(inputs);

function validation() {
  if (emailInput != "cevafrumix@gmail.com" || PwInput != "anamaria123") {
    alert("Email or password incorrect");
  }
}

buttonSubmit.addEventListener("click", () => {
  window.alert("ok");
});

inputs.forEach((input, idx), () => {
  input.addEventListener("onclick", () => {
    console.log(input);
    validation();
  });
});
