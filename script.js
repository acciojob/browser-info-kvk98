//your JS code here. If required.
let div = document.createElement("div");
div.id = "browser-info";

let body = getElementsByTagName("body")[0];
body.append(div);

let browserName = navigator.appName;
div.innerHTML = "You are using " + browserName + "version " + navigator.appVersion;