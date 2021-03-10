let interact = "";

document.addEventListener("DOMContentLoaded", init);
async function init() {
  let response = await fetch("backpack-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  startPersonalize();
}

function startPersonalize() {
    
}