function checkWeather() {
  //gets function from button
  const myTemp = document.querySelector("#myTemp"); //gets value from input
  console.log(myTemp.value);

  let temp = myTemp.value; //check values or let the vlue inputted be checked
  const body = document.querySelector("body"); //gets background colour
  const outer = document.querySelector(".outer"); //classes uses .

  if (temp < 10) {
    console.log("it is cold");
    body.style.backgroundColor = "blue"; //targets the body
    outer.style.backgroundColor = "white"; //targets the outer class
  } else if (temp >= 10 && temp < 20) {
    console.log("still cold");
    body.style.backgroundColor = "cyan";
  } else if (temp >= 20 && temp < 30) {
    console.log("warm");
    body.style.backgroundColor = "orange";
  }
}
