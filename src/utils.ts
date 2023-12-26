// Function to check if both elements exist
export function doElementsExist(selectors: string[]) {
  return selectors.every(
    (selector) => document.querySelector(selector) !== null,
  );
}

// Function to move an element to be the last child of its parent
export function moveToLastChild(selector: string) {
  var element = document.querySelector(selector);
  if (element && element.parentElement) {
    element.parentElement.appendChild(element);
  }
}