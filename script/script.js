function bmi() {
  let height = parseFloat(document.getElementById("h").value);
  let weight = parseFloat(document.getElementById("w").value);
  let bmi = weight / (height * height);
  let userBMI = document.getElementById("bmi_index");
  userBMI.textContent = bmi.toFixed(2);

  let fmc = document.getElementById("female").value;
  let manc = document.getElementById("man").value;

  localStorage.setItem("bmi_index", bmi_index);
  localStorage.setItem("fmc", fmc);
  localStorage.setItem("manc", manc);

  localStorage.getItem("bmi_index", bmi_index);
  localStorage.getItem("fmc", fmc);
  localStorage.getItem("manc", manc);

  console.log(localStorage.getItem("bmi_index", bmi_index));
  console.log(localStorage.getItem("fmc", fmc));
  console.log(localStorage.getItem("manc", manc));
}

const form = document.getElementById("form").textContent;
let ageIn= document.getElementById("age".value);
// localStorage.setItem("bmi","result");
// console.log(localStorage.getItem("bmi"));
