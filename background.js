// background.js

let color = "#3aa757";
let colors = ["#3D348B", "#7678ED", "#F7B801", "#F18701", "#F35B04"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ colors });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
