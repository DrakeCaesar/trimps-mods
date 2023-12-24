var script = document.createElement("script");
script.id = "AutoTrimps-Zek";
script.src = "https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js";
script.setAttribute("crossorigin", "anonymous");
document.head.appendChild(script);

var isSteam = true;

// Enables all holiday events at the same time
holidayObj.checkActive = function (name) {
  return true;
};

// Function to move an element to be the last child of its parent
function moveToLastChild(selector) {
  var element = document.querySelector(selector);
  if (element && element.parentElement) {
    element.parentElement.appendChild(element);
  }
}
// Function to check if both elements exist
function doElementsExist(selectors) {
  return selectors.every(
    (selector) => document.querySelector(selector) !== null,
  );
}
// Selectors of the elements to monitor
const selectors2 = ["#settingsTable", "#autoTrimpsTabBarMenu"];
// Create a MutationObserver to monitor the DOM for changes
const observer2 = new MutationObserver(function (mutations) {
  if (doElementsExist(selectors2)) {
    // If both elements exist, move them and disconnect the observer
    selectors2.forEach((selector) => moveToLastChild(selector));
    observer2.disconnect();
  }
});
// Start observing the document body for childList and subtree changes
observer2.observe(document.body, { childList: true, subtree: true });
// Check initially if the elements already exist
if (doElementsExist(selectors2)) {
  selectors2.forEach((selector) => moveToLastChild(selector));
  observer2.disconnect();
}

// //Bubble
// const targetElement = document.querySelector("#energyShield");
// const observer = new MutationObserver((mutations) => {
//   for (let mutation of mutations) {
//     if (mutation.type === "attributes" && mutation.attributeName === "style") {
//       const widthValue = targetElement.style.width;
//       const widthPercentage = parseFloat(widthValue);
//       const voidMap = document.querySelector(
//         "#repeatVoidsContainer[style='display: block;']",
//       );
//       const zoneText = document
//         .querySelector("#worldNumber")
//         .innerText.split(" ");
//       const zone = parseInt(zoneText[zoneText.length - 1], 10);

//       if (widthPercentage < 80 && zone <= 40 && voidMap === null) {
//         const mapsBtnText = document.querySelector(
//           "#mapsBtn[style*='display: block'] #mapsBtnText",
//         );
//         if (mapsBtnText) {
//           mapsBtnText.click();
//         }
//       }
//     }
//   }
// });
// const config = { attributes: true, attributeFilter: ["style"] };
// observer.observe(targetElement, config);

// const selectors3 = [
//   '#tooltipDiv.tooltipExtraNone[style="display: block; top: 25%; left: 33.75%;"]',
// ];
// const observer3 = new MutationObserver(function (mutations) {
//   if (doElementsExist(selectors3)) {
//     // If both elements exist, move them and disconnect the observer
//     selectors3.forEach((selector) =>
//       document.querySelector(selector).setAttribute("style", "display: none;"),
//     );
//     observer3.disconnect();
//   }
// });

// observer3.observe(document.body, { childList: true, subtree: true });

// // Replaces a scroll bar with a nice one
// let challengeDescriptionInterval = setInterval(function () {
//   const challengeDescription = document.querySelector(
//     "#specificChallengeDescription",
//   );
//   if (challengeDescription) {
//     challengeDescription.classList.add("niceScroll");
//     clearInterval(challengeDescriptionInterval);
//   }
//   return false;
// }, 1000);

// // Makes respecs free
// let respecInterval = setInterval(function () {
//   if (game.global.freeTalentRespecs < 3) {
//     game.global.freeTalentRespecs = 3;
//   }
//   return false;
// }, 1000);

/*
visualMutations.Pumpkimp.pattern = function (currentArray) {
    // console.log(currentArray)
    var loc = getRandomIntSeeded(game.global.mutationSeed++, 0, 4);
    var design = [
        1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25, 26, 30, 32, 33,
        34, 36, 40, 41, 42, 44, 45, 46, 50, 51, 52, 53, 54, 55, 56, 60, 61, 63,
        65, 66, 71, 72, 73, 74, 75, 82, 83, 84, 93,
    ];
    for (var x = 0; x < 100 - loc; x++) {
        // console.log(((currentArray[x + loc] == "" || currentArray[x + loc] == "TrimpmasSnow") && design.indexOf(x)))
        if (
            (currentArray[x + loc] == "" ||
                currentArray[x + loc] == "TrimpmasSnow") &&
            design.indexOf(x) != -1
        )
            currentArray[x + loc] = "Pumpkimp";
    }
    // console.log(currentArray)
    return currentArray;
};
*/
/*
// Life Preserver based on https://www.reddit.com/r/Trimps/comments/wh0zzi/autotrimps_helper_script_for_life_challenge/
var exit = false;
var wait = 0;
var life = setInterval(function() {
    if (exit || game.global.mapsActive) return;
    if (getCurrentWorldCell().mutation == "Living" && wait < 300) {
        if (game.global.fighting) {
            console.log('Exiting');
            exit = true;
            mapsClicked();
            setTimeout(function() {
                mapsClicked();
                exit = false;
            }, 500);
        } else {
            console.log('Waiting');
            wait++;
        }
    } else if (!game.global.fighting && missingTrimps.valueOf() == '0') {
        console.log('Fighting');
        fightManual();
        if (wait >= 300) {
            setTimeout(function() {
                wait = 0
            }, 3000);
        }
    }
}, 90);
*/
