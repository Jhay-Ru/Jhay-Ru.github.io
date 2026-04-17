function checkWeather() {
  //gets function from button
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);

  let temp = myTemp.value; //check values
  const body = document.querySelector("body"); //gets background colour

  if (temp < 10) {
    console.log("it is cold");
    body.style.backgroundColor = "blue";
  } else if (temp >= 10 && temp <= 20) {
    console.log("still cold");
    body.style.backgroundColor = "cyan";
  }
}
