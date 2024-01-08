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
    if(currentMoney >= 1000 && clickerPink.style.display === "none") {
        currentMoney = currentMoney - 1000
        clickerPink.style.display = "none"
        clickerRock.style.display = "block"
    }
}

let currentMoney = 0

let pinkAmount = 0

document.getElementById("pink-amount").innerText = pinkAmount

let pinkAmountTotal = 0

function clickPink() {
    pinkAmount = pinkAmount + 1
    pinkTotal()
}

let numOfPinkSlimes = 0
let costOfPinkSlimes = 250

document.getElementById("pink-slime-amount").innerText = numOfPinkSlimes

function buyPinkSlimes() {
    if(numOfPinkSlimes >= 250) {
        costOfPinkSlimes = Math.floor(costOfPinkSlimes * 1.1)
    } else if(numOfPinkSlimes >= 100) {
        costOfPinkSlimes = 2000
    } else if(numOfPinkSlimes >= 50) {
        costOfPinkSlimes = 1000
    } else if(numOfPinkSlimes >= 10) {
        costOfPinkSlimes = 500
    }
    if(currentMoney >= costOfPinkSlimes) {
        currentMoney = currentMoney - costOfPinkSlimes
        numOfPinkSlimes = numOfPinkSlimes + 1
    }
    document.getElementById("pink-slime-amount").innerText = numOfPinkSlimes
}

let autoPinkAmount = 0

function autoPink() {
    autoPinkAmount = autoPinkAmount + numOfPinkSlimes * 0.2
    pinkTotal()
}

autoPink()
setInterval(autoPink, 1000);

function pinkTotal() {
    pinkAmountTotal = pinkAmount + autoPinkAmount
    pinkAmountTotal = Math.floor(pinkAmountTotal)
    document.getElementById("pink-amount").innerText = pinkAmountTotal
}

let numOfPinkSoldTotal = 0
let pinkPrice = 7

function pinkSell() {
    numOfPinkSoldTotal = numOfPinkSoldTotal + pinkAmountTotal
    currentMoney = currentMoney + pinkAmountTotal * pinkPrice
    pinkAmount = 0
    autoPinkAmount = 0
    pinkTotal()
}

let isFirstTime = true

function pinkStocks() {
    if(isFirstTime) {
        isFirstTime = false
    } else if(numOfPinkSoldTotal >= 2500) {
        pinkPrice = 4
    } else if(numOfPinkSoldTotal >= 400) {
        pinkPrice = Math.max(4, pinkPrice / 2)
    } else if(numOfPinkSoldTotal >= 300){
        pinkPrice = Math.max(4, pinkPrice / 1.75)
    } else if(numOfPinkSoldTotal >= 200){
        pinkPrice = Math.max(4, pinkPrice / 1.5)
    } else if(numOfPinkSoldTotal >= 100){
        pinkPrice = Math.max(4, pinkPrice / 1.25)
    } else if(numOfPinkSoldTotal >= 50){
        pinkPrice = pinkPrice / 1
    } else if(numOfPinkSoldTotal <= 50 && numOfPinkSoldTotal !== 0){
        pinkPrice = Math.min(23, pinkPrice * 1.5)
    } else if(numOfPinkSoldTotal === 0) {
        pinkPrice = Math.min(23, pinkPrice * 2);
    }
    numOfPinkSoldTotal = 0
    console.log(Math.floor(pinkPrice))
}

pinkStocks()
setInterval(pinkStocks, 60000);