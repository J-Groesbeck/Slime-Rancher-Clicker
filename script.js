let clickLevel = 1
function levelUpClick() {
    let clickLevelCost = 1000
    if(currentMoney >= clickLevelCost) {
    clickLevel = clickLevel + 1 
    currentMoney = currentMoney - clickLevelCost
    clickLevelCost = clickLevelCost * 10
    }
}

function rankUpClick() {
    var clickerPink = document.getElementById('click-pink')
    var clickerRock = document.getElementById('click-rock')
    if(currentMoney >= 1000 && ) {
        currentMoney = currentMoney - 1000
        clickerPink.style.display = "none"
        clickerRock.style.display = "block"
    }
}