export function moveBadges() {
  const badGuyNameElement = document.getElementById("badGuyName");
  const goodGuyNameElement = document.getElementById("goodGuyName");

  if (badGuyNameElement && goodGuyNameElement) {
    // Disconnect the observer to prevent an infinite loop
    observer.disconnect();

    // Remove existing modifiedBadge elements
    const modifiedBadgeElements = document.querySelectorAll("span.modifiedBadge");
    modifiedBadgeElements.forEach((element) => {
      element.remove();
    });

    // Clone and move span elements
    const spanElements = badGuyNameElement.querySelectorAll("span.badge");
    spanElements.forEach((span) => {
      if (parent !== null && badGuyNameElement.parentNode !== null) {
        const clonedSpan = span.cloneNode(true) as HTMLElement;
        (span as HTMLElement).style.display = "none";
        (clonedSpan as HTMLElement).style.display = "inline-block";
        clonedSpan.classList.add("modifiedBadge");

        badGuyNameElement.parentNode.insertBefore(clonedSpan, badGuyNameElement.nextSibling);
      }
    });

    const spanElements2 = goodGuyNameElement.querySelectorAll("span.badge");
    spanElements2.forEach((span) => {
      if (parent !== null && goodGuyNameElement.parentNode !== null) {
        const clonedSpan = span.cloneNode(true) as HTMLElement;
        (span as HTMLElement).style.display = "none";
        (clonedSpan as HTMLElement).style.display = "inline-block";
        clonedSpan.classList.add("modifiedBadge");

        goodGuyNameElement.parentNode.insertBefore(clonedSpan, goodGuyNameElement.nextSibling);
      }
    });

    // Reconnect the observer after DOM modifications
    observer.observe(document.body, observerConfig);
  }
}

const observer = new MutationObserver(moveBadges);

const observerConfig = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, observerConfig);

