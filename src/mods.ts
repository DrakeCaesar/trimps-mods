import { BubléChallenge } from "./bubble";
import { hideTooltip } from "./hideTooltip";
import { observeResistancesElement } from "./sa";
import { moveSettings } from "./settings";

var script = document.createElement("script");
script.id = "AutoTrimps-Zek";
script.src = "https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js";
script.setAttribute("crossorigin", "anonymous");
document.head.appendChild(script);

// @ts-ignore
var isSteam = true;

declare var holidayObj: any;
holidayObj.checkActive = function () {
  return true;
};

moveSettings();
// autotrimpsTabs();
// moveBadges();
const buble: boolean = false;
if (buble)
  BubléChallenge();

hideTooltip();
observeResistancesElement();


