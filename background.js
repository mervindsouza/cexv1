let i = 1;
console.clear();
console.log("Background.js: Background Called!");
chrome.browserAction.onClicked.addListener(bgButtonClicked);

function bgButtonClicked(tab) {
    console.log("Background Button Clicked!\nTimes: " + i);
    console.log(tab);
    i += 1;

    let msg = {
        txt: "Hello World!"
    }

    chrome.tabs.sendMessag(tab.id, msg);
}