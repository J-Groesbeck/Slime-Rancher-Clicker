let currentMoney = 0
document.getElementById('current-money').innerText = currentMoney

//Leveling and Ranking up player's click

let clickLevel = 1
document.getElementById('click-level').innerText = clickLevel
let clickLevelCost = 1000
document.getElementById('click-level-cost').innerText = clickLevelCost

function levelUpClick() {
    if (currentMoney >= clickLevelCost) {
        clickLevel = clickLevel + 1
        currentMoney = currentMoney - clickLevelCost
        clickLevelCost = clickLevelCost * 10
        document.getElementById('current-money').innerText = currentMoney
        document.getElementById('click-level-cost').innerText = clickLevelCost
        document.getElementById('click-level').innerText = clickLevel
    }
    if (clickLevel === 5) {
        document.getElementById('level-up-click').style.display = 'none'
    }
}

let clickRankCost = 1000
document.getElementById('click-rank-cost').innerText = clickRankCost
var clickerPink = document.getElementById('click-pink');
clickerPink.style.display = "inline"
var clickerRock = document.getElementById('click-rock');
var clickerPhosphor = document.getElementById('click-phosphor');
var clickerTabby = document.getElementById('click-tabby');
var clickerPuddle = document.getElementById('click-puddle');
var clickerFire = document.getElementById('click-fire');
var clickerHoney = document.getElementById('click-honey');
var clickerBoom = document.getElementById('click-boom');
var clickerHunter = document.getElementById('click-hunter');
var clickerRad = document.getElementById('click-rad');
var clickerCrystal = document.getElementById('click-crystal');
var clickerSaber = document.getElementById('click-saber');
var clickerDervish = document.getElementById('click-dervish');
var clickerQuantum = document.getElementById('click-quantum');
var clickerTangle = document.getElementById('click-tangle');
var clickerMosaic = document.getElementById('click-mosaic');
var clickerGold = document.getElementById('click-gold');

function rankUpClick() {
    if (currentMoney >= clickRankCost && clickerPink.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerPink.style.display = 'none';
        clickerRock.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Rock';
    } else if (currentMoney >= clickRankCost && clickerRock.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerRock.style.display = 'none';
        clickerPhosphor.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Phosphor';
    } else if (currentMoney >= clickRankCost && clickerPhosphor.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerPhosphor.style.display = 'none';
        clickerTabby.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Tabby';
    } else if (currentMoney >= clickRankCost && clickerTabby.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerTabby.style.display = 'none';
        clickerPuddle.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Puddle';
    } else if (currentMoney >= clickRankCost && clickerPuddle.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerPuddle.style.display = 'none';
        clickerFire.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Fire';
    } else if (currentMoney >= clickRankCost && clickerFire.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerFire.style.display = 'none';
        clickerHoney.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Honey';
    } else if (currentMoney >= clickRankCost && clickerHoney.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerHoney.style.display = 'none';
        clickerBoom.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost;
        document.getElementById('click-rank').innerText = 'Boom';
    } else if (currentMoney >= clickRankCost && clickerBoom.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerBoom.style.display = 'none';
        clickerHunter.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Hunter';
    } else if (currentMoney >= clickRankCost && clickerHunter.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerHunter.style.display = 'none';
        clickerRad.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Rad';
    } else if (currentMoney >= clickRankCost && clickerRad.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerRad.style.display = 'none';
        clickerCrystal.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Crystal';
    } else if (currentMoney >= clickRankCost && clickerCrystal.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerCrystal.style.display = 'none';
        clickerSaber.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Saber';
    } else if (currentMoney >= clickRankCost && clickerSaber.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerSaber.style.display = 'none';
        clickerDervish.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Dervish';
    } else if (currentMoney >= clickRankCost && clickerDervish.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerDervish.style.display = 'none';
        clickerQuantum.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Quantum';
    } else if (currentMoney >= clickRankCost && clickerQuantum.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerQuantum.style.display = 'none';
        clickerTangle.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Tangle';
    } else if (currentMoney >= clickRankCost && clickerTangle.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerTangle.style.display = 'none';
        clickerMosaic.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost
        document.getElementById('click-rank').innerText = 'Mosaic';
        document.getElementById('rank-up-click').style.display = 'none'
    } else if (currentMoney >= clickRankCost && clickerMosaic.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerMosaic.style.display = 'none';
        clickerGold.style.display = 'inline';
        document.getElementById('click-rank').innerText = 'Gold';
        document.getElementById('rank-up-click').style.display = 'none'
    }
    document.getElementById('current-money').innerText = currentMoney
}

//Market Countdown

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
    if (seconds === 60) {
        document.getElementById('timer').innerText = `1:00`
    } else if (seconds >= 10) {
        document.getElementById('timer').innerText = `0:${seconds}`
    } else {
        document.getElementById('timer').innerText = `0:0${seconds}`
    }
}

countdown()
setInterval(countdown, 1000);

//Pink Slime Section

let pinkAmount = 0

let pinkAmountTotal = 0

function clickPink() {
    pinkAmount = pinkAmount + clickLevel
    pinkTotal()
}

let numOfPinkSlimes = 0
let costOfPinkSlimes = 250
document.getElementById('pink-slime-price').innerHTML = costOfPinkSlimes
document.getElementById('pink-slime-amount').innerText = numOfPinkSlimes

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
    document.getElementById('pink-slime-amount').innerText = numOfPinkSlimes
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
        document.getElementById('level-up-pink').style.display = 'none'
        document.getElementById('buy-pink-slimes').classList = 'w-100 h-100'
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

let isFirstTimePink = true

function pinkStocks() {
    var pinkStocksUp = document.getElementById('stocks-up-pink')
    var pinkStocksDown = document.getElementById('stocks-down-pink')
    if (isFirstTimePink) {
        isFirstTimePink = false
    } else if (numOfPinkSoldTotal >= 2500) {
        pinkPrice = 4
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'inline'
    } else if (numOfPinkSoldTotal >= 400) {
        pinkPrice = Math.max(4, pinkPrice / 2)
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'inline'
    } else if (numOfPinkSoldTotal >= 300) {
        pinkPrice = Math.max(4, pinkPrice / 1.75)
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'inline'
    } else if (numOfPinkSoldTotal >= 200) {
        pinkPrice = Math.max(4, pinkPrice / 1.5)
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'inline'
    } else if (numOfPinkSoldTotal >= 100) {
        pinkPrice = Math.max(4, pinkPrice / 1.25)
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'inline'
    } else if (numOfPinkSoldTotal > 50) {
        pinkPrice = pinkPrice / 1
        pinkStocksUp.style.display = 'none'
        pinkStocksDown.style.display = 'none'
    } else if (numOfPinkSoldTotal <= 50 && numOfPinkSoldTotal !== 0) {
        pinkPrice = Math.min(23, pinkPrice * 1.5)
        pinkStocksUp.style.display = 'inline'
        pinkStocksDown.style.display = 'none'
    } else if (numOfPinkSoldTotal === 0) {
        pinkPrice = Math.min(23, pinkPrice * 2)
        pinkStocksUp.style.display = 'inline'
        pinkStocksDown.style.display = 'none'
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

//Rock Slime Section

let rockAmount = 0

let rockAmountTotal = 0

function clickRock() {
    rockAmount = rockAmount + clickLevel
    rockTotal()
}

let numOfRockSlimes = 0
let costOfRockSlimes = 1000
document.getElementById('rock-slime-price').innerHTML = costOfRockSlimes
document.getElementById('rock-slime-amount').innerText = numOfRockSlimes

function buyRockSlimes() {
    if (numOfRockSlimes >= 250 && currentMoney >= costOfRockSlimes) {
        costOfRockSlimes = Math.floor(costOfRockSlimes * 1.1)
        document.getElementById('rock-slime-price').innerHTML = costOfRockSlimes
    } else if (numOfRockSlimes >= 100 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 8000
        document.getElementById('rock-slime-price').innerHTML = costOfRockSlimes
    } else if (numOfRockSlimes >= 50 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 4000
        document.getElementById('rock-slime-price').innerHTML = costOfRockSlimes
    } else if (numOfRockSlimes >= 10 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 2000
        document.getElementById('rock-slime-price').innerHTML = costOfRockSlimes
    }
    if (currentMoney >= costOfRockSlimes) {
        currentMoney = currentMoney - costOfRockSlimes
        numOfRockSlimes = numOfRockSlimes + 1
    }
    document.getElementById('rock-slime-amount').innerText = numOfRockSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoRockMultiplier = 0.2
let rockLevel = 1
document.getElementById('rock-level').innerHTML = rockLevel
let rockLevelCost = 4000
document.getElementById('rock-upgrade-price').innerHTML = rockLevelCost

function levelUpRock() {
    if (currentMoney >= rockLevelCost) {
        rockLevel = rockLevel + 1
        autoRockMultiplier = autoRockMultiplier + 0.2
        currentMoney = currentMoney - rockLevelCost
        rockLevelCost = rockLevelCost * 5
        document.getElementById('rock-upgrade-price').innerHTML = rockLevelCost
        document.getElementById('rock-level').innerHTML = rockLevel
    }
    if (rockLevel === 5) {
        document.getElementById('level-up-rock').style.display = 'none'
        document.getElementById('buy-rock-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoRockAmount = 0
let rockPrice = 15

function autoRock() {
    autoRockAmount = autoRockAmount + numOfRockSlimes * autoRockMultiplier
    rockTotal()
}

autoRock()
setInterval(autoRock, 1000);


function rockTotal() {
    rockAmountTotal = rockAmount + autoRockAmount
    rockAmountTotal = Math.floor(rockAmountTotal)
    document.getElementById('rock-plorts').innerHTML = rockAmountTotal
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerHTML = calcRockSellPrice
}

let numOfRockSoldTotal = 0

function rockSell() {
    numOfRockSoldTotal = numOfRockSoldTotal + rockAmountTotal
    currentMoney = currentMoney + rockAmountTotal * rockPrice
    rockAmount = 0
    autoRockAmount = 0
    rockTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerHTML = calcRockSellPrice
}

let isFirstTimeRock = true

function rockStocks() {
    var rockStocksUp = document.getElementById('stocks-up-rock')
    var rockStocksDown = document.getElementById('stocks-down-rock')
    if (isFirstTimeRock) {
        isFirstTimeRock = false
    } else if (numOfRockSoldTotal >= 2500) {
        rockPrice = 8
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 400) {
        rockPrice = Math.max(8, rockPrice / 2)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 300) {
        rockPrice = Math.max(8, rockPrice / 1.75)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 200) {
        rockPrice = Math.max(8, rockPrice / 1.5)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 100) {
        rockPrice = Math.max(8, rockPrice / 1.25)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal > 50) {
        rockPrice = rockPrice / 1
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'none'
    } else if (numOfRockSoldTotal <= 50 && numOfRockSoldTotal !== 0) {
        rockPrice = Math.min(35, rockPrice * 1.5)
        rockStocksUp.style.display = 'inline'
        rockStocksDown.style.display = 'none'
    } else if (numOfRockSoldTotal === 0) {
        rockPrice = Math.min(35, rockPrice * 2)
        rockStocksUp.style.display = 'inline'
        rockStocksDown.style.display = 'none'
    }
    numOfRockSoldTotal = 0
    rockPrice = Math.floor(rockPrice)
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerHTML = calcRockSellPrice
    document.getElementById('current-rock-price').innerHTML = rockPrice
}

rockStocks()
setInterval(rockStocks, 61000);

var calcRockSellPrice = rockAmountTotal * rockPrice
document.getElementById('rock-sell-total').innerHTML = calcRockSellPrice

// Phosphor Slime Section

let phosphorAmount = 0

let phosphorAmountTotal = 0

function clickPhosphor() {
    phosphorAmount = phosphorAmount + clickLevel
    phosphorTotal()
}

let numOfPhosphorSlimes = 0
let costOfPhosphorSlimes = 4000
document.getElementById('phosphor-slime-price').innerHTML = costOfPhosphorSlimes
document.getElementById('phosphor-slime-amount').innerText = numOfPhosphorSlimes

function buyPhosphorSlimes() {
    if (numOfPhosphorSlimes >= 250 && currentMoney >= costOfPhosphorSlimes) {
        costOfPhosphorSlimes = Math.floor(costOfPhosphorSlimes * 1.1)
        document.getElementById('phosphor-slime-price').innerHTML = costOfPhosphorSlimes
    } else if (numOfPhosphorSlimes >= 100 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 32000
        document.getElementById('phosphor-slime-price').innerHTML = costOfPhosphorSlimes
    } else if (numOfPhosphorSlimes >= 50 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 16000
        document.getElementById('phosphor-slime-price').innerHTML = costOfPhosphorSlimes
    } else if (numOfPhosphorSlimes >= 10 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 8000
        document.getElementById('phosphor-slime-price').innerHTML = costOfPhosphorSlimes
    }
    if (currentMoney >= costOfPhosphorSlimes) {
        currentMoney = currentMoney - costOfPhosphorSlimes
        numOfPhosphorSlimes = numOfPhosphorSlimes + 1
    }
    document.getElementById('phosphor-slime-amount').innerText = numOfPhosphorSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoPhosphorMultiplier = 0.2
let phosphorLevel = 1
document.getElementById('phosphor-level').innerHTML = phosphorLevel
let phosphorLevelCost = 16000
document.getElementById('phosphor-upgrade-price').innerHTML = phosphorLevelCost

function levelUpPhosphor() {
    if (currentMoney >= phosphorLevelCost) {
        phosphorLevel = phosphorLevel + 1
        autoPhosphorMultiplier = autoPhosphorMultiplier + 0.2
        currentMoney = currentMoney - phosphorLevelCost
        phosphorLevelCost = phosphorLevelCost * 5
        document.getElementById('phosphor-upgrade-price').innerHTML = phosphorLevelCost
        document.getElementById('phosphor-level').innerHTML = phosphorLevel
    }
    if (phosphorLevel === 5) {
        document.getElementById('level-up-phosphor').style.display = 'none'
        document.getElementById('buy-phosphor-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoPhosphorAmount = 0
let phosphorPrice = 23

function autoPhosphor() {
    autoPhosphorAmount = autoPhosphorAmount + numOfPhosphorSlimes * autoPhosphorMultiplier
    phosphorTotal()
}

autoPhosphor()
setInterval(autoPhosphor, 1000);

function phosphorTotal() {
    phosphorAmountTotal = phosphorAmount + autoPhosphorAmount
    phosphorAmountTotal = Math.floor(phosphorAmountTotal)
    document.getElementById('phosphor-plorts').innerHTML = phosphorAmountTotal
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerHTML = calcPhosphorSellPrice
}

let numOfPhosphorSoldTotal = 0

function phosphorSell() {
    numOfPhosphorSoldTotal = numOfPhosphorSoldTotal + phosphorAmountTotal
    currentMoney = currentMoney + phosphorAmountTotal * phosphorPrice
    phosphorAmount = 0
    autoPhosphorAmount = 0
    phosphorTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerHTML = calcPhosphorSellPrice
}

let isFirstTimePhosphor = true

function phosphorStocks() {
    var phosphorStocksUp = document.getElementById('stocks-up-phosphor')
    var phosphorStocksDown = document.getElementById('stocks-down-phosphor')
    if (isFirstTimePhosphor) {
        isFirstTimePhosphor = false
    } else if (numOfPhosphorSoldTotal >= 2500) {
        phosphorPrice = 12
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 400) {
        phosphorPrice = Math.max(12, phosphorPrice / 2)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 300) {
        phosphorPrice = Math.max(12, phosphorPrice / 1.75)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 200) {
        phosphorPrice = Math.max(12, phosphorPrice / 1.5)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 100) {
        phosphorPrice = Math.max(12, phosphorPrice / 1.25)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal > 50) {
        phosphorPrice = phosphorPrice / 1
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'none'
    } else if (numOfPhosphorSoldTotal <= 50 && numOfPhosphorSoldTotal !== 0) {
        phosphorPrice = Math.min(53, phosphorPrice * 1.5)
        phosphorStocksUp.style.display = 'inline'
        phosphorStocksDown.style.display = 'none'
    } else if (numOfPhosphorSoldTotal === 0) {
        phosphorPrice = Math.min(53, phosphorPrice * 2)
        phosphorStocksUp.style.display = 'inline'
        phosphorStocksDown.style.display = 'none'
    }
    numOfPhosphorSoldTotal = 0
    phosphorPrice = Math.floor(phosphorPrice)
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerHTML = calcPhosphorSellPrice
    document.getElementById('current-phosphor-price').innerHTML = phosphorPrice
}

phosphorStocks()
setInterval(phosphorStocks, 61000);

var calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
document.getElementById('phosphor-sell-total').innerHTML = calcPhosphorSellPrice

// Tabby Slime Section

let tabbyAmount = 0

let tabbyAmountTotal = 0

function clickTabby() {
    tabbyAmount = tabbyAmount + clickLevel
    tabbyTotal()
}

let numOfTabbySlimes = 0
let costOfTabbySlimes = 16000
document.getElementById('tabby-slime-price').innerHTML = costOfTabbySlimes
document.getElementById('tabby-slime-amount').innerText = numOfTabbySlimes

function buyTabbySlimes() {
    if (numOfTabbySlimes >= 250 && currentMoney >= costOfTabbySlimes) {
        costOfTabbySlimes = Math.floor(costOfTabbySlimes * 1.1)
        document.getElementById('tabby-slime-price').innerHTML = costOfTabbySlimes
    } else if (numOfTabbySlimes >= 100 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 128000
        document.getElementById('tabby-slime-price').innerHTML = costOfTabbySlimes
    } else if (numOfTabbySlimes >= 50 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 64000
        document.getElementById('tabby-slime-price').innerHTML = costOfTabbySlimes
    } else if (numOfTabbySlimes >= 10 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 32000
        document.getElementById('tabby-slime-price').innerHTML = costOfTabbySlimes
    }
    if (currentMoney >= costOfTabbySlimes) {
        currentMoney = currentMoney - costOfTabbySlimes
        numOfTabbySlimes = numOfTabbySlimes + 1
    }
    document.getElementById('tabby-slime-amount').innerText = numOfTabbySlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoTabbyMultiplier = 0.2
let tabbyLevel = 1
document.getElementById('tabby-level').innerHTML = tabbyLevel
let tabbyLevelCost = 64000
document.getElementById('tabby-upgrade-price').innerHTML = tabbyLevelCost

function levelUpTabby() {
    if (currentMoney >= tabbyLevelCost) {
        tabbyLevel = tabbyLevel + 1
        autoTabbyMultiplier = autoTabbyMultiplier + 0.2
        currentMoney = currentMoney - tabbyLevelCost
        tabbyLevelCost = tabbyLevelCost * 5
        document.getElementById('tabby-upgrade-price').innerHTML = tabbyLevelCost
        document.getElementById('tabby-level').innerHTML = tabbyLevel
    }
    if (tabbyLevel === 5) {
        document.getElementById('level-up-tabby').style.display = 'none'
        document.getElementById('buy-tabby-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoTabbyAmount = 0
let tabbyPrice = 34

function autoTabby() {
    autoTabbyAmount = autoTabbyAmount + numOfTabbySlimes * autoTabbyMultiplier
    tabbyTotal()
}

autoTabby()
setInterval(autoTabby, 1000);

function tabbyTotal() {
    tabbyAmountTotal = tabbyAmount + autoTabbyAmount
    tabbyAmountTotal = Math.floor(tabbyAmountTotal)
    document.getElementById('tabby-plorts').innerHTML = tabbyAmountTotal
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerHTML = calcTabbySellPrice
}

let numOfTabbySoldTotal = 0

function tabbySell() {
    numOfTabbySoldTotal = numOfTabbySoldTotal + tabbyAmountTotal
    currentMoney = currentMoney + tabbyAmountTotal * tabbyPrice
    tabbyAmount = 0
    autoTabbyAmount = 0
    tabbyTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerHTML = calcTabbySellPrice
}

let isFirstTimeTabby = true

function tabbyStocks() {
    var tabbyStocksUp = document.getElementById('stocks-up-tabby')
    var tabbyStocksDown = document.getElementById('stocks-down-tabby')
    if (isFirstTimeTabby) {
        isFirstTimeTabby = false
    } else if (numOfTabbySoldTotal >= 2500) {
        tabbyPrice = 16
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 400) {
        tabbyPrice = Math.max(16, tabbyPrice / 2)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 300) {
        tabbyPrice = Math.max(16, tabbyPrice / 1.75)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 200) {
        tabbyPrice = Math.max(16, tabbyPrice / 1.5)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 100) {
        tabbyPrice = Math.max(16, tabbyPrice / 1.25)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal > 50) {
        tabbyPrice = tabbyPrice / 1
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'none'
    } else if (numOfTabbySoldTotal <= 50 && numOfTabbySoldTotal !== 0) {
        tabbyPrice = Math.min(79, tabbyPrice * 1.5)
        tabbyStocksUp.style.display = 'inline'
        tabbyStocksDown.style.display = 'none'
    } else if (numOfTabbySoldTotal === 0) {
        tabbyPrice = Math.min(79, tabbyPrice * 2)
        tabbyStocksUp.style.display = 'inline'
        tabbyStocksDown.style.display = 'none'
    }
    numOfTabbySoldTotal = 0
    tabbyPrice = Math.floor(tabbyPrice)
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerHTML = calcTabbySellPrice
    document.getElementById('current-tabby-price').innerHTML = tabbyPrice
}

tabbyStocks()
setInterval(tabbyStocks, 61000);

var calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
document.getElementById('tabby-sell-total').innerHTML = calcTabbySellPrice

// Puddle Slime Section

let puddleAmount = 0

let puddleAmountTotal = 0

function clickPuddle() {
    puddleAmount = puddleAmount + clickLevel
    puddleTotal()
}

let numOfPuddleSlimes = 0
let costOfPuddleSlimes = 64000
document.getElementById('puddle-slime-price').innerHTML = costOfPuddleSlimes
document.getElementById('puddle-slime-amount').innerText = numOfPuddleSlimes

function buyPuddleSlimes() {
    if (numOfPuddleSlimes >= 250 && currentMoney >= costOfPuddleSlimes) {
        costOfPuddleSlimes = Math.floor(costOfPuddleSlimes * 1.1)
        document.getElementById('puddle-slime-price').innerHTML = costOfPuddleSlimes
    } else if (numOfPuddleSlimes >= 100 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 512000
        document.getElementById('puddle-slime-price').innerHTML = costOfPuddleSlimes
    } else if (numOfPuddleSlimes >= 50 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 256000
        document.getElementById('puddle-slime-price').innerHTML = costOfPuddleSlimes
    } else if (numOfPuddleSlimes >= 10 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 128000
        document.getElementById('puddle-slime-price').innerHTML = costOfPuddleSlimes
    }
    if (currentMoney >= costOfPuddleSlimes) {
        currentMoney = currentMoney - costOfPuddleSlimes
        numOfPuddleSlimes = numOfPuddleSlimes + 1
    }
    document.getElementById('puddle-slime-amount').innerText = numOfPuddleSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoPuddleMultiplier = 0.2
let puddleLevel = 1
document.getElementById('puddle-level').innerHTML = puddleLevel
let puddleLevelCost = 256000
document.getElementById('puddle-upgrade-price').innerHTML = puddleLevelCost

function levelUpPuddle() {
    if (currentMoney >= puddleLevelCost) {
        puddleLevel = puddleLevel + 1
        autoPuddleMultiplier = autoPuddleMultiplier + 0.2
        currentMoney = currentMoney - puddleLevelCost
        puddleLevelCost = puddleLevelCost * 5
        document.getElementById('puddle-upgrade-price').innerHTML = puddleLevelCost
        document.getElementById('puddle-level').innerHTML = puddleLevel
    }
    if (puddleLevel === 5) {
        document.getElementById('level-up-puddle').style.display = 'none'
        document.getElementById('buy-puddle-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoPuddleAmount = 0
let puddlePrice = 68

function autoPuddle() {
    autoPuddleAmount = autoPuddleAmount + numOfPuddleSlimes * autoPuddleMultiplier
    puddleTotal()
}

autoPuddle()
setInterval(autoPuddle, 1000);

function puddleTotal() {
    puddleAmountTotal = puddleAmount + autoPuddleAmount
    puddleAmountTotal = Math.floor(puddleAmountTotal)
    document.getElementById('puddle-plorts').innerHTML = puddleAmountTotal
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerHTML = calcPuddleSellPrice
}

let numOfPuddleSoldTotal = 0

function puddleSell() {
    numOfPuddleSoldTotal = numOfPuddleSoldTotal + puddleAmountTotal
    currentMoney = currentMoney + puddleAmountTotal * puddlePrice
    puddleAmount = 0
    autoPuddleAmount = 0
    puddleTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerHTML = calcPuddleSellPrice
}

let isFirstTimePuddle = true

function puddleStocks() {
    var puddleStocksUp = document.getElementById('stocks-up-puddle')
    var puddleStocksDown = document.getElementById('stocks-down-puddle')
    if (isFirstTimePuddle) {
        isFirstTimePuddle = false
    } else if (numOfPuddleSoldTotal >= 2500) {
        puddlePrice = 20
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 400) {
        puddlePrice = Math.max(20, puddlePrice / 2)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 300) {
        puddlePrice = Math.max(20, puddlePrice / 1.75)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 200) {
        puddlePrice = Math.max(20, puddlePrice / 1.5)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 100) {
        puddlePrice = Math.max(20, puddlePrice / 1.25)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal > 50) {
        puddlePrice = puddlePrice / 1
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'none'
    } else if (numOfPuddleSoldTotal <= 50 && numOfPuddleSoldTotal !== 0) {
        puddlePrice = Math.min(118, puddlePrice * 1.5)
        puddleStocksUp.style.display = 'inline'
        puddleStocksDown.style.display = 'none'
    } else if (numOfPuddleSoldTotal === 0) {
        puddlePrice = Math.min(118, puddlePrice * 2)
        puddleStocksUp.style.display = 'inline'
        puddleStocksDown.style.display = 'none'
    }
    numOfPuddleSoldTotal = 0
    puddlePrice = Math.floor(puddlePrice)
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerHTML = calcPuddleSellPrice
    document.getElementById('current-puddle-price').innerHTML = puddlePrice
}

puddleStocks()
setInterval(puddleStocks, 61000);

var calcPuddleSellPrice = puddleAmountTotal * puddlePrice
document.getElementById('puddle-sell-total').innerHTML = calcPuddleSellPrice

// Fire Slime Section

let fireAmount = 0

let fireAmountTotal = 0

function clickFire() {
    fireAmount = fireAmount + clickLevel
    fireTotal()
}

let numOfFireSlimes = 0
let costOfFireSlimes = 256000
document.getElementById('fire-slime-price').innerHTML = costOfFireSlimes
document.getElementById('fire-slime-amount').innerText = numOfFireSlimes

function buyFireSlimes() {
    if (numOfFireSlimes >= 250 && currentMoney >= costOfFireSlimes) {
        costOfFireSlimes = Math.floor(costOfFireSlimes * 1.1)
        document.getElementById('fire-slime-price').innerHTML = costOfFireSlimes
    } else if (numOfFireSlimes >= 100 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 2048000
        document.getElementById('fire-slime-price').innerHTML = costOfFireSlimes
    } else if (numOfFireSlimes >= 50 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 1024000
        document.getElementById('fire-slime-price').innerHTML = costOfFireSlimes
    } else if (numOfFireSlimes >= 10 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 512000
        document.getElementById('fire-slime-price').innerHTML = costOfFireSlimes
    }
    if (currentMoney >= costOfFireSlimes) {
        currentMoney = currentMoney - costOfFireSlimes
        numOfFireSlimes = numOfFireSlimes + 1
    }
    document.getElementById('fire-slime-amount').innerText = numOfFireSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoFireMultiplier = 0.2
let fireLevel = 1
document.getElementById('fire-level').innerHTML = fireLevel
let fireLevelCost = 1024000
document.getElementById('fire-upgrade-price').innerHTML = fireLevelCost

function levelUpFire() {
    if (currentMoney >= fireLevelCost) {
        fireLevel = fireLevel + 1
        autoFireMultiplier = autoFireMultiplier + 0.2
        currentMoney = currentMoney - fireLevelCost
        fireLevelCost = fireLevelCost * 5
        document.getElementById('fire-upgrade-price').innerHTML = fireLevelCost
        document.getElementById('fire-level').innerHTML = fireLevel
    }
    if (fireLevel === 5) {
        document.getElementById('level-up-fire').style.display = 'none'
        document.getElementById('buy-fire-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoFireAmount = 0
let firePrice = 102

function autoFire() {
    autoFireAmount = autoFireAmount + numOfFireSlimes * autoFireMultiplier
    fireTotal()
}

autoFire()
setInterval(autoFire, 1000);


function fireTotal() {
    fireAmountTotal = fireAmount + autoFireAmount
    fireAmountTotal = Math.floor(fireAmountTotal)
    document.getElementById('fire-plorts').innerHTML = fireAmountTotal
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerHTML = calcFireSellPrice
}

let numOfFireSoldTotal = 0

function fireSell() {
    numOfFireSoldTotal = numOfFireSoldTotal + fireAmountTotal
    currentMoney = currentMoney + fireAmountTotal * firePrice
    fireAmount = 0
    autoFireAmount = 0
    fireTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerHTML = calcFireSellPrice
}

let isFirstTimeFire = true

function fireStocks() {
    var fireStocksUp = document.getElementById('stocks-up-fire')
    var fireStocksDown = document.getElementById('stocks-down-fire')
    if (isFirstTimeFire) {
        isFirstTimeFire = false
    } else if (numOfFireSoldTotal >= 2500) {
        firePrice = 24
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 400) {
        firePrice = Math.max(24, firePrice / 2)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 300) {
        firePrice = Math.max(24, firePrice / 1.75)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 200) {
        firePrice = Math.max(24, firePrice / 1.5)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 100) {
        firePrice = Math.max(24, firePrice / 1.25)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal > 50) {
        firePrice = firePrice / 1
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'none'
    } else if (numOfFireSoldTotal <= 50 && numOfFireSoldTotal !== 0) {
        firePrice = Math.min(236, firePrice * 1.5)
        fireStocksUp.style.display = 'inline'
        fireStocksDown.style.display = 'none'
    } else if (numOfFireSoldTotal === 0) {
        firePrice = Math.min(236, firePrice * 2)
        fireStocksUp.style.display = 'inline'
        fireStocksDown.style.display = 'none'
    }
    numOfFireSoldTotal = 0
    firePrice = Math.floor(firePrice)
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerHTML = calcFireSellPrice
    document.getElementById('current-fire-price').innerHTML = firePrice
}

fireStocks()
setInterval(fireStocks, 61000);

var calcFireSellPrice = fireAmountTotal * firePrice
document.getElementById('fire-sell-total').innerHTML = calcFireSellPrice

// Honey Slime Section

let honeyAmount = 0
let honeyAmountTotal = 0

function clickHoney() {
    honeyAmount = honeyAmount + clickLevel
    honeyTotal()
}

let numOfHoneySlimes = 0
let costOfHoneySlimes = 1024000
document.getElementById('honey-slime-price').innerHTML = costOfHoneySlimes
document.getElementById('honey-slime-amount').innerText = numOfHoneySlimes

function buyHoneySlimes() {
    if (numOfHoneySlimes >= 250 && currentMoney >= costOfHoneySlimes) {
        costOfHoneySlimes = Math.floor(costOfHoneySlimes * 1.1)
        document.getElementById('honey-slime-price').innerHTML = costOfHoneySlimes
    } else if (numOfHoneySlimes >= 100 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 8192000
        document.getElementById('honey-slime-price').innerHTML = costOfHoneySlimes
    } else if (numOfHoneySlimes >= 50 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 4096000
        document.getElementById('honey-slime-price').innerHTML = costOfHoneySlimes
    } else if (numOfHoneySlimes >= 10 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 2048000
        document.getElementById('honey-slime-price').innerHTML = costOfHoneySlimes
    }
    if (currentMoney >= costOfHoneySlimes) {
        currentMoney = currentMoney - costOfHoneySlimes
        numOfHoneySlimes = numOfHoneySlimes + 1
    }
    document.getElementById('honey-slime-amount').innerText = numOfHoneySlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoHoneyMultiplier = 0.2
let honeyLevel = 1
document.getElementById('honey-level').innerHTML = honeyLevel
let honeyLevelCost = 4096000
document.getElementById('honey-upgrade-price').innerHTML = honeyLevelCost

function levelUpHoney() {
    if (currentMoney >= honeyLevelCost) {
        honeyLevel = honeyLevel + 1
        autoHoneyMultiplier = autoHoneyMultiplier + 0.2
        currentMoney = currentMoney - honeyLevelCost
        honeyLevelCost = honeyLevelCost * 5
        document.getElementById('honey-upgrade-price').innerHTML = honeyLevelCost
        document.getElementById('honey-level').innerHTML = honeyLevel
    }
    if (honeyLevel === 5) {
        document.getElementById('level-up-honey').style.display = 'none'
        document.getElementById('buy-honey-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoHoneyAmount = 0
let honeyPrice = 153

function autoHoney() {
    autoHoneyAmount = autoHoneyAmount + numOfHoneySlimes * autoHoneyMultiplier
    honeyTotal()
}

autoHoney()
setInterval(autoHoney, 1000);


function honeyTotal() {
    honeyAmountTotal = honeyAmount + autoHoneyAmount
    honeyAmountTotal = Math.floor(honeyAmountTotal)
    document.getElementById('honey-plorts').innerHTML = honeyAmountTotal
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerHTML = calcHoneySellPrice
}

let numOfHoneySoldTotal = 0

function honeySell() {
    numOfHoneySoldTotal = numOfHoneySoldTotal + honeyAmountTotal
    currentMoney = currentMoney + honeyAmountTotal * honeyPrice
    honeyAmount = 0
    autoHoneyAmount = 0
    honeyTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerHTML = calcHoneySellPrice
}

let isFirstTimeHoney = true

function honeyStocks() {
    var honeyStocksUp = document.getElementById('stocks-up-honey')
    var honeyStocksDown = document.getElementById('stocks-down-honey')
    if (isFirstTimeHoney) {
        isFirstTimeHoney = false
    } else if (numOfHoneySoldTotal >= 2500) {
        honeyPrice = 28
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 400) {
        honeyPrice = Math.max(28, honeyPrice / 2)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 300) {
        honeyPrice = Math.max(28, honeyPrice / 1.75)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 200) {
        honeyPrice = Math.max(28, honeyPrice / 1.5)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 100) {
        honeyPrice = Math.max(28, honeyPrice / 1.25)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal > 50) {
        honeyPrice = honeyPrice / 1
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'none'
    } else if (numOfHoneySoldTotal <= 50 && numOfHoneySoldTotal !== 0) {
        honeyPrice = Math.min(354, honeyPrice * 1.5)
        honeyStocksUp.style.display = 'inline'
        honeyStocksDown.style.display = 'none'
    } else if (numOfHoneySoldTotal === 0) {
        honeyPrice = Math.min(354, honeyPrice * 2)
        honeyStocksUp.style.display = 'inline'
        honeyStocksDown.style.display = 'none'
    }
    numOfHoneySoldTotal = 0
    honeyPrice = Math.floor(honeyPrice)
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerHTML = calcHoneySellPrice
    document.getElementById('current-honey-price').innerHTML = honeyPrice
}

honeyStocks()
setInterval(honeyStocks, 61000);

var calcHoneySellPrice = honeyAmountTotal * honeyPrice
document.getElementById('honey-sell-total').innerHTML = calcHoneySellPrice

// Boom Slime Section

let boomAmount = 0
let boomAmountTotal = 0

function clickBoom() {
    boomAmount = boomAmount + clickLevel
    boomTotal()
}

let numOfBoomSlimes = 0
let costOfBoomSlimes = 4096000
document.getElementById('boom-slime-price').innerHTML = costOfBoomSlimes
document.getElementById('boom-slime-amount').innerText = numOfBoomSlimes

function buyBoomSlimes() {
    if (numOfBoomSlimes >= 250 && currentMoney >= costOfBoomSlimes) {
        costOfBoomSlimes = Math.floor(costOfBoomSlimes * 1.1)
        document.getElementById('boom-slime-price').innerHTML = costOfBoomSlimes
    } else if (numOfBoomSlimes >= 100 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 32768000
        document.getElementById('boom-slime-price').innerHTML = costOfBoomSlimes
    } else if (numOfBoomSlimes >= 50 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 16384000
        document.getElementById('boom-slime-price').innerHTML = costOfBoomSlimes
    } else if (numOfBoomSlimes >= 10 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 8192000
        document.getElementById('boom-slime-price').innerHTML = costOfBoomSlimes
    }
    if (currentMoney >= costOfBoomSlimes) {
        currentMoney = currentMoney - costOfBoomSlimes
        numOfBoomSlimes = numOfBoomSlimes + 1
    }
    document.getElementById('boom-slime-amount').innerText = numOfBoomSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoBoomMultiplier = 0.2
let boomLevel = 1
document.getElementById('boom-level').innerHTML = boomLevel
let boomLevelCost = 16384000
document.getElementById('boom-upgrade-price').innerHTML = boomLevelCost

function levelUpBoom() {
    if (currentMoney >= boomLevelCost) {
        boomLevel = boomLevel + 1
        autoBoomMultiplier = autoBoomMultiplier + 0.2
        currentMoney = currentMoney - boomLevelCost
        boomLevelCost = boomLevelCost * 5
        document.getElementById('boom-upgrade-price').innerHTML = boomLevelCost
        document.getElementById('boom-level').innerHTML = boomLevel
    }
    if (boomLevel === 5) {
        document.getElementById('level-up-boom').style.display = 'none'
        document.getElementById('buy-boom-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoBoomAmount = 0
let boomPrice = 230

function autoBoom() {
    autoBoomAmount = autoBoomAmount + numOfBoomSlimes * autoBoomMultiplier
    boomTotal()
}

autoBoom()
setInterval(autoBoom, 1000);


function boomTotal() {
    boomAmountTotal = boomAmount + autoBoomAmount
    boomAmountTotal = Math.floor(boomAmountTotal)
    document.getElementById('boom-plorts').innerHTML = boomAmountTotal
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerHTML = calcBoomSellPrice
}

let numOfBoomSoldTotal = 0

function boomSell() {
    numOfBoomSoldTotal = numOfBoomSoldTotal + boomAmountTotal
    currentMoney = currentMoney + boomAmountTotal * boomPrice
    boomAmount = 0
    autoBoomAmount = 0
    boomTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerHTML = calcBoomSellPrice
}

let isFirstTimeBoom = true

function boomStocks() {
    var boomStocksUp = document.getElementById('stocks-up-boom')
    var boomStocksDown = document.getElementById('stocks-down-boom')
    if (isFirstTimeBoom) {
        isFirstTimeBoom = false
    } else if (numOfBoomSoldTotal >= 2500) {
        boomPrice = 32
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 400) {
        boomPrice = Math.max(32, boomPrice / 2)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 300) {
        boomPrice = Math.max(32, boomPrice / 1.75)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 200) {
        boomPrice = Math.max(32, boomPrice / 1.5)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 100) {
        boomPrice = Math.max(32, boomPrice / 1.25)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal > 50) {
        boomPrice = boomPrice / 1
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'none'
    } else if (numOfBoomSoldTotal <= 50 && numOfBoomSoldTotal !== 0) {
        boomPrice = Math.min(531, boomPrice * 1.5)
        boomStocksUp.style.display = 'inline'
        boomStocksDown.style.display = 'none'
    } else if (numOfBoomSoldTotal === 0) {
        boomPrice = Math.min(531, boomPrice * 2)
        boomStocksUp.style.display = 'inline'
        boomStocksDown.style.display = 'none'
    }
    numOfBoomSoldTotal = 0
    boomPrice = Math.floor(boomPrice)
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerHTML = calcBoomSellPrice
    document.getElementById('current-boom-price').innerHTML = boomPrice
}

boomStocks()
setInterval(boomStocks, 61000);

var calcBoomSellPrice = boomAmountTotal * boomPrice
document.getElementById('boom-sell-total').innerHTML = calcBoomSellPrice

// Hunter Slime Section

let hunterAmount = 0
let hunterAmountTotal = 0

function clickHunter() {
    hunterAmount = hunterAmount + clickLevel
    hunterTotal()
}

let numOfHunterSlimes = 0
let costOfHunterSlimes = 16384000
document.getElementById('hunter-slime-price').innerHTML = costOfHunterSlimes
document.getElementById('hunter-slime-amount').innerText = numOfHunterSlimes

function buyHunterSlimes() {
    if (numOfHunterSlimes >= 250 && currentMoney >= costOfHunterSlimes) {
        costOfHunterSlimes = Math.floor(costOfHunterSlimes * 1.1)
        document.getElementById('hunter-slime-price').innerHTML = costOfHunterSlimes
    } else if (numOfHunterSlimes >= 100 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 131072000
        document.getElementById('hunter-slime-price').innerHTML = costOfHunterSlimes
    } else if (numOfHunterSlimes >= 50 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 65536000
        document.getElementById('hunter-slime-price').innerHTML = costOfHunterSlimes
    } else if (numOfHunterSlimes >= 10 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 32768000
        document.getElementById('hunter-slime-price').innerHTML = costOfHunterSlimes
    }
    if (currentMoney >= costOfHunterSlimes) {
        currentMoney = currentMoney - costOfHunterSlimes
        numOfHunterSlimes = numOfHunterSlimes + 1
    }
    document.getElementById('hunter-slime-amount').innerText = numOfHunterSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoHunterMultiplier = 0.2
let hunterLevel = 1
document.getElementById('hunter-level').innerHTML = hunterLevel
let hunterLevelCost = 65536000
document.getElementById('hunter-upgrade-price').innerHTML = hunterLevelCost

function levelUpHunter() {
    if (currentMoney >= hunterLevelCost) {
        hunterLevel = hunterLevel + 1
        autoHunterMultiplier = autoHunterMultiplier + 0.2
        currentMoney = currentMoney - hunterLevelCost
        hunterLevelCost = hunterLevelCost * 5
        document.getElementById('hunter-upgrade-price').innerHTML = hunterLevelCost
        document.getElementById('hunter-level').innerHTML = hunterLevel
    }
    if (hunterLevel === 5) {
        document.getElementById('level-up-hunter').style.display = 'none'
        document.getElementById('buy-hunter-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoHunterAmount = 0
let hunterPrice = 345

function autoHunter() {
    autoHunterAmount = autoHunterAmount + numOfHunterSlimes * autoHunterMultiplier
    hunterTotal()
}

autoHunter()
setInterval(autoHunter, 1000);


function hunterTotal() {
    hunterAmountTotal = hunterAmount + autoHunterAmount
    hunterAmountTotal = Math.floor(hunterAmountTotal)
    document.getElementById('hunter-plorts').innerHTML = hunterAmountTotal
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerHTML = calcHunterSellPrice
}

let numOfHunterSoldTotal = 0

function hunterSell() {
    numOfHunterSoldTotal = numOfHunterSoldTotal + hunterAmountTotal
    currentMoney = currentMoney + hunterAmountTotal * hunterPrice
    hunterAmount = 0
    autoHunterAmount = 0
    hunterTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerHTML = calcHunterSellPrice
}

let isFirstTimeHunter = true

function hunterStocks() {
    var hunterStocksUp = document.getElementById('stocks-up-hunter')
    var hunterStocksDown = document.getElementById('stocks-down-hunter')
    if (isFirstTimeHunter) {
        isFirstTimeHunter = false
    } else if (numOfHunterSoldTotal >= 2500) {
        hunterPrice = 36
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 400) {
        hunterPrice = Math.max(36, hunterPrice / 2)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 300) {
        hunterPrice = Math.max(36, hunterPrice / 1.75)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 200) {
        hunterPrice = Math.max(36, hunterPrice / 1.5)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 100) {
        hunterPrice = Math.max(36, hunterPrice / 1.25)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal > 50) {
        hunterPrice = hunterPrice / 1
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'none'
    } else if (numOfHunterSoldTotal <= 50 && numOfHunterSoldTotal !== 0) {
        hunterPrice = Math.min(796, hunterPrice * 1.5)
        hunterStocksUp.style.display = 'inline'
        hunterStocksDown.style.display = 'none'
    } else if (numOfHunterSoldTotal === 0) {
        hunterPrice = Math.min(796, hunterPrice * 2)
        hunterStocksUp.style.display = 'inline'
        hunterStocksDown.style.display = 'none'
    }
    numOfHunterSoldTotal = 0
    hunterPrice = Math.floor(hunterPrice)
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerHTML = calcHunterSellPrice
    document.getElementById('current-hunter-price').innerHTML = hunterPrice
}

hunterStocks()
setInterval(hunterStocks, 61000);

var calcHunterSellPrice = hunterAmountTotal * hunterPrice
document.getElementById('hunter-sell-total').innerHTML = calcHunterSellPrice

    // Rad Slime Section

let radAmount = 0
let radAmountTotal = 0

function clickRad() {
    radAmount = radAmount + clickLevel
    radTotal()
}

let numOfRadSlimes = 0
let costOfRadSlimes = 65536000
document.getElementById('rad-slime-price').innerHTML = costOfRadSlimes
document.getElementById('rad-slime-amount').innerText = numOfRadSlimes

function buyRadSlimes() {
    if (numOfRadSlimes >= 250 && currentMoney >= costOfRadSlimes) {
        costOfRadSlimes = Math.floor(costOfRadSlimes * 1.1)
        document.getElementById('rad-slime-price').innerHTML = costOfRadSlimes
    } else if (numOfRadSlimes >= 100 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 524288000
        document.getElementById('rad-slime-price').innerHTML = costOfRadSlimes
    } else if (numOfRadSlimes >= 50 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 262144000
        document.getElementById('rad-slime-price').innerHTML = costOfRadSlimes
    } else if (numOfRadSlimes >= 10 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 131072000
        document.getElementById('rad-slime-price').innerHTML = costOfRadSlimes
    }
    if (currentMoney >= costOfRadSlimes) {
        currentMoney = currentMoney - costOfRadSlimes
        numOfRadSlimes = numOfRadSlimes + 1
    }
    document.getElementById('rad-slime-amount').innerText = numOfRadSlimes
    document.getElementById('current-money').innerText = currentMoney
}

let autoRadMultiplier = 0.2
let radLevel = 1
document.getElementById('rad-level').innerHTML = radLevel
let radLevelCost = 262144000
document.getElementById('rad-upgrade-price').innerHTML = radLevelCost

function levelUpRad() {
    if (currentMoney >= radLevelCost) {
        radLevel = radLevel + 1
        autoRadMultiplier = autoRadMultiplier + 0.2
        currentMoney = currentMoney - radLevelCost
        radLevelCost = radLevelCost * 5
        document.getElementById('rad-upgrade-price').innerHTML = radLevelCost
        document.getElementById('rad-level').innerHTML = radLevel
    }
    if (radLevel === 5) {
        document.getElementById('level-up-rad').style.display = 'none'
        document.getElementById('buy-rad-slimes').classList = 'w-100 h-100'
    }
    document.getElementById('current-money').innerText = currentMoney
}

let autoRadAmount = 0
let radPrice = 518

function autoRad() {
    autoRadAmount = autoRadAmount + numOfRadSlimes * autoRadMultiplier
    radTotal()
}

autoRad()
setInterval(autoRad, 1000);


function radTotal() {
    radAmountTotal = radAmount + autoRadAmount
    radAmountTotal = Math.floor(radAmountTotal)
    document.getElementById('rad-plorts').innerHTML = radAmountTotal
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerHTML = calcRadSellPrice
}

let numOfRadSoldTotal = 0

function radSell() {
    numOfRadSoldTotal = numOfRadSoldTotal + radAmountTotal
    currentMoney = currentMoney + radAmountTotal * radPrice
    radAmount = 0
    autoRadAmount = 0
    radTotal()
    document.getElementById('current-money').innerText = currentMoney
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerHTML = calcRadSellPrice
}

let isFirstTimeRad = true

function radStocks() {
    var radStocksUp = document.getElementById('stocks-up-rad')
    var radStocksDown = document.getElementById('stocks-down-rad')
    if (isFirstTimeRad) {
        isFirstTimeRad = false
    } else if (numOfRadSoldTotal >= 2500) {
        radPrice = 40
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 400) {
        radPrice = Math.max(40, radPrice / 2)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 300) {
        radPrice = Math.max(40, radPrice / 1.75)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 200) {
        radPrice = Math.max(40, radPrice / 1.5)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 100) {
        radPrice = Math.max(40, radPrice / 1.25)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal > 50) {
        radPrice = radPrice / 1
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'none'
    } else if (numOfRadSoldTotal <= 50 && numOfRadSoldTotal !== 0) {
        radPrice = Math.min(1194, radPrice * 1.5)
        radStocksUp.style.display = 'inline'
        radStocksDown.style.display = 'none'
    } else if (numOfRadSoldTotal === 0) {
        radPrice = Math.min(1194, radPrice * 2)
        radStocksUp.style.display = 'inline'
        radStocksDown.style.display = 'none'
    }
    numOfRadSoldTotal = 0
    radPrice = Math.floor(radPrice)
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerHTML = calcRadSellPrice
    document.getElementById('current-rad-price').innerHTML = radPrice
}

radStocks()
setInterval(radStocks, 61000);

var calcRadSellPrice = radAmountTotal * radPrice
document.getElementById('rad-sell-total').innerHTML = calcRadSellPrice
