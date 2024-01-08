let currentMoney = 0

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
    var clickerPink = document.getElementById('click-pink');
    var clickerRock = document.getElementById('click-rock');
    var clickerPhosphor = document.getElementById('click-phosphor');
    var clickerTabby = document.getElementById('click-tabby');
    var clickerPuddle = document.getElementById('click-puddle');
    var clickerFire = document.getElementById('click-fire');
    var clickerHoney = document.getElementById('click-honey');
    var clickerBoom = document.getElementById('click-boom');
    var clickerRad = document.getElementById('click-rad');
    var clickerHunter = document.getElementById('click-hunter');
    var clickerCrystal = document.getElementById('click-crystal');
    var clickerSaber = document.getElementById('click-saber');
    var clickerDervish = document.getElementById('click-dervish');
    var clickerQuantum = document.getElementById('click-quantum');
    var clickerTangle = document.getElementById('click-tangle');
    var clickerMosaic = document.getElementById('click-mosaic');
    if(currentMoney >= 1000 && clickerPink.style.display === "block") {
        currentMoney = currentMoney - 1000
        clickerPink.style.display = "none"
        clickerRock.style.display = "block"
    } else if(currentMoney >= 5000 && clickerRock.style.display === "block") {
        currentMoney = currentMoney - 5000
        clickerRock.style.display = "none"
        clickerPhosphor.style.display = "block"
    } else if (currentMoney >= 10000 && clickerPhosphor.style.display === "block") {
        currentMoney = currentMoney - 10000;
        clickerPhosphor.style.display = "none";
        clickerTabby.style.display = "block";
    } else if (currentMoney >= 25000 && clickerTabby.style.display === "block") {
        currentMoney = currentMoney - 25000;
        clickerTabby.style.display = "none";
        clickerPuddle.style.display = "block";
    } else if (currentMoney >= 50000 && clickerPuddle.style.display === "block") {
        currentMoney = currentMoney - 50000;
        clickerPuddle.style.display = "none";
        clickerFire.style.display = "block";
    } else if (currentMoney >= 100000 && clickerFire.style.display === "block") {
        currentMoney = currentMoney - 100000;
        clickerFire.style.display = "none";
        clickerHoney.style.display = "block";
    } else if (currentMoney >= 150000 && clickerHoney.style.display === "block") {
        currentMoney = currentMoney - 150000;
        clickerHoney.style.display = "none";
        clickerBoom.style.display = "block";
    } else if (currentMoney >= 200000 && clickerBoom.style.display === "block") {
        currentMoney = currentMoney - 200000;
        clickerBoom.style.display = "none";
        clickerRad.style.display = "block";
    } else if (currentMoney >= 250000 && clickerRad.style.display === "block") {
        currentMoney = currentMoney - 250000;
        clickerRad.style.display = "none";
        clickerHunter.style.display = "block";
    } else if (currentMoney >= 500000 && clickerHunter.style.display === "block") {
        currentMoney = currentMoney - 500000;
        clickerHunter.style.display = "none";
        clickerCrystal.style.display = "block";
    } else if (currentMoney >= 1000000 && clickerCrystal.style.display === "block") {
        currentMoney = currentMoney - 1000000;
        clickerCrystal.style.display = "none";
        clickerSaber.style.display = "block";
    } else if (currentMoney >= 1250000 && clickerSaber.style.display === "block") {
        currentMoney = currentMoney - 1250000;
        clickerSaber.style.display = "none";
        clickerDervish.style.display = "block";
    } else if (currentMoney >= 1500000 && clickerDervish.style.display === "block") {
        currentMoney = currentMoney - 1500000;
        clickerDervish.style.display = "none";
        clickerQuantum.style.display = "block";
    } else if (currentMoney >= 1750000 && clickerQuantum.style.display === "block") {
        currentMoney = currentMoney - 1750000;
        clickerQuantum.style.display = "none";
        clickerTangle.style.display = "block";
    } else if (currentMoney >= 2000000 && clickerTangle.style.display === "block") {
        currentMoney = currentMoney - 2000000;
        clickerTangle.style.display = "none";
        clickerMosaic.style.display = "block";
    }
}

let pinkAmount = 0

document.getElementById("pink-amount").innerText = pinkAmount

let pinkAmountTotal = 0

function clickPink() {
    pinkAmount = pinkAmount + clickLevel
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
    } else if(numOfPinkSoldTotal > 50){
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