// //your JS code here. If required.
// let div = document.createElement("div");
// div.id = "browser-info";

// let body = getElementsByTagName("body")[0];
// body.append(div);

// let browserName = navigator.appName;
// let text = "You are using " + browserName + "version " + navigator.appVersion;
// function textContent() {
// 	div.innerHTML = text;
// }

// body.onload = textContent;

let div = document.createElement("div");
div.id = "browser-info";

let body = document.getElementsByTagName("body")[0]; // Corrected getElementsByTagName
body.append(div);

let browserName = navigator.appName;
let textContent = "You are using " + browserName + " version " + navigator.appVersion; // Use a different variable name to store the text

function setText() {
  div.innerHTML = textContent; // Set the content of the div
}

body.onload = setText; // Assign the setText function to the body's onload event
