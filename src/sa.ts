export function spireAssault(lastPreset: number = 0): number {
  var newPreset: number = 0;

  const resistancesElement = document.querySelector(".autoStats:nth-child(2) .autoStatsBreakup:nth-child(2)") as HTMLElement;
  const resistancesElementText = document.querySelectorAll(".autoStats:nth-child(2) .autoStatsBreakup:nth-child(2) b") as NodeListOf<HTMLElement>;

  const resistances: string[] = resistancesElement.innerText.replace(/[^0-9 ]/g, "").split(" ").filter(x => x !== "")

  const pResist = parseInt(resistances[1]);
  const bResist = parseInt(resistances[2]);
  const sResist = parseInt(resistances[3]);

  let color = "black";

  if (pResist <= bResist && pResist <= sResist) {
    newPreset = 1;
    color = "green";
  }
  else if (bResist <= pResist && bResist <= sResist) {
    newPreset = 2;
    color = "red";
  }
  else if (sResist <= pResist && sResist <= bResist) {
    newPreset = 3;
    color = "yellow";
  }
  else {
    newPreset = 3;
  }

  resistancesElementText[newPreset].style.color = color;

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
        try {
          lastPreset = spireAssault(lastPreset);
        } catch (error) {

        }
      }
    }

  };

  const observer = new MutationObserver(callback);

  observer.observe(resistanceElement, { attributes: true, subtree: true });
}

