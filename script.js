let currentMoney = 0
document.getElementById('current-money').innerText = currentMoney

let clickLevel = 1

function levelUpClick() {
    let clickLevelCost = 1000
    if (currentMoney >= clickLevelCost) {
        clickLevel = clickLevel + 1
        currentMoney = currentMoney - clickLevelCost
        clickLevelCost = clickLevelCost * 10
        document.getElementById('current-money').innerText = currentMoney
    }
    if (clickLevel = 5) {
        document.getElementById('level-up-click').style.display === "none"
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
    if (currentMoney >= 1000 && clickerPink.style.display === "block") {
        currentMoney = currentMoney - 1000
        clickerPink.style.display = "none"
        clickerRock.style.display = "block"
    } else if (currentMoney >= 5000 && clickerRock.style.display === "block") {
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
        document.getElementById('rank-up-click').style.display === "none"
    }
    document.getElementById('current-money').innerText = currentMoney
}

let seconds = 61

function countdown() {
    seconds = seconds - 1
    if (seconds < 0) {
        seconds = 60
        displayCountdown()
    } else {
        displayCountdown()
    }
}

function displayCountdown() {
    if(seconds === 60) {
        document.getElementById('timer').innerText = `1:00`
    } else if(seconds >= 10){
        document.getElementById('timer').innerText = `0:${seconds}`
    } else {
        document.getElementById('timer').innerText = `0:0${seconds}`
    }
}

countdown()
setInterval(countdown, 1000);

let pinkAmount = 0

let pinkAmountTotal = 0

function clickPink() {
    pinkAmount = pinkAmount + clickLevel
    pinkTotal()
}

let numOfPinkSlimes = 0
let costOfPinkSlimes = 250
document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
document.getElementById("pink-slime-amount").innerText = numOfPinkSlimes

function buyPinkSlimes() {
    if (numOfPinkSlimes >= 250 && currentMoney >= costOfPinkSlimes) {
        costOfPinkSlimes = Math.floor(costOfPinkSlimes * 1.1)
        document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
    } else if (numOfPinkSlimes >= 100 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 2000
        document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
    } else if (numOfPinkSlimes >= 50 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 1000
        document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
    } else if (numOfPinkSlimes >= 10 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 500
        document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
    }
    if (currentMoney >= costOfPinkSlimes) {
        currentMoney = currentMoney - costOfPinkSlimes
        numOfPinkSlimes = numOfPinkSlimes + 1
    }
    document.getElementById("pink-slime-amount").innerText = numOfPinkSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoPinkMultiplier = 0.2
let pinkLevel = 1
document.getElementById('pink-level').innerHTML = pinkLevel
let pinkLevelCost = 1000
document.getElementById('pink-upgrade-price').innerHTML = pinkLevelCost

function levelUpPink() {
    if (currentMoney >= pinkLevelCost) {
        pinkLevel = pinkLevel + 1
        autoPinkMultiplier = autoPinkMultiplier + 0.2
        currentMoney = currentMoney - pinkLevelCost
        pinkLevelCost = pinkLevelCost * 5
        document.getElementById('pink-upgrade-price').innerHTML = pinkLevelCost
        document.getElementById('pink-level').innerHTML = pinkLevel
    }
    if (pinkLevel === 5) {
        document.getElementById('level-up-pink').style.display = "none"
        document.getElementById('buy-pink-slimes').classList = "w-100 h-100"
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoPinkAmount = 0
let pinkPrice = 7

function autoPink() {
    autoPinkAmount = autoPinkAmount + numOfPinkSlimes * autoPinkMultiplier
    pinkTotal()
}

autoPink()
setInterval(autoPink, 1000);

function pinkTotal() {
    pinkAmountTotal = pinkAmount + autoPinkAmount
    pinkAmountTotal = Math.floor(pinkAmountTotal)
    document.getElementById('pink-plorts').innerHTML = pinkAmountTotal
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerHTML = calcPinkSellPrice
}


let numOfPinkSoldTotal = 0

function pinkSell() {
    numOfPinkSoldTotal = numOfPinkSoldTotal + pinkAmountTotal
    currentMoney = currentMoney + pinkAmountTotal * pinkPrice
    pinkAmount = 0
    autoPinkAmount = 0
    pinkTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerHTML = calcPinkSellPrice
}

let isFirstTime = true

function pinkStocks() {
    var pinkStocksUp = document.getElementById('stocks-up-pink')
    var pinkStocksDown = document.getElementById('stocks-down-pink')
    if (isFirstTime) {
        isFirstTime = false
    } else if (numOfPinkSoldTotal >= 2500) {
        pinkPrice = 4
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "inline"
    } else if (numOfPinkSoldTotal >= 400) {
        pinkPrice = Math.max(4, pinkPrice / 2)
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "inline"
    } else if (numOfPinkSoldTotal >= 300) {
        pinkPrice = Math.max(4, pinkPrice / 1.75)
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "inline"
    } else if (numOfPinkSoldTotal >= 200) {
        pinkPrice = Math.max(4, pinkPrice / 1.5)
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "inline"
    } else if (numOfPinkSoldTotal >= 100) {
        pinkPrice = Math.max(4, pinkPrice / 1.25)
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "inline"
    } else if (numOfPinkSoldTotal > 50) {
        pinkPrice = pinkPrice / 1
        pinkStocksUp.style.display = "none"
        pinkStocksDown.style.display = "none"
    } else if (numOfPinkSoldTotal <= 50 && numOfPinkSoldTotal !== 0) {
        pinkPrice = Math.min(23, pinkPrice * 1.5)
        pinkStocksUp.style.display = "inline"
        pinkStocksDown.style.display = "none"
    } else if (numOfPinkSoldTotal === 0) {
        pinkPrice = Math.min(23, pinkPrice * 2)
        pinkStocksUp.style.display = "inline"
        pinkStocksDown.style.display = "none"
    }
    numOfPinkSoldTotal = 0
    pinkPrice = Math.floor(pinkPrice)
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerHTML = calcPinkSellPrice
    document.getElementById('current-pink-price').innerHTML = pinkPrice
}

pinkStocks()
setInterval(pinkStocks, 61000);

var calcPinkSellPrice = pinkAmountTotal * pinkPrice
document.getElementById('pink-sell-total').innerHTML = calcPinkSellPrice