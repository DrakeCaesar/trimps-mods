
export function BubléChallenge() {
  const targetElement: HTMLElement = document.querySelector("#energyShield") as HTMLElement;
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        const widthValue = targetElement.style.width;
        const widthPercentage = parseFloat(widthValue);
        const voidMapElement = document.querySelector(
          "#repeatVoidsContainer[style='display: block;']",
        );
        const zoneTextElement = document.querySelector("#worldNumber") as HTMLElement;
        const zoneText = zoneTextElement.innerText.split(" ");
        const zone = parseInt(zoneText[zoneText.length - 1], 10);

        if (widthPercentage < 80 && zone <= 40 && voidMapElement === null) {
          const mapsBtnText = document.querySelector(
            "#mapsBtn[style*='display: block'] #mapsBtnText",
          ) as HTMLElement;
          if (mapsBtnText) {
            mapsBtnText.click();
          }
        }
      }
    }
  });

  const config = { attributes: true, attributeFilter: ["style"] };
  observer.observe(targetElement, config);
}