//your JS code here. If required.
let div = document.createElement("div");
div.id = "browser-info";
body.append(div);

let browserName = navigator.appName;
div.innerText = "You are using " + browserName + "version " + navigator.appVersion;