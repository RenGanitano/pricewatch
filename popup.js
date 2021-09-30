// Initialize button with user's preferred color
let changeColor1 = document.getElementById("changeColor1");
let changeColor2 = document.getElementById("changeColor2");
let changeColor3 = document.getElementById("changeColor3");
let changeColor4 = document.getElementById("changeColor4");
let changeColor5 = document.getElementById("changeColor5");

let colorOptions = document.getElementById("colorDiv");

chrome.storage.sync.get("colors", ({ colors }) => {
  // TODO: add recursion / color easel
  for (let index = 0; index < colorOptions.children.length; index++) {
    colorOptions.children[index].style.backgroundColor = colors[index];
    colorOptions.children[index].addEventListener("click", async (e) => {
      let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
        args: [e.target.style.backgroundColor],
      });
    });
  }
});

// The body of this function will be executed as a content script inside the current page
function setPageBackgroundColor(color) {
  document.body.style.backgroundColor = color;

  //chrome.storage.sync.get("color", ({ color }) => {});
}
