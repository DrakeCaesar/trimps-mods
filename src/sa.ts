export function spireAssault(lastPreset: number = 0): number {
  var newPreset: number = 0;

  const resistancesElement = document.querySelector(".autoStats:nth-child(2) .autoStatsBreakup:nth-child(2)") as HTMLElement;
  const resistancesElementText = document.querySelectorAll(".autoStats:nth-child(2) .autoStatsBreakup:nth-child(2) b") as NodeListOf<HTMLElement>;

  const resistances: string[] = resistancesElement.innerText.replace(/[^0-9 ]/g, "").split(" ").filter(x => x !== "")

  const pResist = parseInt(resistances[1]);
  const bResist = parseInt(resistances[2]);
  const sResist = parseInt(resistances[3]);

  let minResist = Math.min(pResist, bResist, sResist);
  let presetsToColor = [];
  if (pResist === minResist) {
    presetsToColor.push({ preset: 1, color: "green" });
  }
  if (bResist === minResist) {
    presetsToColor.push({ preset: 2, color: "red" });
  }
  if (sResist === minResist) {
    presetsToColor.push({ preset: 3, color: "yellow" });
  }
  presetsToColor.forEach(({ preset, color }) => {
    resistancesElementText[preset].style.color = color;
  });
  newPreset = presetsToColor[0].preset;
  //make italics
  resistancesElementText[newPreset].style.fontStyle = "italic";

  const presetName = ["", "Poison", "Bleed", "Shock"]
  if (lastPreset !== newPreset) {
    const presetButton = document.querySelector("#autoBattleMenuButtons span.autoColorGrey") as HTMLElement;
    presetButton.click();
    const upgradeElements = document.querySelectorAll("body  #autoItemsDiv .preset .autoItemUpgrade") as NodeListOf<HTMLElement>;
    upgradeElements[newPreset - 1].click();
    lastPreset = newPreset;
    console.log("Switched to preset " + presetName[newPreset]);
  } else {
    // console.log("No change, still on preset " + presetName[newPreset]);
  }

  return newPreset;

}

export async function observeResistancesElement(): Promise<void> {
  let lastPreset = 0;

  let resistanceElement = document.querySelector('#tooltipDiv');

  while (!resistanceElement) {
    resistanceElement = document.querySelector('#tooltipDiv');
    await new Promise(r => setTimeout(r, 100));
  }

  const callback = function (mutationsList: MutationRecord[]) {
    if (resistanceElement === null) {
      console.log("resistanceElement is null");
      return;
    }

    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        observer.disconnect();
        try {

          lastPreset = spireAssault(lastPreset);
        } catch (error) {

        }
        observer.observe(resistanceElement, { attributes: true, subtree: true });
      }
    }

  };

  const observer = new MutationObserver(callback);

  observer.observe(resistanceElement, { attributes: true, subtree: true });

  while (true) {
    resistanceElement = document.querySelector('#tooltipDiv');
    (document.querySelector("#autoBattleA") as HTMLElement).click();
    await new Promise(r => setTimeout(r, 1000));
  }
}

export function refresh() {
  const button = document.querySelector("#confirmTooltipBtn") as HTMLElement;

  if (!button) {
    return;
  }

  if (button.innerHTML == "Refresh") {
    button.click();
  }
}
export async function observeTime(): Promise<void> {

  let timeElement = document.querySelector('#portalTime');

  while (!timeElement) {
    timeElement = document.querySelector('#portalTime');
    await new Promise(r => setTimeout(r, 100));
  }

  const callback = function (mutationsList: MutationRecord[]) {
    if (timeElement === null) {
      return;
    }
    //observe innerText
    for (let mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        observer.disconnect();
        try {
          refresh();
        } catch (error) {

        }
        observer.observe(timeElement, { attributes: true, subtree: true });
      }
    }

  };

  const observer = new MutationObserver(callback);

  observer.observe(timeElement, { attributes: true, subtree: true });
}