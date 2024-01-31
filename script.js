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
        tabbyPrice = 8
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
        puddlePrice = 8
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
