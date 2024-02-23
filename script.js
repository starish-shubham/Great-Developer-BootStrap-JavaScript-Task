const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const modulo = document.querySelector(".modulo");
// let inp1 = Number(document.querySelector("#inp-1").value);
// console.log(addition);
// console.log(addition.innerText);
let result = document.querySelector("#result");

function getData() {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  return inp1, inp2, result;
}
addition.addEventListener("click", () => {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  let sum = inp1 + inp2;
  result.value = sum;
  console.log(sum);
});
subtraction.addEventListener("click", () => {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  let sub = inp1 - inp2;
  result.value = sub;
  console.log(sub);
});
multiplication.addEventListener("click", () => {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  let mul = inp1 * inp2;
  result.value = mul;
  console.log(mul);
});
division.addEventListener("click", () => {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  let div = inp1 / inp2;
  result.value = div;
  console.log(div);
});
modulo.addEventListener("click", () => {
  let inp1 = Number(document.querySelector("#inp-1").value);
  let inp2 = Number(document.querySelector("#inp-2").value);
  let val1 = document.querySelector("#val-1");
  let val2 = document.querySelector("#val-2");
  val1.value = inp1;
  val2.value = inp2;
  let result = document.querySelector("#result");
  let mod = inp1 % inp2;
  result.value = mod;
  console.log(mod);
});