
// Your new MutationObserver code for moving elements
export function moveSpansAfterParent() {
  const badGuyNameElement = document.getElementById("badGuyName");

  if (badGuyNameElement) {
    const spanElements = badGuyNameElement.querySelectorAll("span.badge");

    if (spanElements.length !== 0) {
      //remove elements with modified badges
      const modifiedBadgeElements = document.querySelectorAll("span.modifiedBadge");
      modifiedBadgeElements.forEach((element) => {
        element.remove();
      });

      spanElements.forEach((span) => {
        if (parent !== null && badGuyNameElement.parentNode !== null) {
          badGuyNameElement.removeChild(span);
          span.classList.add("modifiedBadge");
          badGuyNameElement.parentNode.insertBefore(span, badGuyNameElement.nextSibling);
        }
      });
    }
  }
}

const observer = new MutationObserver(moveSpansAfterParent);

const observerConfig3 = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, observerConfig3);

