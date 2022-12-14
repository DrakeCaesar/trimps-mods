var script = document.createElement("script");
script.id = "AutoTrimps-Zek";
script.src = "https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js";
script.setAttribute("crossorigin", "anonymous");
document.head.appendChild(script);

var isSteam = true;

holidayObj.checkActive = function (name) {
    return true;
};

let challangeDescriptionInterval = setInterval(function () {
    const challangeDescription = document.querySelector(
        "#specificChallengeDescription"
    );
    if (challangeDescription) {
        challangeDescription.classList.add("niceScroll");
        clearInterval(challangeDescriptionInterval);
    }
    return false;
}, 1000);

let respecInterval = setInterval(function () {
    if (game.global.freeTalentRespecs < 3){
        game.global.freeTalentRespecs = 3;
    }
    return false;
}, 1000);

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