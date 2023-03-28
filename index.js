const buttons = document.getElementsByTagName("button");
const delButton = document.getElementById("del-btn");
const resetButton = document.getElementById("reset-btn");
const equalButton = document.getElementById("equal-btn");

const theme1btn = document.getElementById("theme1");
const theme2btn = document.getElementById("theme2");
const theme3btn = document.getElementById("theme3");
const mainContainer = document.getElementById("main-container");
const screenContainer = document.getElementById("screen-container");
const buttonsContainer = document.getElementById("buttons-container");
const body = document.querySelector("body");
const btn = document.querySelectorAll("button");
const toggleContainer = document.getElementById("toggle-container");
const radioButton = document.querySelectorAll('input[type="radio"]');

function theme1() {
  if (theme1btn.checked) {
    mainContainer.style.backgroundColor = "#3a4764";
    screenContainer.style.backgroundColor = "#182034";
    buttonsContainer.style.backgroundColor = "#232c43";
    body.style.color = "#ffffff";
    for (let button of btn) {
      button.style.color = "#444b5a";
      button.style.backgroundColor = "#eae3dc";
      button.style.boxShadow = "0px 4px 0px 0px #b4a597";
    }
    delButton.style.color = "#fff";
    resetButton.style.color = "#fff";
    equalButton.style.color = "#fff";
    equalButton.style.backgroundColor = "#d03f2f";
    resetButton.style.backgroundColor = "#637097";
    delButton.style.backgroundColor = "#637097";
    delButton.style.boxShadow = "0px 4px 0px 0px #404e72";
    resetButton.style.boxShadow = "0px 4px 0px 0px #404e72";
    equalButton.style.boxShadow = "0px 4px 0px 0px #93261a";
    toggleContainer.style.backgroundColor = "#232c43";
    for (let radio of radioButton) {
      radio.style.boxShadow = "inset 1em 1em #d03f2f";
      console.log(radioButton);
    }
  }
}

function theme2() {
  if (theme2btn.checked) {
    mainContainer.style.backgroundColor = "#e6e6e6";
    screenContainer.style.backgroundColor = "#ededed";
    buttonsContainer.style.backgroundColor = "#d1cccc";
    body.style.color = "#35352c";
    for (let button of btn) {
      button.style.color = "#35352c";
      button.style.backgroundColor = "#e5e4e1";
      button.style.boxShadow = "0px 4px 0px 0px #b4a597";
    }
    delButton.style.color = "#fff";
    resetButton.style.color = "#fff";
    equalButton.style.color = "#fff";
    equalButton.style.backgroundColor = "#ca5502";
    resetButton.style.backgroundColor = "#377f86";
    delButton.style.backgroundColor = "#377f86";
    delButton.style.boxShadow = "0px 4px 0px 0px #1b5f65";
    resetButton.style.boxShadow = "0px 4px 0px 0px #1b5f65";
    equalButton.style.boxShadow = "0px 4px 0px 0px #893901";
    toggleContainer.style.backgroundColor = "#d1cccc";
    for (let radio of radioButton) {
      radio.style.boxShadow = "inset 1em 1em #ca5502";
      console.log(radioButton);
    }
  }
}

function theme3() {
  if (theme3btn.checked) {
    mainContainer.style.backgroundColor = "#160628";
    screenContainer.style.backgroundColor = "#1d0934";
    buttonsContainer.style.backgroundColor = "#1d0934";
    body.style.color = "#ffe53d";
    for (let button of btn) {
      button.style.color = "#ffe53d";
      button.style.backgroundColor = "#341c4f";
      button.style.boxShadow = "0px 4px 0px 0px #871c9c";
    }
    delButton.style.color = "#fff";
    resetButton.style.color = "#fff";
    equalButton.style.color = "#1b2428";
    equalButton.style.backgroundColor = "#00e0d1";
    resetButton.style.backgroundColor = "#58077d";
    delButton.style.backgroundColor = "#58077d";
    delButton.style.boxShadow = "0px 4px 0px 0px #bc15f4";
    resetButton.style.boxShadow = "0px 4px 0px 0px #bc15f4";
    equalButton.style.boxShadow = "0px 4px 0px 0px #6cf9f2";
    toggleContainer.style.backgroundColor = "#1d0934";
    for (let radio of radioButton) {
      radio.style.boxShadow = "inset 1em 1em #00e0d1";
      console.log(radioButton);
    }
  }
}

theme1btn.addEventListener("click", theme1);
theme2btn.addEventListener("click", theme2);
theme3btn.addEventListener("click", theme3);

let contentScreen = "";

function showScreen(event) {
  let element = event.currentTarget.value;
  contentScreen = document.getElementById("screen-content").innerHTML;
  if (element !== "DEL" && element !== "RESET" && element !== "=") {
    contentScreen += element;
    document.getElementById("screen-content").innerHTML = contentScreen;
  }
}
function deleteLast() {
  let newContentScreenn = contentScreen.substring(0, contentScreen.length - 1);
  document.getElementById("screen-content").innerHTML = newContentScreenn;
}

function reset() {
  document.getElementById("screen-content").innerHTML = "";
}

function result() {
  let finalResult = eval(contentScreen);
  document.getElementById("screen-content").innerHTML = finalResult;
}

for (const button of buttons) {
  button.addEventListener("click", showScreen);
}
delButton.addEventListener("click", deleteLast);
resetButton.addEventListener("click", reset);
equalButton.addEventListener("click", result);
