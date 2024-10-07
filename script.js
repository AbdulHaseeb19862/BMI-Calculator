const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");
  const 
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
