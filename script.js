const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");
  var BMI = Number(weight / height);
  result.textContent = BMI;
});
