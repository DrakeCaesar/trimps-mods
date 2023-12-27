import { moveBadges } from "./badges";
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
moveBadges();
// BubléChallenge();



