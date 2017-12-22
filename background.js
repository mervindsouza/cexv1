let i = 1;
console.log("Background.js: Background Called!");
chrome.browserAction.onClicked.addListener(bgButtonClicked);

function bgButtonClicked() {
    console.log("Background Button Clicked!\nTimes: " + i);
    i += 1;
}