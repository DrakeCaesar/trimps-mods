var script = document.createElement("script");
script.id = "AutoTrimps-Zek";
script.src = "https://Zorn192.github.io/AutoTrimps/AutoTrimps2.js";
script.setAttribute("crossorigin", "anonymous");
document.head.appendChild(script);

var isSteam = true;

var modernCss =
    '<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/StefGeraets/Trimps.github.io/feature/modern-theme/css/modern.min.css" />';
document.querySelector("head").innerHTML += modernCss;

var css = `
    #logContainer button {
        height:100%
    }
    
    #tooltipDiv {
        background-color: #212935;
    }
    #tooltipDiv table{
        background-color: #2F3648;
    }
    #tooltipDiv div, #tooltipDiv table tbody, #tooltipDiv table tr, #tooltipDiv table td {
        background-color: inherit;
        color: white;
    }
    
    #equipmentContainer .thingName {
        word-spacing: 9999px;
    }

    #settingsTable{
        border-top: 1px solid #1B1F2C;
    }

    ul.tab li{
        border-radius: 8px 8px 0 0;
    }
    ul.tab li .active {
        background-color: #4C5468 !important;
        border-radius: 8px 8px 0 0;
    }
    ul.tab li a{
        border-radius: 8px 8px 0 0;
    }
    ul.tab li a:hover {
        background-color: #657089 !important;
        border-radius: 8px 8px 0 0;
    }
    #autoMapLabel {
        border-width: 0 !important;
        border-style: none !important;
        background: inherit;
        line-height: 0;
    }
    #autoMapBtn{
        border-width: 0 !important;
        border-style: none !important;
        padding-left: 0px;
        padding-top: 0px;
        adding-right: 0px;
        padding-bottom: 0px;
        margin-bottom: 2px;
        font-size: .875rem !important;
        font-weight: 600;
    }
    .settingsBtn {
        border: none !important;
    }
#autoTrimpsTabBarMenu{
    background-color: #1A1E2B;
    border: 1px solid #1B1F2C;
}
#autoSettings{
    border: 1px solid #1B1F2C;
}
.tabcontent{
    border: 1px solid #1B1F2C !important;
}
#autoTrimpsTabBarMenu > li {
    border-top: 1px;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    border-spacing: 0;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-bottom: 0;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid black;
    text-align: center;
    border-color: #1A202C;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.3pt;
    background-color: #2D3748;
    color: #E2E8F0;
    }
#autoTrimpsTabBarMenu > li > a {
    border-spacing: 0;
    border-collapse: collapse;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    text-align: center;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.3pt;
    color: #E2E8F0;
    box-sizing: border-box;
}
`

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    //style.innerHTML = css.replace(/;/g, ' !important;');
    style.innerHTML = css;

    head.appendChild(style);
}

addGlobalStyle(css)

holidayObj.checkActive = function(name){
    return true;
}

const autoMapBtnStyle =
    "border: none !important;"+
    "padding-left: 0px;"+
    "padding-top: 0px;"+
    "padding-right: 0px;"+
    "padding-bottom: 0px;"+
    "margin-bottom: 2px;"+
    "font-size: .875rem !important;"+
    "font-weight: 600;"
const autoMapLabelStyle =
    "background: inherit;"+
    "line-height: 0;"

let checkAutoMapsButton = setInterval(function() {
    const autoMapBtn = document.querySelector("#autoMapBtn")
    const autoMapLabel = document.querySelector("#autoMapLabel")
    if(autoMapBtn && autoMapLabel){
        autoMapBtn.style.cssText += autoMapBtnStyle
        autoMapLabel.style.cssText += autoMapLabelStyle
        clearInterval(checkAutoMapsButton)
    }
    return false
}, 10);



visualMutations.Pumpkimp.pattern = function(currentArray) {
    //console.log(currentArray)
    var loc = getRandomIntSeeded(game.global.mutationSeed++, 0, 4);
    var design = [1,2,3,4,5,10,11,12,13,14,15,16,20,21,25,26,30,32,33,34,36,40,41,42,44,45,46,50,51,52,53,54,55,56,60,61,63,65,66,71,72,73,74,75,82,83,84,93];
    for (var x = 0; x < 100 - loc; x++){
        //console.log(((currentArray[x + loc] == "" || currentArray[x + loc] == "TrimpmasSnow") && design.indexOf(x)))
        if ((currentArray[x + loc] == "" || currentArray[x + loc] == "TrimpmasSnow") && design.indexOf(x) != -1) currentArray[x + loc] = "Pumpkimp";
    }
    //console.log(currentArray)
    return currentArray;
}

