function bmi() {
  let height = parseFloat(document.getElementById("h").value);
  let weight = parseFloat(document.getElementById("w").value);
  let bmi = weight / (height * height);

  let userBMI = document.getElementById("bmi_index");
  userBMI.textContent = bmi.toFixed(2);

  const resultTotal = function totalResult() {
    if (bmi < 18.5) {
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p>You're underweigth, be careful :S </p>`;


    } else if (bmi>=18.5&&bmi<=24.9){
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p>You're Overweight, get a better diet</p>`;


    } else if (bmi>=25.0&&bmi<=29.9){
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p>Now you have Obesity R1, do some excersise</p>`;


    } else if (bmi>=30.0&&bmi<=34.9){
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p>You're have an Obesity R2, please take care of yourself and eat heathy</p>`;


    } else if (bmi>=35.0&&bmi<=39.9){
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p></p>`;


    } else if (bmi>40){
      let resultado = document.getElementById("myfirstchart")
      resultado.innerHTML = `
      <p>You're on critical risk your life. Ask for help inmediatly <br>Obesity R3</p>`;
    }
  };
  resultTotal();
}



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

const form = document.getElementById("form").textContent;
let ageIn = document.getElementById("age".value);
// localStorage.setItem("bmi","result");
// console.log(localStorage.getItem("bmi"));
