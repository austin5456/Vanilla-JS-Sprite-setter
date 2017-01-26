"use strict"
function makeSprite(wdth, hgth, dlay, parentid, path) {
    sSetup();
    function sSetup() {
        var parentID = parentid;
        var kids = document.getElementById(parentID).children;
        var xPos = "";
        var newPos = 0;
        var i;
        for (i = 0; i < kids.length; i++) {
            kids[i].style.backgroundImage = "url("+ path +")";
            xPos = String(newPos) + "px 0px";
            kids[i].addEventListener("mouseover", createHandler(kids[i], newPos, false));
            kids[i].addEventListener("mouseout", createHandler(kids[i], newPos, true));
            newPos = newPos - wdth;
            kids[i].style.backgroundPosition = xPos;
        }
    }
    function createHandler(individualElem, individualPos, flagMouseOut) {
        return function () {
            sHover(individualElem, individualPos, flagMouseOut);
        };
    }
    function sHover(individualElem, individualPos, flagMouseOut) {
        var hoverPos = String(individualPos) + "px " + hgth + "px";
        individualElem.style.transition = dlay + "ms";
        if (flagMouseOut) {
            hoverPos = String(individualPos) + "px 0px";
        }
        individualElem.style.backgroundPosition = hoverPos;
    }
}
makeSprite("28", "-28", "550", "jSocial", "../Imgs/tryit.png");
makeSprite("28", "-28", "0", "jSocialV", "../Imgs/tryit.png");
