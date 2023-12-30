export function hideTooltip(): void {

  const tooltipSelector: string = "#tooltipDiv"
  const tooltipElement = document.querySelector(tooltipSelector) as HTMLElement;
  const buttonSelector: string = "#tooltipDiv > #tipCost > #confirmTipCost > #confirmTooltipBtn"
  const targetMarker: string = "#tooltipDiv > #tipText > a"


  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {

        const targetElement = document.querySelector(targetMarker) as HTMLElement;
        if (targetElement) {
          const buttonElement = document.querySelector(buttonSelector) as HTMLElement;
          if (!buttonElement) {
            return;
          }
          buttonElement.click();
          observer.disconnect();
          console.log("Tooltip hidden");
        }
      }
    }
  });

  const config = { attributes: true, attributeFilter: ["style"] };
  observer.observe(tooltipElement, config);
} 