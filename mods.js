var script = document.createElement("script");
script.id = "AutoTrimps-Zek";
script.src = "https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js";
script.setAttribute("crossorigin", "anonymous");
document.head.appendChild(script);

var isSteam = true;

var modernCss =
    '<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/StefGeraets/Trimps.github.io/feature/modern-theme/css/modern.min.css" />';
var modernCssPatches =
    '<link rel="stylesheet" type="text/css" href="./style.css" />';

document.querySelector("head").innerHTML += modernCss;
document.querySelector("head").innerHTML += modernCssPatches;

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) {
        return;
    }
    style = document.createElement("style");
    style.type = "text/css";
    //style.innerHTML = css.replace(/;/g, ' !important;');
    style.innerHTML = css;

    head.appendChild(style);
}

//addGlobalStyle(css);

holidayObj.checkActive = function (name) {
    return true;
};

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
