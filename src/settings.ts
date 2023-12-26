import { doElementsExist, moveToLastChild } from "./common";

export function moveSettings() {
  // Selectors of the elements to monitor
  const selectors = ["#settingsTable", "#autoTrimpsTabBarMenu"];

  // Create a MutationObserver to monitor the DOM for changes
  const observer = new MutationObserver(function () {
    if (doElementsExist(selectors)) {
      // If both elements exist, move them and disconnect the observer
      selectors.forEach((selector) => moveToLastChild(selector));
      observer.disconnect();
    }
  });

  // Start observing the document body for childList and subtree changes
  observer.observe(document.body, { childList: true, subtree: true });

  // Check initially if the elements already exist
  if (doElementsExist(selectors)) {
    selectors.forEach((selector) => moveToLastChild(selector));
    observer.disconnect();
  }
}

