
// Your new MutationObserver code for moving elements
export function moveSpansAfterParent() {
  const badGuyNameElement = document.getElementById("badGuyName");

  if (badGuyNameElement) {

    const modifiedBadgeElements = document.querySelectorAll("span.modifiedBadge");
    modifiedBadgeElements.forEach((element) => {
      element.remove();
    });

    const spanElements = badGuyNameElement.querySelectorAll("span.badge");
    spanElements.forEach((span) => {
      if (parent !== null && badGuyNameElement.parentNode !== null) {
        const clonedSpan = span.cloneNode(true) as HTMLElement;
        clonedSpan.classList.add("modifiedBadge");
        
        //the following line causes infinite loop in observer
        badGuyNameElement.parentNode.insertBefore(clonedSpan, badGuyNameElement.nextSibling);
      }
    });


  }
}

const observer = new MutationObserver(moveSpansAfterParent);

const observerConfig = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, observerConfig);

