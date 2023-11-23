function calculateAge() {
  let input = document.querySelector("input").value;
  answer = input * 365.25;
  document.querySelectorAll("p")[0].innerText = answer + " days";
}
let ageBtn = document.querySelectorAll("button")[0];
ageBtn.addEventListener("click", () => calculateAge());

function dob() {
  document.querySelectorAll("p")[1].innerText =
    "You should be more aware of what personal info you give out. I know the first six digits of your ID now.";
}
let dobBtn = document.querySelectorAll("button")[1];
dobBtn.addEventListener("click", () => dob());
