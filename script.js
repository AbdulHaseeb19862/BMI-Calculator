const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
calculateBtn.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  if (!height || !weight) {
    return alert("Both Fields are Requirds");
  }

  const result = document.getElementById("result");
  const outputContainer = document.getElementById("outputContainer");
  outputContainer.style.display = "block";
  outputContainer.style.display = "flex";
  outputContainer.style.justifyContent = "center";
  outputContainer.style.alignItems = "center";

  var BMI = (weight / (height * height)).toFixed(2);
  if (BMI < 18.5) {
    result.textContent = `Your BMI value is : ${BMI} and your BMI result is Underweight`;
  } else if (BMI >= 18.5 && BMI < 24.9) {
    result.textContent = `Your BMI value is : ${BMI} and your BMI result is Normal weight`;
  } else if (BMI >= 25 && BMI < 29.9) {
    result.textContent = `Your BMI value is : ${BMI} and your BMI result is Overweight`;
  } else if (BMI >= 30) {
    result.textContent = `Your BMI value is : ${BMI} and your BMI result is Obesity`;
  }
});

resetBtn.addEventListener("click", function () {
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const result = document.getElementById("result");
  const outputContainer = document.getElementById("outputContainer");

  height.value = "";
  weight.value = "";
  result.textContent = "";
  outputContainer.style.display = "none";
});
