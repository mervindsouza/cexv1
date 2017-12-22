console.clear();
console.log("Content.js: Extention Called!");

let para = document.getElementsByTagName('h1');
for (elmnt of para){
    elmnt.style['background-color'] = "Yellow";
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
    
}