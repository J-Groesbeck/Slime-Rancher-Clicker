if (window.location.pathname.includes('game.html')) {
    window.addEventListener("beforeunload", (event) => {
        // Cancel the event as stated by the standard.
        event.preventDefault();
        // Chrome requires returnValue to be set.
        event.returnValue = '';
        // Display a message to notify the user to save before closing the page
        return "Remember to save your game before closing the page!";
    });
}

let currentMoney = 0
document.getElementById('current-money').innerText = currentMoney.toLocaleString()

//Leveling and Ranking up player's click

let clickLevel = 1
document.getElementById('click-level').innerText = clickLevel
let clickLevelCost = 1000
document.getElementById('click-level-cost').innerText = clickLevelCost.toLocaleString()

function levelUpClick() {
    if (currentMoney >= clickLevelCost) {
        clickLevel = clickLevel + 1
        currentMoney = currentMoney - clickLevelCost
        clickLevelCost = clickLevelCost * 10
        document.getElementById('current-money').innerText = currentMoney.toLocaleString()
        document.getElementById('click-level-cost').innerText = clickLevelCost.toLocaleString()
        document.getElementById('click-level').innerText = clickLevel
        playPurchaseUpgradeSound()
    }
    if (clickLevel === 5) {
        document.getElementById('level-up-click').style.display = 'none'
    }
}

let clickRank = 1
let clickRankBtn = document.getElementById('rank-up-click')
clickRankBtn.style.display = 'none'
let clickRankCost = 1000
document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
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
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Rock';
        if (numOfRockSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerRock.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerRock.style.display = 'none';
        clickerPhosphor.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Phosphor';
        if (numOfPhosphorSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerPhosphor.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerPhosphor.style.display = 'none';
        clickerTabby.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Tabby';
        if (numOfTabbySlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerTabby.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerTabby.style.display = 'none';
        clickerPuddle.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Puddle';
        if (numOfPuddleSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerPuddle.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerPuddle.style.display = 'none';
        clickerFire.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Fire';
        if (numOfFireSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerFire.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerFire.style.display = 'none';
        clickerHoney.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Honey';
        if (numOfHoneySlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerHoney.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerHoney.style.display = 'none';
        clickerBoom.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString();
        document.getElementById('click-rank').innerText = 'Boom';
        if (numOfBoomSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerBoom.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerBoom.style.display = 'none';
        clickerHunter.style.display = 'inline';
        clickRankCost = clickRankCost * 4;
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Hunter';
        if (numOfHunterSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerHunter.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerHunter.style.display = 'none';
        clickerRad.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Rad';
        if (numOfRadSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerRad.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerRad.style.display = 'none';
        clickerCrystal.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Crystal';
        if (numOfCrystalSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerCrystal.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerCrystal.style.display = 'none';
        clickerSaber.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Saber';
        if (numOfSaberSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerSaber.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerSaber.style.display = 'none';
        clickerDervish.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Dervish';
        if (numOfDervishSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerDervish.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerDervish.style.display = 'none';
        clickerQuantum.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Quantum';
        if (numOfQuantumSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerQuantum.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerQuantum.style.display = 'none';
        clickerTangle.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Tangle';
        if (numOfTangleSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerTangle.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerTangle.style.display = 'none';
        clickerMosaic.style.display = 'inline';
        clickRankCost = clickRankCost * 4
        document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
        document.getElementById('click-rank').innerText = 'Mosaic';
        if (numOfMosaicSlimes < 50) {
            clickRankBtn.style.display = 'none'
        }
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    } else if (currentMoney >= clickRankCost && clickerMosaic.style.display === 'inline') {
        currentMoney = currentMoney - clickRankCost;
        clickerMosaic.style.display = 'none';
        clickerGold.style.display = 'inline';
        document.getElementById('click-rank').innerText = 'Gold';
        clickRankBtn.style.display = 'none'
        playPurchaseUpgradeSound()
        clickRank = clickRank + 1
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

// checks the rank when loading saves

function checkRank() {
    switch (clickRank) {
        case 1:
            if (numOfPinkSlimes === 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 2:
            clickerPink.style.display = 'none';
            clickerRock.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Rock';
            clickRankCost = clickRankCost * 4
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfRockSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 3:
            clickerPink.style.display = 'none';
            clickerPhosphor.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Phosphor';
            clickRankCost = clickRankCost * 4 ** 2
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfPhosphorSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 4:
            clickerPink.style.display = 'none';
            clickerTabby.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Tabby';
            clickRankCost = clickRankCost * 4 ** 3
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfTabbySlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 5:
            clickerPink.style.display = 'none';
            clickerPuddle.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Puddle';
            clickRankCost = clickRankCost * 4 ** 4
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfPuddleSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 6:
            clickerPink.style.display = 'none';
            clickerFire.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Fire';
            clickRankCost = clickRankCost * 4 ** 5
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfFireSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 7:
            clickerPink.style.display = 'none';
            clickerHoney.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Honey';
            clickRankCost = clickRankCost * 4 ** 6
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfHoneySlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 8:
            clickerPink.style.display = 'none';
            clickerBoom.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Boom';
            clickRankCost = clickRankCost * 4 ** 7
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfBoomSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 9:
            clickerPink.style.display = 'none';
            clickerHunter.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Hunter';
            clickRankCost = clickRankCost * 4 ** 8
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfHunterSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 10:
            clickerPink.style.display = 'none';
            clickerRad.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Rad';
            clickRankCost = clickRankCost * 4 ** 9
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfRadSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 11:
            clickerPink.style.display = 'none';
            clickerCrystal.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Crystal';
            clickRankCost = clickRankCost * 4 ** 10
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfCrystalSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 12:
            clickerPink.style.display = 'none';
            clickerSaber.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Saber';
            clickRankCost = clickRankCost * 4 ** 11
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfSaberSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 13:
            clickerPink.style.display = 'none';
            clickerDervish.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Dervish';
            clickRankCost = clickRankCost * 4 ** 12
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfDervishSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 14:
            clickerPink.style.display = 'none';
            clickerQuantum.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Quantum';
            clickRankCost = clickRankCost * 4 ** 13
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfQuantumSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 15:
            clickerPink.style.display = 'none';
            clickerTangle.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Tangle';
            clickRankCost = clickRankCost * 4 ** 14
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfTangleSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 16:
            clickerPink.style.display = 'none';
            clickerMosaic.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Mosaic';
            clickRankCost = clickRankCost * 4 ** 15
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (numOfMosaicSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 17:
            clickerPink.style.display = 'none';
            clickerGold.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Gold';
            clickRankCost = clickRankCost * 4 ** 16
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            document.getElementById('rank-up-click').style.display = 'none'
            break;
    }
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
document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
document.getElementById('pink-slime-amount').innerText = numOfPinkSlimes.toLocaleString()

function buyPinkSlimes() {
    if (currentMoney >= costOfPinkSlimes) {
        currentMoney = currentMoney - costOfPinkSlimes
        numOfPinkSlimes = numOfPinkSlimes + 1
        playPurchaseSound()
        calcPPS()
    }
    if (numOfPinkSlimes >= 250 && currentMoney >= costOfPinkSlimes) {
        costOfPinkSlimes = Math.floor(costOfPinkSlimes * 1.1)
        document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
    } else if (numOfPinkSlimes >= 100 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 2000
        document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
    } else if (numOfPinkSlimes >= 50 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 1000
        document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
    } else if (numOfPinkSlimes >= 10 && !(numOfPinkSlimes >= 250)) {
        costOfPinkSlimes = 500
        document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
    }
    document.getElementById('pink-slime-amount').innerText = numOfPinkSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfPinkSlimes >= 50 && clickRank === 1 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let pinkLevel = 1
let autoPinkMultiplier = 0.2 * pinkLevel
let pinkLevelCost = 1000
document.getElementById('pink-upgrade-price').innerText = pinkLevelCost.toLocaleString()

function levelUpPink() {
    if (currentMoney >= pinkLevelCost) {
        pinkLevel = pinkLevel + 1
        autoPinkMultiplier = 0.2 * pinkLevel
        currentMoney = currentMoney - pinkLevelCost
        pinkLevelCost = pinkLevelCost * 5
        document.getElementById('pink-upgrade-price').innerText = pinkLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcPPS()
    }
    if (pinkLevel === 5) {
        document.getElementById('level-up-pink').style.display = 'none'
        document.getElementById('buy-pink-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        console.log('hello')
        document.getElementById('pink-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcPPS() {
    let pinkPerSec = numOfPinkSlimes * autoPinkMultiplier
    document.getElementById('pink-per-second').innerText = pinkPerSec.toFixed(1)
}
calcPPS()

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
    document.getElementById('pink-plorts').innerText = pinkAmountTotal.toLocaleString()
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerText = calcPinkSellPrice.toLocaleString()
}


let numOfPinkSoldTotal = 0

function pinkSell() {
    numOfPinkSoldTotal = numOfPinkSoldTotal + pinkAmountTotal
    currentMoney = currentMoney + pinkAmountTotal * pinkPrice
    pinkAmount = 0
    autoPinkAmount = 0
    pinkTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerText = calcPinkSellPrice.toLocaleString()
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
        pinkPrice = Math.min(25, pinkPrice * 1.5)
        pinkStocksUp.style.display = 'inline'
        pinkStocksDown.style.display = 'none'
    } else if (numOfPinkSoldTotal === 0) {
        pinkPrice = Math.min(25, pinkPrice * 2)
        pinkStocksUp.style.display = 'inline'
        pinkStocksDown.style.display = 'none'
    }
    numOfPinkSoldTotal = 0
    pinkPrice = Math.floor(pinkPrice)
    calcPinkSellPrice = pinkAmountTotal * pinkPrice
    document.getElementById('pink-sell-total').innerText = calcPinkSellPrice.toLocaleString()
    document.getElementById('current-pink-price').innerText = pinkPrice.toLocaleString()
}

pinkStocks()
setInterval(pinkStocks, 61000);

var calcPinkSellPrice = pinkAmountTotal * pinkPrice
document.getElementById('pink-sell-total').innerText = calcPinkSellPrice.toLocaleString()

//Rock Slime Section

let rockAmount = 0

let rockAmountTotal = 0

function clickRock() {
    rockAmount = rockAmount + clickLevel
    rockTotal()
}

let numOfRockSlimes = 0
let costOfRockSlimes = 1000
document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
document.getElementById('rock-slime-amount').innerText = numOfRockSlimes.toLocaleString()

function buyRockSlimes() {
    if (currentMoney >= costOfRockSlimes) {
        currentMoney = currentMoney - costOfRockSlimes
        numOfRockSlimes = numOfRockSlimes + 1
        playPurchaseSound()
        calcRPS()
    }
    if (numOfRockSlimes >= 250 && currentMoney >= costOfRockSlimes) {
        costOfRockSlimes = Math.floor(costOfRockSlimes * 1.1)
        document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
    } else if (numOfRockSlimes >= 100 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 8000
        document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
    } else if (numOfRockSlimes >= 50 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 4000
        document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
    } else if (numOfRockSlimes >= 10 && !(numOfRockSlimes >= 250)) {
        costOfRockSlimes = 2000
        document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
    }
    document.getElementById('rock-slime-amount').innerText = numOfRockSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfRockSlimes >= 50 && clickRank === 2 && clickRankBtn.style.display === 'none') {
        console.log('hello')
        clickRankBtn.style.display = 'inline'
    }
}

let rockLevel = 1
let autoRockMultiplier = 0.2 * rockLevel
let rockLevelCost = 4000
document.getElementById('rock-upgrade-price').innerText = rockLevelCost.toLocaleString()

function levelUpRock() {
    if (currentMoney >= rockLevelCost) {
        rockLevel = rockLevel + 1
        autoRockMultiplier = 0.2 * rockLevel
        currentMoney = currentMoney - rockLevelCost
        rockLevelCost = rockLevelCost * 5
        document.getElementById('rock-upgrade-price').innerText = rockLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcRPS()
    }
    if (rockLevel === 5) {
        document.getElementById('level-up-rock').style.display = 'none'
        document.getElementById('buy-rock-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcRPS() {
    let rockPerSec = numOfRockSlimes * autoRockMultiplier
    document.getElementById('rock-per-second').innerText = rockPerSec.toFixed(1)
}
calcRPS()

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
    document.getElementById('rock-plorts').innerText = rockAmountTotal.toLocaleString()
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerText = calcRockSellPrice.toLocaleString()
}

let numOfRockSoldTotal = 0

function rockSell() {
    numOfRockSoldTotal = numOfRockSoldTotal + rockAmountTotal
    currentMoney = currentMoney + rockAmountTotal * rockPrice
    rockAmount = 0
    autoRockAmount = 0
    rockTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerText = calcRockSellPrice.toLocaleString()
}

let isFirstTimeRock = true

function rockStocks() {
    var rockStocksUp = document.getElementById('stocks-up-rock')
    var rockStocksDown = document.getElementById('stocks-down-rock')
    if (isFirstTimeRock) {
        isFirstTimeRock = false
    } else if (numOfRockSoldTotal >= 2500) {
        rockPrice = 15
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 400) {
        rockPrice = Math.max(15, rockPrice / 2)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 300) {
        rockPrice = Math.max(15, rockPrice / 1.75)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 200) {
        rockPrice = Math.max(15, rockPrice / 1.5)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal >= 100) {
        rockPrice = Math.max(15, rockPrice / 1.25)
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'inline'
    } else if (numOfRockSoldTotal > 50) {
        rockPrice = rockPrice / 1
        rockStocksUp.style.display = 'none'
        rockStocksDown.style.display = 'none'
    } else if (numOfRockSoldTotal <= 50 && numOfRockSoldTotal !== 0) {
        rockPrice = Math.min(75, rockPrice * 1.5)
        rockStocksUp.style.display = 'inline'
        rockStocksDown.style.display = 'none'
    } else if (numOfRockSoldTotal === 0) {
        rockPrice = Math.min(75, rockPrice * 2)
        rockStocksUp.style.display = 'inline'
        rockStocksDown.style.display = 'none'
    }
    numOfRockSoldTotal = 0
    rockPrice = Math.floor(rockPrice)
    calcRockSellPrice = rockAmountTotal * rockPrice
    document.getElementById('rock-sell-total').innerText = calcRockSellPrice.toLocaleString()
    document.getElementById('current-rock-price').innerText = rockPrice.toLocaleString()
}

rockStocks()
setInterval(rockStocks, 61000);

var calcRockSellPrice = rockAmountTotal * rockPrice
document.getElementById('rock-sell-total').innerText = calcRockSellPrice.toLocaleString()

// Phosphor Slime Section

let phosphorAmount = 0

let phosphorAmountTotal = 0

function clickPhosphor() {
    phosphorAmount = phosphorAmount + clickLevel
    phosphorTotal()
}

let numOfPhosphorSlimes = 0
let costOfPhosphorSlimes = 4000
document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
document.getElementById('phosphor-slime-amount').innerText = numOfPhosphorSlimes.toLocaleString()

function buyPhosphorSlimes() {
    if (currentMoney >= costOfPhosphorSlimes) {
        currentMoney = currentMoney - costOfPhosphorSlimes
        numOfPhosphorSlimes = numOfPhosphorSlimes + 1
        playPurchaseSound()
        calcPhPS()
    }
    if (numOfPhosphorSlimes >= 250 && currentMoney >= costOfPhosphorSlimes) {
        costOfPhosphorSlimes = Math.floor(costOfPhosphorSlimes * 1.1)
        document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
    } else if (numOfPhosphorSlimes >= 100 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 32000
        document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
    } else if (numOfPhosphorSlimes >= 50 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 16000
        document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
    } else if (numOfPhosphorSlimes >= 10 && !(numOfPhosphorSlimes >= 250)) {
        costOfPhosphorSlimes = 8000
        document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
    }
    document.getElementById('phosphor-slime-amount').innerText = numOfPhosphorSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfPhosphorSlimes >= 50 && clickRank === 3 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let phosphorLevel = 1
let autoPhosphorMultiplier = 0.2 * phosphorLevel
let phosphorLevelCost = 16000
document.getElementById('phosphor-upgrade-price').innerText = phosphorLevelCost.toLocaleString()

function levelUpPhosphor() {
    if (currentMoney >= phosphorLevelCost) {
        phosphorLevel = phosphorLevel + 1
        autoPhosphorMultiplier = 0.2 * phosphorLevel
        currentMoney = currentMoney - phosphorLevelCost
        phosphorLevelCost = phosphorLevelCost * 5
        document.getElementById('phosphor-upgrade-price').innerText = phosphorLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcPhPS()
    }
    if (phosphorLevel === 5) {
        document.getElementById('level-up-phosphor').style.display = 'none'
        document.getElementById('buy-phosphor-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('phosphor-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcPhPS() {
    let phosphorPerSec = numOfPhosphorSlimes * autoPhosphorMultiplier
    document.getElementById('phosphor-per-second').innerText = phosphorPerSec.toFixed(1)
}
calcPhPS()

let autoPhosphorAmount = 0
let phosphorPrice = 75

function autoPhosphor() {
    autoPhosphorAmount = autoPhosphorAmount + numOfPhosphorSlimes * autoPhosphorMultiplier
    phosphorTotal()
}

autoPhosphor()
setInterval(autoPhosphor, 1000);

function phosphorTotal() {
    phosphorAmountTotal = phosphorAmount + autoPhosphorAmount
    phosphorAmountTotal = Math.floor(phosphorAmountTotal)
    document.getElementById('phosphor-plorts').innerText = phosphorAmountTotal.toLocaleString()
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerText = calcPhosphorSellPrice.toLocaleString()
}

let numOfPhosphorSoldTotal = 0

function phosphorSell() {
    numOfPhosphorSoldTotal = numOfPhosphorSoldTotal + phosphorAmountTotal
    currentMoney = currentMoney + phosphorAmountTotal * phosphorPrice
    phosphorAmount = 0
    autoPhosphorAmount = 0
    phosphorTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerText = calcPhosphorSellPrice.toLocaleString()
}

let isFirstTimePhosphor = true

function phosphorStocks() {
    var phosphorStocksUp = document.getElementById('stocks-up-phosphor')
    var phosphorStocksDown = document.getElementById('stocks-down-phosphor')
    if (isFirstTimePhosphor) {
        isFirstTimePhosphor = false
    } else if (numOfPhosphorSoldTotal >= 2500) {
        phosphorPrice = 50
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 400) {
        phosphorPrice = Math.max(50, phosphorPrice / 2)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 300) {
        phosphorPrice = Math.max(50, phosphorPrice / 1.75)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 200) {
        phosphorPrice = Math.max(50, phosphorPrice / 1.5)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal >= 100) {
        phosphorPrice = Math.max(50, phosphorPrice / 1.25)
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'inline'
    } else if (numOfPhosphorSoldTotal > 50) {
        phosphorPrice = phosphorPrice / 1
        phosphorStocksUp.style.display = 'none'
        phosphorStocksDown.style.display = 'none'
    } else if (numOfPhosphorSoldTotal <= 50 && numOfPhosphorSoldTotal !== 0) {
        phosphorPrice = Math.min(260, phosphorPrice * 1.5)
        phosphorStocksUp.style.display = 'inline'
        phosphorStocksDown.style.display = 'none'
    } else if (numOfPhosphorSoldTotal === 0) {
        phosphorPrice = Math.min(260, phosphorPrice * 2)
        phosphorStocksUp.style.display = 'inline'
        phosphorStocksDown.style.display = 'none'
    }
    numOfPhosphorSoldTotal = 0
    phosphorPrice = Math.floor(phosphorPrice)
    calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
    document.getElementById('phosphor-sell-total').innerText = calcPhosphorSellPrice.toLocaleString()
    document.getElementById('current-phosphor-price').innerText = phosphorPrice.toLocaleString()
}

phosphorStocks()
setInterval(phosphorStocks, 61000);

var calcPhosphorSellPrice = phosphorAmountTotal * phosphorPrice
document.getElementById('phosphor-sell-total').innerText = calcPhosphorSellPrice.toLocaleString()

// Tabby Slime Section

let tabbyAmount = 0

let tabbyAmountTotal = 0

function clickTabby() {
    tabbyAmount = tabbyAmount + clickLevel
    tabbyTotal()
}

let numOfTabbySlimes = 0
let costOfTabbySlimes = 16000
document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
document.getElementById('tabby-slime-amount').innerText = numOfTabbySlimes.toLocaleString()

function buyTabbySlimes() {
    if (currentMoney >= costOfTabbySlimes) {
        currentMoney = currentMoney - costOfTabbySlimes
        numOfTabbySlimes = numOfTabbySlimes + 1
        playPurchaseSound()
        calcTPS()
    }
    if (numOfTabbySlimes >= 250 && currentMoney >= costOfTabbySlimes) {
        costOfTabbySlimes = Math.floor(costOfTabbySlimes * 1.1)
        document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
    } else if (numOfTabbySlimes >= 100 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 128000
        document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
    } else if (numOfTabbySlimes >= 50 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 64000
        document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
    } else if (numOfTabbySlimes >= 10 && !(numOfTabbySlimes >= 250)) {
        costOfTabbySlimes = 32000
        document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
    }
    document.getElementById('tabby-slime-amount').innerText = numOfTabbySlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfTabbySlimes >= 50 && clickRank === 4 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let tabbyLevel = 1
let autoTabbyMultiplier = 0.2 * tabbyLevel
let tabbyLevelCost = 64000
document.getElementById('tabby-upgrade-price').innerText = tabbyLevelCost.toLocaleString()

function levelUpTabby() {
    if (currentMoney >= tabbyLevelCost) {
        tabbyLevel = tabbyLevel + 1
        autoTabbyMultiplier = 0.2 * tabbyLevel
        currentMoney = currentMoney - tabbyLevelCost
        tabbyLevelCost = tabbyLevelCost * 5
        document.getElementById('tabby-upgrade-price').innerText = tabbyLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcTPS()
    }
    if (tabbyLevel === 5) {
        document.getElementById('level-up-tabby').style.display = 'none'
        document.getElementById('buy-tabby-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('tabby-purchase-section').classList = 'col-4 p-1'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcTPS() {
    let tabbyPerSec = numOfTabbySlimes * autoTabbyMultiplier
    document.getElementById('tabby-per-second').innerText = tabbyPerSec.toFixed(1)
}
calcTPS()

let autoTabbyAmount = 0
let tabbyPrice = 225

function autoTabby() {
    autoTabbyAmount = autoTabbyAmount + numOfTabbySlimes * autoTabbyMultiplier
    tabbyTotal()
}

autoTabby()
setInterval(autoTabby, 1000);

function tabbyTotal() {
    tabbyAmountTotal = tabbyAmount + autoTabbyAmount
    tabbyAmountTotal = Math.floor(tabbyAmountTotal)
    document.getElementById('tabby-plorts').innerText = tabbyAmountTotal.toLocaleString()
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerText = calcTabbySellPrice.toLocaleString()
}

let numOfTabbySoldTotal = 0

function tabbySell() {
    numOfTabbySoldTotal = numOfTabbySoldTotal + tabbyAmountTotal
    currentMoney = currentMoney + tabbyAmountTotal * tabbyPrice
    tabbyAmount = 0
    autoTabbyAmount = 0
    tabbyTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerText = calcTabbySellPrice.toLocaleString()
}

let isFirstTimeTabby = true

function tabbyStocks() {
    var tabbyStocksUp = document.getElementById('stocks-up-tabby')
    var tabbyStocksDown = document.getElementById('stocks-down-tabby')
    if (isFirstTimeTabby) {
        isFirstTimeTabby = false
    } else if (numOfTabbySoldTotal >= 2500) {
        tabbyPrice = 150
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 400) {
        tabbyPrice = Math.max(150, tabbyPrice / 2)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 300) {
        tabbyPrice = Math.max(150, tabbyPrice / 1.75)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 200) {
        tabbyPrice = Math.max(150, tabbyPrice / 1.5)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal >= 100) {
        tabbyPrice = Math.max(150, tabbyPrice / 1.25)
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'inline'
    } else if (numOfTabbySoldTotal > 50) {
        tabbyPrice = tabbyPrice / 1
        tabbyStocksUp.style.display = 'none'
        tabbyStocksDown.style.display = 'none'
    } else if (numOfTabbySoldTotal <= 50 && numOfTabbySoldTotal !== 0) {
        tabbyPrice = Math.min(730, tabbyPrice * 1.5)
        tabbyStocksUp.style.display = 'inline'
        tabbyStocksDown.style.display = 'none'
    } else if (numOfTabbySoldTotal === 0) {
        tabbyPrice = Math.min(730, tabbyPrice * 2)
        tabbyStocksUp.style.display = 'inline'
        tabbyStocksDown.style.display = 'none'
    }
    numOfTabbySoldTotal = 0
    tabbyPrice = Math.floor(tabbyPrice)
    calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
    document.getElementById('tabby-sell-total').innerText = calcTabbySellPrice.toLocaleString()
    document.getElementById('current-tabby-price').innerText = tabbyPrice.toLocaleString()
}

tabbyStocks()
setInterval(tabbyStocks, 61000);

var calcTabbySellPrice = tabbyAmountTotal * tabbyPrice
document.getElementById('tabby-sell-total').innerText = calcTabbySellPrice.toLocaleString()

// Puddle Slime Section

let puddleAmount = 0

let puddleAmountTotal = 0

function clickPuddle() {
    puddleAmount = puddleAmount + clickLevel
    puddleTotal()
}

let numOfPuddleSlimes = 0
let costOfPuddleSlimes = 64000
document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
document.getElementById('puddle-slime-amount').innerText = numOfPuddleSlimes.toLocaleString()

function buyPuddleSlimes() {
    if (currentMoney >= costOfPuddleSlimes) {
        currentMoney = currentMoney - costOfPuddleSlimes
        numOfPuddleSlimes = numOfPuddleSlimes + 1
        playPurchaseSound()
        calcPuPS()
    }
    if (numOfPuddleSlimes >= 250 && currentMoney >= costOfPuddleSlimes) {
        costOfPuddleSlimes = Math.floor(costOfPuddleSlimes * 1.1)
        document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
    } else if (numOfPuddleSlimes >= 100 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 512000
        document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
    } else if (numOfPuddleSlimes >= 50 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 256000
        document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
    } else if (numOfPuddleSlimes >= 10 && !(numOfPuddleSlimes >= 250)) {
        costOfPuddleSlimes = 128000
        document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
    }
    document.getElementById('puddle-slime-amount').innerText = numOfPuddleSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfPuddleSlimes >= 50 && clickRank === 5 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let puddleLevel = 1
let autoPuddleMultiplier = 0.2 * puddleLevel
let puddleLevelCost = 256000
document.getElementById('puddle-upgrade-price').innerText = puddleLevelCost.toLocaleString()

function levelUpPuddle() {
    if (currentMoney >= puddleLevelCost) {
        puddleLevel = puddleLevel + 1
        autoPuddleMultiplier = 0.2 * puddleLevel
        currentMoney = currentMoney - puddleLevelCost
        puddleLevelCost = puddleLevelCost * 5
        document.getElementById('puddle-upgrade-price').innerText = puddleLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcPuPS()
    }
    if (puddleLevel === 5) {
        document.getElementById('level-up-puddle').style.display = 'none'
        document.getElementById('buy-puddle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('puddle-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcPuPS() {
    let puddlePerSec = numOfPuddleSlimes * autoPuddleMultiplier
    document.getElementById('puddle-per-second').innerText = puddlePerSec.toFixed(1)
}
calcPuPS()

let autoPuddleAmount = 0
let puddlePrice = 720

function autoPuddle() {
    autoPuddleAmount = autoPuddleAmount + numOfPuddleSlimes * autoPuddleMultiplier
    puddleTotal()
}

autoPuddle()
setInterval(autoPuddle, 1000);

function puddleTotal() {
    puddleAmountTotal = puddleAmount + autoPuddleAmount
    puddleAmountTotal = Math.floor(puddleAmountTotal)
    document.getElementById('puddle-plorts').innerText = puddleAmountTotal.toLocaleString()
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerText = calcPuddleSellPrice.toLocaleString()
}

let numOfPuddleSoldTotal = 0

function puddleSell() {
    numOfPuddleSoldTotal = numOfPuddleSoldTotal + puddleAmountTotal
    currentMoney = currentMoney + puddleAmountTotal * puddlePrice
    puddleAmount = 0
    autoPuddleAmount = 0
    puddleTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerText = calcPuddleSellPrice.toLocaleString()
}

let isFirstTimePuddle = true

function puddleStocks() {
    var puddleStocksUp = document.getElementById('stocks-up-puddle')
    var puddleStocksDown = document.getElementById('stocks-down-puddle')
    if (isFirstTimePuddle) {
        isFirstTimePuddle = false
    } else if (numOfPuddleSoldTotal >= 2500) {
        puddlePrice = 480
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 400) {
        puddlePrice = Math.max(480, puddlePrice / 2)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 300) {
        puddlePrice = Math.max(480, puddlePrice / 1.75)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 200) {
        puddlePrice = Math.max(480, puddlePrice / 1.5)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal >= 100) {
        puddlePrice = Math.max(480, puddlePrice / 1.25)
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'inline'
    } else if (numOfPuddleSoldTotal > 50) {
        puddlePrice = puddlePrice / 1
        puddleStocksUp.style.display = 'none'
        puddleStocksDown.style.display = 'none'
    } else if (numOfPuddleSoldTotal <= 50 && numOfPuddleSoldTotal !== 0) {
        puddlePrice = Math.min(1500, puddlePrice * 1.5)
        puddleStocksUp.style.display = 'inline'
        puddleStocksDown.style.display = 'none'
    } else if (numOfPuddleSoldTotal === 0) {
        puddlePrice = Math.min(1500, puddlePrice * 2)
        puddleStocksUp.style.display = 'inline'
        puddleStocksDown.style.display = 'none'
    }
    numOfPuddleSoldTotal = 0
    puddlePrice = Math.floor(puddlePrice)
    calcPuddleSellPrice = puddleAmountTotal * puddlePrice
    document.getElementById('puddle-sell-total').innerText = calcPuddleSellPrice.toLocaleString()
    document.getElementById('current-puddle-price').innerText = puddlePrice.toLocaleString()
}

puddleStocks()
setInterval(puddleStocks, 61000);

var calcPuddleSellPrice = puddleAmountTotal * puddlePrice
document.getElementById('puddle-sell-total').innerText = calcPuddleSellPrice.toLocaleString()

// Fire Slime Section

let fireAmount = 0

let fireAmountTotal = 0

function clickFire() {
    fireAmount = fireAmount + clickLevel
    fireTotal()
}

let numOfFireSlimes = 0
let costOfFireSlimes = 256000
document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
document.getElementById('fire-slime-amount').innerText = numOfFireSlimes.toLocaleString()

function buyFireSlimes() {
    if (currentMoney >= costOfFireSlimes) {
        currentMoney = currentMoney - costOfFireSlimes
        numOfFireSlimes = numOfFireSlimes + 1
        playPurchaseSound()
        calcFPS()
    }
    if (numOfFireSlimes >= 250 && currentMoney >= costOfFireSlimes) {
        costOfFireSlimes = Math.floor(costOfFireSlimes * 1.1)
        document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
    } else if (numOfFireSlimes >= 100 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 2048000
        document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
    } else if (numOfFireSlimes >= 50 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 1024000
        document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
    } else if (numOfFireSlimes >= 10 && !(numOfFireSlimes >= 250)) {
        costOfFireSlimes = 512000
        document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
    }
    document.getElementById('fire-slime-amount').innerText = numOfFireSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfFireSlimes >= 50 && clickRank === 6 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let fireLevel = 1
let autoFireMultiplier = 0.2 * fireLevel
let fireLevelCost = 1024000
document.getElementById('fire-upgrade-price').innerText = fireLevelCost.toLocaleString()

function levelUpFire() {
    if (currentMoney >= fireLevelCost) {
        fireLevel = fireLevel + 1
        autoFireMultiplier = 0.2 * fireLevel
        currentMoney = currentMoney - fireLevelCost
        fireLevelCost = fireLevelCost * 5
        document.getElementById('fire-upgrade-price').innerText = fireLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcFPS()
    }
    if (fireLevel === 5) {
        document.getElementById('level-up-fire').style.display = 'none'
        document.getElementById('buy-fire-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('fire-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcFPS() {
    let firePerSec = numOfFireSlimes * autoFireMultiplier
    document.getElementById('fire-per-second').innerText = firePerSec.toFixed(1)
}
calcFPS()

let autoFireAmount = 0
let firePrice = 1125

function autoFire() {
    autoFireAmount = autoFireAmount + numOfFireSlimes * autoFireMultiplier
    fireTotal()
}

autoFire()
setInterval(autoFire, 1000);


function fireTotal() {
    fireAmountTotal = fireAmount + autoFireAmount
    fireAmountTotal = Math.floor(fireAmountTotal)
    document.getElementById('fire-plorts').innerText = fireAmountTotal.toLocaleString()
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerText = calcFireSellPrice.toLocaleString()
}

let numOfFireSoldTotal = 0

function fireSell() {
    numOfFireSoldTotal = numOfFireSoldTotal + fireAmountTotal
    currentMoney = currentMoney + fireAmountTotal * firePrice
    fireAmount = 0
    autoFireAmount = 0
    fireTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerText = calcFireSellPrice.toLocaleString()
}

let isFirstTimeFire = true

function fireStocks() {
    var fireStocksUp = document.getElementById('stocks-up-fire')
    var fireStocksDown = document.getElementById('stocks-down-fire')
    if (isFirstTimeFire) {
        isFirstTimeFire = false
    } else if (numOfFireSoldTotal >= 2500) {
        firePrice = 750
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 400) {
        firePrice = Math.max(750, firePrice / 2)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 300) {
        firePrice = Math.max(750, firePrice / 1.75)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 200) {
        firePrice = Math.max(750, firePrice / 1.5)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal >= 100) {
        firePrice = Math.max(750, firePrice / 1.25)
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'inline'
    } else if (numOfFireSoldTotal > 50) {
        firePrice = firePrice / 1
        fireStocksUp.style.display = 'none'
        fireStocksDown.style.display = 'none'
    } else if (numOfFireSoldTotal <= 50 && numOfFireSoldTotal !== 0) {
        firePrice = Math.min(3000, firePrice * 1.5)
        fireStocksUp.style.display = 'inline'
        fireStocksDown.style.display = 'none'
    } else if (numOfFireSoldTotal === 0) {
        firePrice = Math.min(3000, firePrice * 2)
        fireStocksUp.style.display = 'inline'
        fireStocksDown.style.display = 'none'
    }
    numOfFireSoldTotal = 0
    firePrice = Math.floor(firePrice)
    calcFireSellPrice = fireAmountTotal * firePrice
    document.getElementById('fire-sell-total').innerText = calcFireSellPrice.toLocaleString()
    document.getElementById('current-fire-price').innerText = firePrice.toLocaleString()
}

fireStocks()
setInterval(fireStocks, 61000);

var calcFireSellPrice = fireAmountTotal * firePrice
document.getElementById('fire-sell-total').innerText = calcFireSellPrice.toLocaleString()

// Honey Slime Section

let honeyAmount = 0
let honeyAmountTotal = 0

function clickHoney() {
    honeyAmount = honeyAmount + clickLevel
    honeyTotal()
}

let numOfHoneySlimes = 0
let costOfHoneySlimes = 1024000
document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
document.getElementById('honey-slime-amount').innerText = numOfHoneySlimes.toLocaleString()

function buyHoneySlimes() {
    if (currentMoney >= costOfHoneySlimes) {
        currentMoney = currentMoney - costOfHoneySlimes
        numOfHoneySlimes = numOfHoneySlimes + 1
        playPurchaseSound()
        calcHPS()
    }
    if (numOfHoneySlimes >= 250 && currentMoney >= costOfHoneySlimes) {
        costOfHoneySlimes = Math.floor(costOfHoneySlimes * 1.1)
        document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
    } else if (numOfHoneySlimes >= 100 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 8192000
        document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
    } else if (numOfHoneySlimes >= 50 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 4096000
        document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
    } else if (numOfHoneySlimes >= 10 && !(numOfHoneySlimes >= 250)) {
        costOfHoneySlimes = 2048000
        document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
    }
    document.getElementById('honey-slime-amount').innerText = numOfHoneySlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfHoneySlimes >= 50 && clickRank === 7 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let honeyLevel = 1
let autoHoneyMultiplier = 0.2 * honeyLevel
let honeyLevelCost = 4096000
document.getElementById('honey-upgrade-price').innerText = honeyLevelCost.toLocaleString()

function levelUpHoney() {
    if (currentMoney >= honeyLevelCost) {
        honeyLevel = honeyLevel + 1
        autoHoneyMultiplier = 0.2 * honeyLevel
        currentMoney = currentMoney - honeyLevelCost
        honeyLevelCost = honeyLevelCost * 5
        document.getElementById('honey-upgrade-price').innerText = honeyLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcHPS()
    }
    if (honeyLevel === 5) {
        document.getElementById('level-up-honey').style.display = 'none'
        document.getElementById('buy-honey-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('honey-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcHPS() {
    let honeyPerSec = numOfHoneySlimes * autoHoneyMultiplier
    document.getElementById('honey-per-second').innerText = honeyPerSec.toFixed(1)
}
calcHPS()

let autoHoneyAmount = 0
let honeyPrice = 1875

function autoHoney() {
    autoHoneyAmount = autoHoneyAmount + numOfHoneySlimes * autoHoneyMultiplier
    honeyTotal()
}

autoHoney()
setInterval(autoHoney, 1000);


function honeyTotal() {
    honeyAmountTotal = honeyAmount + autoHoneyAmount
    honeyAmountTotal = Math.floor(honeyAmountTotal)
    document.getElementById('honey-plorts').innerText = honeyAmountTotal.toLocaleString()
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerText = calcHoneySellPrice.toLocaleString()
}

let numOfHoneySoldTotal = 0

function honeySell() {
    numOfHoneySoldTotal = numOfHoneySoldTotal + honeyAmountTotal
    currentMoney = currentMoney + honeyAmountTotal * honeyPrice
    honeyAmount = 0
    autoHoneyAmount = 0
    honeyTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerText = calcHoneySellPrice.toLocaleString()
}

let isFirstTimeHoney = true

function honeyStocks() {
    var honeyStocksUp = document.getElementById('stocks-up-honey')
    var honeyStocksDown = document.getElementById('stocks-down-honey')
    if (isFirstTimeHoney) {
        isFirstTimeHoney = false
    } else if (numOfHoneySoldTotal >= 2500) {
        honeyPrice = 1250
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 400) {
        honeyPrice = Math.max(1250, honeyPrice / 2)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 300) {
        honeyPrice = Math.max(1250, honeyPrice / 1.75)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 200) {
        honeyPrice = Math.max(1250, honeyPrice / 1.5)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal >= 100) {
        honeyPrice = Math.max(1250, honeyPrice / 1.25)
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'inline'
    } else if (numOfHoneySoldTotal > 50) {
        honeyPrice = honeyPrice / 1
        honeyStocksUp.style.display = 'none'
        honeyStocksDown.style.display = 'none'
    } else if (numOfHoneySoldTotal <= 50 && numOfHoneySoldTotal !== 0) {
        honeyPrice = Math.min(6000, honeyPrice * 1.5)
        honeyStocksUp.style.display = 'inline'
        honeyStocksDown.style.display = 'none'
    } else if (numOfHoneySoldTotal === 0) {
        honeyPrice = Math.min(6000, honeyPrice * 2)
        honeyStocksUp.style.display = 'inline'
        honeyStocksDown.style.display = 'none'
    }
    numOfHoneySoldTotal = 0
    honeyPrice = Math.floor(honeyPrice)
    calcHoneySellPrice = honeyAmountTotal * honeyPrice
    document.getElementById('honey-sell-total').innerText = calcHoneySellPrice.toLocaleString()
    document.getElementById('current-honey-price').innerText = honeyPrice.toLocaleString()
}

honeyStocks()
setInterval(honeyStocks, 61000);

var calcHoneySellPrice = honeyAmountTotal * honeyPrice
document.getElementById('honey-sell-total').innerText = calcHoneySellPrice.toLocaleString()

// Boom Slime Section

let boomAmount = 0
let boomAmountTotal = 0

function clickBoom() {
    boomAmount = boomAmount + clickLevel
    boomTotal()
}

let numOfBoomSlimes = 0
let costOfBoomSlimes = 4096000
document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
document.getElementById('boom-slime-amount').innerText = numOfBoomSlimes.toLocaleString()

function buyBoomSlimes() {
    if (currentMoney >= costOfBoomSlimes) {
        currentMoney = currentMoney - costOfBoomSlimes
        numOfBoomSlimes = numOfBoomSlimes + 1
        playPurchaseSound()
        calcBPS()
    }
    if (numOfBoomSlimes >= 250 && currentMoney >= costOfBoomSlimes) {
        costOfBoomSlimes = Math.floor(costOfBoomSlimes * 1.1)
        document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
    } else if (numOfBoomSlimes >= 100 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 32768000
        document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
    } else if (numOfBoomSlimes >= 50 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 16384000
        document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
    } else if (numOfBoomSlimes >= 10 && !(numOfBoomSlimes >= 250)) {
        costOfBoomSlimes = 8192000
        document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
    }
    document.getElementById('boom-slime-amount').innerText = numOfBoomSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfBoomSlimes >= 50 && clickRank === 8 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let boomLevel = 1
let autoBoomMultiplier = 0.2 * boomLevel
let boomLevelCost = 16384000
document.getElementById('boom-upgrade-price').innerText = boomLevelCost.toLocaleString()

function levelUpBoom() {
    if (currentMoney >= boomLevelCost) {
        boomLevel = boomLevel + 1
        autoBoomMultiplier = 0.2 * boomLevel
        currentMoney = currentMoney - boomLevelCost
        boomLevelCost = boomLevelCost * 5
        document.getElementById('boom-upgrade-price').innerText = boomLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcBPS()
    }
    if (boomLevel === 5) {
        document.getElementById('level-up-boom').style.display = 'none'
        document.getElementById('buy-boom-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('boom-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcBPS() {
    let boomPerSec = numOfBoomSlimes * autoBoomMultiplier
    document.getElementById('boom-per-second').innerText = boomPerSec.toFixed(1)
}
calcBPS()

let autoBoomAmount = 0
let boomPrice = 2625

function autoBoom() {
    autoBoomAmount = autoBoomAmount + numOfBoomSlimes * autoBoomMultiplier
    boomTotal()
}

autoBoom()
setInterval(autoBoom, 1000);


function boomTotal() {
    boomAmountTotal = boomAmount + autoBoomAmount
    boomAmountTotal = Math.floor(boomAmountTotal)
    document.getElementById('boom-plorts').innerText = boomAmountTotal.toLocaleString()
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerText = calcBoomSellPrice.toLocaleString()
}

let numOfBoomSoldTotal = 0

function boomSell() {
    numOfBoomSoldTotal = numOfBoomSoldTotal + boomAmountTotal
    currentMoney = currentMoney + boomAmountTotal * boomPrice
    boomAmount = 0
    autoBoomAmount = 0
    boomTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerText = calcBoomSellPrice.toLocaleString()
}

let isFirstTimeBoom = true

function boomStocks() {
    var boomStocksUp = document.getElementById('stocks-up-boom')
    var boomStocksDown = document.getElementById('stocks-down-boom')
    if (isFirstTimeBoom) {
        isFirstTimeBoom = false
    } else if (numOfBoomSoldTotal >= 2500) {
        boomPrice = 1750
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 400) {
        boomPrice = Math.max(1750, boomPrice / 2)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 300) {
        boomPrice = Math.max(1750, boomPrice / 1.75)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 200) {
        boomPrice = Math.max(1750, boomPrice / 1.5)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal >= 100) {
        boomPrice = Math.max(1750, boomPrice / 1.25)
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'inline'
    } else if (numOfBoomSoldTotal > 50) {
        boomPrice = boomPrice / 1
        boomStocksUp.style.display = 'none'
        boomStocksDown.style.display = 'none'
    } else if (numOfBoomSoldTotal <= 50 && numOfBoomSoldTotal !== 0) {
        boomPrice = Math.min(12500, boomPrice * 1.5)
        boomStocksUp.style.display = 'inline'
        boomStocksDown.style.display = 'none'
    } else if (numOfBoomSoldTotal === 0) {
        boomPrice = Math.min(12500, boomPrice * 2)
        boomStocksUp.style.display = 'inline'
        boomStocksDown.style.display = 'none'
    }
    numOfBoomSoldTotal = 0
    boomPrice = Math.floor(boomPrice)
    calcBoomSellPrice = boomAmountTotal * boomPrice
    document.getElementById('boom-sell-total').innerText = calcBoomSellPrice.toLocaleString()
    document.getElementById('current-boom-price').innerText = boomPrice.toLocaleString()
}

boomStocks()
setInterval(boomStocks, 61000);

var calcBoomSellPrice = boomAmountTotal * boomPrice
document.getElementById('boom-sell-total').innerText = calcBoomSellPrice.toLocaleString()

// Hunter Slime Section

let hunterAmount = 0
let hunterAmountTotal = 0

function clickHunter() {
    hunterAmount = hunterAmount + clickLevel
    hunterTotal()
}

let numOfHunterSlimes = 0
let costOfHunterSlimes = 16384000
document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
document.getElementById('hunter-slime-amount').innerText = numOfHunterSlimes.toLocaleString()

function buyHunterSlimes() {
    if (currentMoney >= costOfHunterSlimes) {
        currentMoney = currentMoney - costOfHunterSlimes
        numOfHunterSlimes = numOfHunterSlimes + 1
        playPurchaseSound()
        calcHuPS()
    }
    if (numOfHunterSlimes >= 250 && currentMoney >= costOfHunterSlimes) {
        costOfHunterSlimes = Math.floor(costOfHunterSlimes * 1.1)
        document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
    } else if (numOfHunterSlimes >= 100 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 131072000
        document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
    } else if (numOfHunterSlimes >= 50 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 65536000
        document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
    } else if (numOfHunterSlimes >= 10 && !(numOfHunterSlimes >= 250)) {
        costOfHunterSlimes = 32768000
        document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
    }
    document.getElementById('hunter-slime-amount').innerText = numOfHunterSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfHunterSlimes >= 50 && clickRank === 9 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let hunterLevel = 1
let autoHunterMultiplier = 0.2 * hunterLevel
let hunterLevelCost = 65536000
document.getElementById('hunter-upgrade-price').innerText = hunterLevelCost.toLocaleString()

function levelUpHunter() {
    if (currentMoney >= hunterLevelCost) {
        hunterLevel = hunterLevel + 1
        autoHunterMultiplier = 0.2 * hunterLevel
        currentMoney = currentMoney - hunterLevelCost
        hunterLevelCost = hunterLevelCost * 5
        document.getElementById('hunter-upgrade-price').innerText = hunterLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcHuPS()
    }
    if (hunterLevel === 5) {
        document.getElementById('level-up-hunter').style.display = 'none'
        document.getElementById('buy-hunter-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('hunter-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcHuPS() {
    let hunterPerSec = numOfHunterSlimes * autoHunterMultiplier
    document.getElementById('hunter-per-second').innerText = hunterPerSec.toFixed(1)
}
calcHuPS()

let autoHunterAmount = 0
let hunterPrice = 9000

function autoHunter() {
    autoHunterAmount = autoHunterAmount + numOfHunterSlimes * autoHunterMultiplier
    hunterTotal()
}

autoHunter()
setInterval(autoHunter, 1000);


function hunterTotal() {
    hunterAmountTotal = hunterAmount + autoHunterAmount
    hunterAmountTotal = Math.floor(hunterAmountTotal)
    document.getElementById('hunter-plorts').innerText = hunterAmountTotal.toLocaleString()
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerText = calcHunterSellPrice.toLocaleString()
}

let numOfHunterSoldTotal = 0

function hunterSell() {
    numOfHunterSoldTotal = numOfHunterSoldTotal + hunterAmountTotal
    currentMoney = currentMoney + hunterAmountTotal * hunterPrice
    hunterAmount = 0
    autoHunterAmount = 0
    hunterTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerText = calcHunterSellPrice.toLocaleString()
}

let isFirstTimeHunter = true

function hunterStocks() {
    var hunterStocksUp = document.getElementById('stocks-up-hunter')
    var hunterStocksDown = document.getElementById('stocks-down-hunter')
    if (isFirstTimeHunter) {
        isFirstTimeHunter = false
    } else if (numOfHunterSoldTotal >= 2500) {
        hunterPrice = 6000
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 400) {
        hunterPrice = Math.max(6000, hunterPrice / 2)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 300) {
        hunterPrice = Math.max(6000, hunterPrice / 1.75)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 200) {
        hunterPrice = Math.max(6000, hunterPrice / 1.5)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal >= 100) {
        hunterPrice = Math.max(6000, hunterPrice / 1.25)
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'inline'
    } else if (numOfHunterSoldTotal > 50) {
        hunterPrice = hunterPrice / 1
        hunterStocksUp.style.display = 'none'
        hunterStocksDown.style.display = 'none'
    } else if (numOfHunterSoldTotal <= 50 && numOfHunterSoldTotal !== 0) {
        hunterPrice = Math.min(25000, hunterPrice * 1.5)
        hunterStocksUp.style.display = 'inline'
        hunterStocksDown.style.display = 'none'
    } else if (numOfHunterSoldTotal === 0) {
        hunterPrice = Math.min(25000, hunterPrice * 2)
        hunterStocksUp.style.display = 'inline'
        hunterStocksDown.style.display = 'none'
    }
    numOfHunterSoldTotal = 0
    hunterPrice = Math.floor(hunterPrice)
    calcHunterSellPrice = hunterAmountTotal * hunterPrice
    document.getElementById('hunter-sell-total').innerText = calcHunterSellPrice.toLocaleString()
    document.getElementById('current-hunter-price').innerText = hunterPrice.toLocaleString()
}

hunterStocks()
setInterval(hunterStocks, 61000);

var calcHunterSellPrice = hunterAmountTotal * hunterPrice
document.getElementById('hunter-sell-total').innerText = calcHunterSellPrice.toLocaleString()

// Rad Slime Section

let radAmount = 0
let radAmountTotal = 0

function clickRad() {
    radAmount = radAmount + clickLevel
    radTotal()
}

let numOfRadSlimes = 0
let costOfRadSlimes = 65536000
document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
document.getElementById('rad-slime-amount').innerText = numOfRadSlimes.toLocaleString()

function buyRadSlimes() {
    if (currentMoney >= costOfRadSlimes) {
        currentMoney = currentMoney - costOfRadSlimes
        numOfRadSlimes = numOfRadSlimes + 1
        playPurchaseSound()
        calcRaPS()
    }
    if (numOfRadSlimes >= 250 && currentMoney >= costOfRadSlimes) {
        costOfRadSlimes = Math.floor(costOfRadSlimes * 1.1)
        document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
    } else if (numOfRadSlimes >= 100 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 524288000
        document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
    } else if (numOfRadSlimes >= 50 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 262144000
        document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
    } else if (numOfRadSlimes >= 10 && !(numOfRadSlimes >= 250)) {
        costOfRadSlimes = 131072000
        document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
    }
    document.getElementById('rad-slime-amount').innerText = numOfRadSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfRadSlimes >= 50 && clickRank === 10 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let radLevel = 1
let autoRadMultiplier = 0.2 * radLevel
let radLevelCost = 262144000
document.getElementById('rad-upgrade-price').innerText = radLevelCost.toLocaleString()

function levelUpRad() {
    if (currentMoney >= radLevelCost) {
        radLevel = radLevel + 1
        autoRadMultiplier = 0.2 * radLevel
        currentMoney = currentMoney - radLevelCost
        radLevelCost = radLevelCost * 5
        document.getElementById('rad-upgrade-price').innerText = radLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcRaPS()
    }
    if (radLevel === 5) {
        document.getElementById('level-up-rad').style.display = 'none'
        document.getElementById('buy-rad-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('rad-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcRaPS() {
    let radPerSec = numOfRadSlimes * autoRadMultiplier
    document.getElementById('rad-per-second').innerText = radPerSec.toFixed(1)
}
calcRaPS()

let autoRadAmount = 0
let radPrice = 12750

function autoRad() {
    autoRadAmount = autoRadAmount + numOfRadSlimes * autoRadMultiplier
    radTotal()
}

autoRad()
setInterval(autoRad, 1000);


function radTotal() {
    radAmountTotal = radAmount + autoRadAmount
    radAmountTotal = Math.floor(radAmountTotal)
    document.getElementById('rad-plorts').innerText = radAmountTotal.toLocaleString()
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerText = calcRadSellPrice.toLocaleString()
}

let numOfRadSoldTotal = 0

function radSell() {
    numOfRadSoldTotal = numOfRadSoldTotal + radAmountTotal
    currentMoney = currentMoney + radAmountTotal * radPrice
    radAmount = 0
    autoRadAmount = 0
    radTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerText = calcRadSellPrice.toLocaleString()
}

let isFirstTimeRad = true

function radStocks() {
    var radStocksUp = document.getElementById('stocks-up-rad')
    var radStocksDown = document.getElementById('stocks-down-rad')
    if (isFirstTimeRad) {
        isFirstTimeRad = false
    } else if (numOfRadSoldTotal >= 2500) {
        radPrice = 8500
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 400) {
        radPrice = Math.max(8500, radPrice / 2)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 300) {
        radPrice = Math.max(8500, radPrice / 1.75)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 200) {
        radPrice = Math.max(8500, radPrice / 1.5)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal >= 100) {
        radPrice = Math.max(8500, radPrice / 1.25)
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'inline'
    } else if (numOfRadSoldTotal > 50) {
        radPrice = radPrice / 1
        radStocksUp.style.display = 'none'
        radStocksDown.style.display = 'none'
    } else if (numOfRadSoldTotal <= 50 && numOfRadSoldTotal !== 0) {
        radPrice = Math.min(40000, radPrice * 1.5)
        radStocksUp.style.display = 'inline'
        radStocksDown.style.display = 'none'
    } else if (numOfRadSoldTotal === 0) {
        radPrice = Math.min(40000, radPrice * 2)
        radStocksUp.style.display = 'inline'
        radStocksDown.style.display = 'none'
    }
    numOfRadSoldTotal = 0
    radPrice = Math.floor(radPrice)
    calcRadSellPrice = radAmountTotal * radPrice
    document.getElementById('rad-sell-total').innerText = calcRadSellPrice.toLocaleString()
    document.getElementById('current-rad-price').innerText = radPrice.toLocaleString()
}

radStocks()
setInterval(radStocks, 61000);

var calcRadSellPrice = radAmountTotal * radPrice
document.getElementById('rad-sell-total').innerText = calcRadSellPrice.toLocaleString()

// Crystal Slime Section

let crystalAmount = 0
let crystalAmountTotal = 0

function clickCrystal() {
    crystalAmount = crystalAmount + clickLevel
    crystalTotal()
}

let numOfCrystalSlimes = 0
let costOfCrystalSlimes = 262144000
document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
document.getElementById('crystal-slime-amount').innerText = numOfCrystalSlimes.toLocaleString()

function buyCrystalSlimes() {
    if (currentMoney >= costOfCrystalSlimes) {
        currentMoney = currentMoney - costOfCrystalSlimes
        numOfCrystalSlimes = numOfCrystalSlimes + 1
        playPurchaseSound()
        calcCPS()
    }
    if (numOfCrystalSlimes >= 250 && currentMoney >= costOfCrystalSlimes) {
        costOfCrystalSlimes = Math.floor(costOfCrystalSlimes * 1.1)
        document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
    } else if (numOfCrystalSlimes >= 100 && !(numOfCrystalSlimes >= 250)) {
        costOfCrystalSlimes = 2097152000
        document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
    } else if (numOfCrystalSlimes >= 50 && !(numOfCrystalSlimes >= 250)) {
        costOfCrystalSlimes = 1048576000
        document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
    } else if (numOfCrystalSlimes >= 10 && !(numOfCrystalSlimes >= 250)) {
        costOfCrystalSlimes = 524288000
        document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
    }
    document.getElementById('crystal-slime-amount').innerText = numOfCrystalSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfCrystalSlimes >= 50 && clickRank === 11 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let crystalLevel = 1
let autoCrystalMultiplier = 0.2 * crystalLevel
let crystalLevelCost = 1048576000
document.getElementById('crystal-upgrade-price').innerText = crystalLevelCost.toLocaleString()

function levelUpCrystal() {
    if (currentMoney >= crystalLevelCost) {
        crystalLevel = crystalLevel + 1
        autoCrystalMultiplier = 0.2 * crystalLevel
        currentMoney = currentMoney - crystalLevelCost
        crystalLevelCost = crystalLevelCost * 5
        document.getElementById('crystal-upgrade-price').innerText = crystalLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcCPS()
    }
    if (crystalLevel === 5) {
        document.getElementById('level-up-crystal').style.display = 'none'
        document.getElementById('buy-crystal-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('crystal-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfSaberSlimes >= 50 && clickRank === 12 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

function calcCPS() {
    let crystalPerSec = numOfCrystalSlimes * autoCrystalMultiplier
    document.getElementById('crystal-per-second').innerText = crystalPerSec.toFixed(1)
}
calcCPS()

let autoCrystalAmount = 0
let crystalPrice = 15000

function autoCrystal() {
    autoCrystalAmount = autoCrystalAmount + numOfCrystalSlimes * autoCrystalMultiplier
    crystalTotal()
}

autoCrystal()
setInterval(autoCrystal, 1000);

function crystalTotal() {
    crystalAmountTotal = crystalAmount + autoCrystalAmount
    crystalAmountTotal = Math.floor(crystalAmountTotal)
    document.getElementById('crystal-plorts').innerText = crystalAmountTotal.toLocaleString()
    calcCrystalSellPrice = crystalAmountTotal * crystalPrice
    document.getElementById('crystal-sell-total').innerText = calcCrystalSellPrice.toLocaleString()
}

let numOfCrystalSoldTotal = 0

function crystalSell() {
    numOfCrystalSoldTotal = numOfCrystalSoldTotal + crystalAmountTotal
    currentMoney = currentMoney + crystalAmountTotal * crystalPrice
    crystalAmount = 0
    autoCrystalAmount = 0
    crystalTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcCrystalSellPrice = crystalAmountTotal * crystalPrice
    document.getElementById('crystal-sell-total').innerText = calcCrystalSellPrice.toLocaleString()
}

let isFirstTimeCrystal = true

function crystalStocks() {
    var crystalStocksUp = document.getElementById('stocks-up-crystal')
    var crystalStocksDown = document.getElementById('stocks-down-crystal')
    if (isFirstTimeCrystal) {
        isFirstTimeCrystal = false
    } else if (numOfCrystalSoldTotal >= 2500) {
        crystalPrice = 10000
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'inline'
    } else if (numOfCrystalSoldTotal >= 400) {
        crystalPrice = Math.max(10000, crystalPrice / 2)
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'inline'
    } else if (numOfCrystalSoldTotal >= 300) {
        crystalPrice = Math.max(10000, crystalPrice / 1.75)
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'inline'
    } else if (numOfCrystalSoldTotal >= 200) {
        crystalPrice = Math.max(10000, crystalPrice / 1.5)
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'inline'
    } else if (numOfCrystalSoldTotal >= 100) {
        crystalPrice = Math.max(10000, crystalPrice / 1.25)
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'inline'
    } else if (numOfCrystalSoldTotal > 50) {
        crystalPrice = crystalPrice / 1
        crystalStocksUp.style.display = 'none'
        crystalStocksDown.style.display = 'none'
    } else if (numOfCrystalSoldTotal <= 50 && numOfCrystalSoldTotal !== 0) {
        crystalPrice = Math.min(50000, crystalPrice * 1.5)
        crystalStocksUp.style.display = 'inline'
        crystalStocksDown.style.display = 'none'
    } else if (numOfCrystalSoldTotal === 0) {
        crystalPrice = Math.min(50000, crystalPrice * 2)
        crystalStocksUp.style.display = 'inline'
        crystalStocksDown.style.display = 'none'
    }
    numOfCrystalSoldTotal = 0
    crystalPrice = Math.floor(crystalPrice)
    calcCrystalSellPrice = crystalAmountTotal * crystalPrice
    document.getElementById('crystal-sell-total').innerText = calcCrystalSellPrice.toLocaleString()
    document.getElementById('current-crystal-price').innerText = crystalPrice.toLocaleString()
}

crystalStocks()
setInterval(crystalStocks, 61000);

var calcCrystalSellPrice = crystalAmountTotal * crystalPrice
document.getElementById('crystal-sell-total').innerText = calcCrystalSellPrice.toLocaleString()

// Saber Slime Section

let saberAmount = 0
let saberAmountTotal = 0

function clickSaber() {
    saberAmount = saberAmount + clickLevel
    saberTotal()
}

let numOfSaberSlimes = 0
let costOfSaberSlimes = 1048576000
document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
document.getElementById('saber-slime-amount').innerText = numOfSaberSlimes.toLocaleString()

function buySaberSlimes() {
    if (currentMoney >= costOfSaberSlimes) {
        currentMoney = currentMoney - costOfSaberSlimes
        numOfSaberSlimes = numOfSaberSlimes + 1
        playPurchaseSound()
        calcSPS()
    }
    if (numOfSaberSlimes >= 250 && currentMoney >= costOfSaberSlimes) {
        costOfSaberSlimes = Math.floor(costOfSaberSlimes * 1.1)
        document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
    } else if (numOfSaberSlimes >= 100 && !(numOfSaberSlimes >= 250)) {
        costOfSaberSlimes = 8388608000
        document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
    } else if (numOfSaberSlimes >= 50 && !(numOfSaberSlimes >= 250)) {
        costOfSaberSlimes = 4194304000
        document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
    } else if (numOfSaberSlimes >= 10 && !(numOfSaberSlimes >= 250)) {
        costOfSaberSlimes = 2097152000
        document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
    }
    document.getElementById('saber-slime-amount').innerText = numOfSaberSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

let saberLevel = 1
let autoSaberMultiplier = 0.2 * saberLevel
let saberLevelCost = 4194304000
document.getElementById('saber-upgrade-price').innerText = saberLevelCost.toLocaleString()

function levelUpSaber() {
    if (currentMoney >= saberLevelCost) {
        saberLevel = saberLevel + 1
        autoSaberMultiplier = 0.2 * saberLevel
        currentMoney = currentMoney - saberLevelCost
        saberLevelCost = saberLevelCost * 5
        document.getElementById('saber-upgrade-price').innerText = saberLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcSPS()
    }
    if (saberLevel === 5) {
        document.getElementById('level-up-saber').style.display = 'none'
        document.getElementById('buy-saber-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('saber-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcSPS() {
    let saberPerSec = numOfSaberSlimes * autoSaberMultiplier
    document.getElementById('saber-per-second').innerText = saberPerSec.toFixed(1)
}
calcSPS()

let autoSaberAmount = 0
let saberPrice = 18750

function autoSaber() {
    autoSaberAmount = autoSaberAmount + numOfSaberSlimes * autoSaberMultiplier
    saberTotal()
}

autoSaber()
setInterval(autoSaber, 1000);

function saberTotal() {
    saberAmountTotal = saberAmount + autoSaberAmount
    saberAmountTotal = Math.floor(saberAmountTotal)
    document.getElementById('saber-plorts').innerText = saberAmountTotal.toLocaleString()
    calcSaberSellPrice = saberAmountTotal * saberPrice
    document.getElementById('saber-sell-total').innerText = calcSaberSellPrice.toLocaleString()
}

let numOfSaberSoldTotal = 0

function saberSell() {
    numOfSaberSoldTotal = numOfSaberSoldTotal + saberAmountTotal
    currentMoney = currentMoney + saberAmountTotal * saberPrice
    saberAmount = 0
    autoSaberAmount = 0
    saberTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcSaberSellPrice = saberAmountTotal * saberPrice
    document.getElementById('saber-sell-total').innerText = calcSaberSellPrice.toLocaleString()
}

let isFirstTimeSaber = true

function saberStocks() {
    var saberStocksUp = document.getElementById('stocks-up-saber')
    var saberStocksDown = document.getElementById('stocks-down-saber')
    if (isFirstTimeSaber) {
        isFirstTimeSaber = false
    } else if (numOfSaberSoldTotal >= 2500) {
        saberPrice = 12500
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'inline'
    } else if (numOfSaberSoldTotal >= 400) {
        saberPrice = Math.max(12500, saberPrice / 2)
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'inline'
    } else if (numOfSaberSoldTotal >= 300) {
        saberPrice = Math.max(12500, saberPrice / 1.75)
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'inline'
    } else if (numOfSaberSoldTotal >= 200) {
        saberPrice = Math.max(12500, saberPrice / 1.5)
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'inline'
    } else if (numOfSaberSoldTotal >= 100) {
        saberPrice = Math.max(12500, saberPrice / 1.25)
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'inline'
    } else if (numOfSaberSoldTotal > 50) {
        saberPrice = saberPrice / 1
        saberStocksUp.style.display = 'none'
        saberStocksDown.style.display = 'none'
    } else if (numOfSaberSoldTotal <= 50 && numOfSaberSoldTotal !== 0) {
        saberPrice = Math.min(62500, saberPrice * 1.5)
        saberStocksUp.style.display = 'inline'
        saberStocksDown.style.display = 'none'
    } else if (numOfSaberSoldTotal === 0) {
        saberPrice = Math.min(62500, saberPrice * 2)
        saberStocksUp.style.display = 'inline'
        saberStocksDown.style.display = 'none'
    }
    numOfSaberSoldTotal = 0
    saberPrice = Math.floor(saberPrice)
    calcSaberSellPrice = saberAmountTotal * saberPrice
    document.getElementById('saber-sell-total').innerText = calcSaberSellPrice.toLocaleString()
    document.getElementById('current-saber-price').innerText = saberPrice.toLocaleString()
}

saberStocks()
setInterval(saberStocks, 61000);

var calcSaberSellPrice = saberAmountTotal * saberPrice
document.getElementById('saber-sell-total').innerText = calcSaberSellPrice.toLocaleString()

// Dervish Slime Section

let dervishAmount = 0
let dervishAmountTotal = 0

function clickDervish() {
    dervishAmount = dervishAmount + clickLevel
    dervishTotal()
}

let numOfDervishSlimes = 0
let costOfDervishSlimes = 4194304000
document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
document.getElementById('dervish-slime-amount').innerText = numOfDervishSlimes.toLocaleString()

function buyDervishSlimes() {
    if (currentMoney >= costOfDervishSlimes) {
        currentMoney = currentMoney - costOfDervishSlimes
        numOfDervishSlimes = numOfDervishSlimes + 1
        playPurchaseSound()
        calcDPS()
    }
    if (numOfDervishSlimes >= 250 && currentMoney >= costOfDervishSlimes) {
        costOfDervishSlimes = Math.floor(costOfDervishSlimes * 1.1)
        document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
    } else if (numOfDervishSlimes >= 100 && !(numOfDervishSlimes >= 250)) {
        costOfDervishSlimes = 33554432000
        document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
    } else if (numOfDervishSlimes >= 50 && !(numOfDervishSlimes >= 250)) {
        costOfDervishSlimes = 16777216000
        document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
    } else if (numOfDervishSlimes >= 10 && !(numOfDervishSlimes >= 250)) {
        costOfDervishSlimes = 8388608000
        document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
    }
    document.getElementById('dervish-slime-amount').innerText = numOfDervishSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfDervishSlimes >= 50 && clickRank === 13 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let dervishLevel = 1
let autoDervishMultiplier = 0.2 * dervishLevel
let dervishLevelCost = 16777216000
document.getElementById('dervish-upgrade-price').innerText = dervishLevelCost.toLocaleString()

function levelUpDervish() {
    if (currentMoney >= dervishLevelCost) {
        dervishLevel = dervishLevel + 1
        autoDervishMultiplier = 0.2 * dervishLevel
        currentMoney = currentMoney - dervishLevelCost
        dervishLevelCost = dervishLevelCost * 5
        document.getElementById('dervish-upgrade-price').innerText = dervishLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcDPS()
    }
    if (dervishLevel === 5) {
        document.getElementById('level-up-dervish').style.display = 'none'
        document.getElementById('buy-dervish-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('dervish-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcDPS() {
    let dervishPerSec = numOfDervishSlimes * autoDervishMultiplier
    document.getElementById('dervish-per-second').innerText = dervishPerSec.toFixed(1)
}
calcDPS()

let autoDervishAmount = 0
let dervishPrice = 22500

function autoDervish() {
    autoDervishAmount = autoDervishAmount + numOfDervishSlimes * autoDervishMultiplier
    dervishTotal()
}

autoDervish()
setInterval(autoDervish, 1000);

function dervishTotal() {
    dervishAmountTotal = dervishAmount + autoDervishAmount
    dervishAmountTotal = Math.floor(dervishAmountTotal)
    document.getElementById('dervish-plorts').innerText = dervishAmountTotal.toLocaleString()
    calcDervishSellPrice = dervishAmountTotal * dervishPrice
    document.getElementById('dervish-sell-total').innerText = calcDervishSellPrice.toLocaleString()
}

let numOfDervishSoldTotal = 0

function dervishSell() {
    numOfDervishSoldTotal = numOfDervishSoldTotal + dervishAmountTotal
    currentMoney = currentMoney + dervishAmountTotal * dervishPrice
    dervishAmount = 0
    autoDervishAmount = 0
    dervishTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcDervishSellPrice = dervishAmountTotal * dervishPrice
    document.getElementById('dervish-sell-total').innerText = calcDervishSellPrice.toLocaleString()
}

let isFirstTimeDervish = true

function dervishStocks() {
    var dervishStocksUp = document.getElementById('stocks-up-dervish')
    var dervishStocksDown = document.getElementById('stocks-down-dervish')
    if (isFirstTimeDervish) {
        isFirstTimeDervish = false
    } else if (numOfDervishSoldTotal >= 2500) {
        dervishPrice = 15000
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'inline'
    } else if (numOfDervishSoldTotal >= 400) {
        dervishPrice = Math.max(15000, dervishPrice / 2)
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'inline'
    } else if (numOfDervishSoldTotal >= 300) {
        dervishPrice = Math.max(15000, dervishPrice / 1.75)
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'inline'
    } else if (numOfDervishSoldTotal >= 200) {
        dervishPrice = Math.max(15000, dervishPrice / 1.5)
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'inline'
    } else if (numOfDervishSoldTotal >= 100) {
        dervishPrice = Math.max(15000, dervishPrice / 1.25)
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'inline'
    } else if (numOfDervishSoldTotal > 50) {
        dervishPrice = dervishPrice / 1
        dervishStocksUp.style.display = 'none'
        dervishStocksDown.style.display = 'none'
    } else if (numOfDervishSoldTotal <= 50 && numOfDervishSoldTotal !== 0) {
        dervishPrice = Math.min(75000, dervishPrice * 1.5)
        dervishStocksUp.style.display = 'inline'
        dervishStocksDown.style.display = 'none'
    } else if (numOfDervishSoldTotal === 0) {
        dervishPrice = Math.min(75000, dervishPrice * 2)
        dervishStocksUp.style.display = 'inline'
        dervishStocksDown.style.display = 'none'
    }
    numOfDervishSoldTotal = 0
    dervishPrice = Math.floor(dervishPrice)
    calcDervishSellPrice = dervishAmountTotal * dervishPrice
    document.getElementById('dervish-sell-total').innerText = calcDervishSellPrice.toLocaleString()
    document.getElementById('current-dervish-price').innerText = dervishPrice.toLocaleString()
}

dervishStocks()
setInterval(dervishStocks, 61000);

var calcDervishSellPrice = dervishAmountTotal * dervishPrice
document.getElementById('dervish-sell-total').innerText = calcDervishSellPrice.toLocaleString()

// Quantum Slime Section

let quantumAmount = 0
let quantumAmountTotal = 0

function clickQuantum() {
    quantumAmount = quantumAmount + clickLevel
    quantumTotal()
}

let numOfQuantumSlimes = 0
let costOfQuantumSlimes = 16777216000
document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
document.getElementById('quantum-slime-amount').innerText = numOfQuantumSlimes.toLocaleString()

function buyQuantumSlimes() {
    if (currentMoney >= costOfQuantumSlimes) {
        currentMoney = currentMoney - costOfQuantumSlimes
        numOfQuantumSlimes = numOfQuantumSlimes + 1
        playPurchaseSound()
        calcQPS()
    }
    if (numOfQuantumSlimes >= 250 && currentMoney >= costOfQuantumSlimes) {
        costOfQuantumSlimes = Math.floor(costOfQuantumSlimes * 1.1)
        document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
    } else if (numOfQuantumSlimes >= 100 && !(numOfQuantumSlimes >= 250)) {
        costOfQuantumSlimes = 134217728000
        document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
    } else if (numOfQuantumSlimes >= 50 && !(numOfQuantumSlimes >= 250)) {
        costOfQuantumSlimes = 67108864000
        document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
    } else if (numOfQuantumSlimes >= 10 && !(numOfQuantumSlimes >= 250)) {
        costOfQuantumSlimes = 33554432000
        document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
    }
    document.getElementById('quantum-slime-amount').innerText = numOfQuantumSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfQuantumSlimes >= 50 && clickRank === 14 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let quantumLevel = 1
let autoQuantumMultiplier = 0.2 * quantumLevel
let quantumLevelCost = 67108864000
document.getElementById('quantum-upgrade-price').innerText = quantumLevelCost.toLocaleString()

function levelUpQuantum() {
    if (currentMoney >= quantumLevelCost) {
        quantumLevel = quantumLevel + 1
        autoQuantumMultiplier = 0.2 * quantumLevel
        currentMoney = currentMoney - quantumLevelCost
        quantumLevelCost = quantumLevelCost * 5
        document.getElementById('quantum-upgrade-price').innerText = quantumLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcQPS()
    }
    if (quantumLevel === 5) {
        document.getElementById('level-up-quantum').style.display = 'none'
        document.getElementById('buy-quantum-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('quantum-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcQPS() {
    let quantumPerSec = numOfQuantumSlimes * autoQuantumMultiplier
    document.getElementById('quantum-per-second').innerText = quantumPerSec.toFixed(1)
}
calcQPS()

let autoQuantumAmount = 0
let quantumPrice = 30000

function autoQuantum() {
    autoQuantumAmount = autoQuantumAmount + numOfQuantumSlimes * autoQuantumMultiplier
    quantumTotal()
}

autoQuantum()
setInterval(autoQuantum, 1000);

function quantumTotal() {
    quantumAmountTotal = quantumAmount + autoQuantumAmount
    quantumAmountTotal = Math.floor(quantumAmountTotal)
    document.getElementById('quantum-plorts').innerText = quantumAmountTotal.toLocaleString()
    calcQuantumSellPrice = quantumAmountTotal * quantumPrice
    document.getElementById('quantum-sell-total').innerText = calcQuantumSellPrice.toLocaleString()
}

let numOfQuantumSoldTotal = 0

function quantumSell() {
    numOfQuantumSoldTotal = numOfQuantumSoldTotal + quantumAmountTotal
    currentMoney = currentMoney + quantumAmountTotal * quantumPrice
    quantumAmount = 0
    autoQuantumAmount = 0
    quantumTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcQuantumSellPrice = quantumAmountTotal * quantumPrice
    document.getElementById('quantum-sell-total').innerText = calcQuantumSellPrice.toLocaleString()
}

let isFirstTimeQuantum = true

function quantumStocks() {
    var quantumStocksUp = document.getElementById('stocks-up-quantum')
    var quantumStocksDown = document.getElementById('stocks-down-quantum')
    if (isFirstTimeQuantum) {
        isFirstTimeQuantum = false
    } else if (numOfQuantumSoldTotal >= 2500) {
        quantumPrice = 20000
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'inline'
    } else if (numOfQuantumSoldTotal >= 400) {
        quantumPrice = Math.max(20000, quantumPrice / 2)
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'inline'
    } else if (numOfQuantumSoldTotal >= 300) {
        quantumPrice = Math.max(20000, quantumPrice / 1.75)
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'inline'
    } else if (numOfQuantumSoldTotal >= 200) {
        quantumPrice = Math.max(20000, quantumPrice / 1.5)
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'inline'
    } else if (numOfQuantumSoldTotal >= 100) {
        quantumPrice = Math.max(20000, quantumPrice / 1.25)
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'inline'
    } else if (numOfQuantumSoldTotal > 50) {
        quantumPrice = quantumPrice / 1
        quantumStocksUp.style.display = 'none'
        quantumStocksDown.style.display = 'none'
    } else if (numOfQuantumSoldTotal <= 50 && numOfQuantumSoldTotal !== 0) {
        quantumPrice = Math.min(100000, quantumPrice * 1.5)
        quantumStocksUp.style.display = 'inline'
        quantumStocksDown.style.display = 'none'
    } else if (numOfQuantumSoldTotal === 0) {
        quantumPrice = Math.min(100000, quantumPrice * 2)
        quantumStocksUp.style.display = 'inline'
        quantumStocksDown.style.display = 'none'
    }
    numOfQuantumSoldTotal = 0
    quantumPrice = Math.floor(quantumPrice)
    calcQuantumSellPrice = quantumAmountTotal * quantumPrice
    document.getElementById('quantum-sell-total').innerText = calcQuantumSellPrice.toLocaleString()
    document.getElementById('current-quantum-price').innerText = quantumPrice.toLocaleString()
}

quantumStocks()
setInterval(quantumStocks, 61000);

var calcQuantumSellPrice = quantumAmountTotal * quantumPrice
document.getElementById('quantum-sell-total').innerText = calcQuantumSellPrice.toLocaleString()

// Tangle Slime Section

let tangleAmount = 0
let tangleAmountTotal = 0

function clickTangle() {
    tangleAmount = tangleAmount + clickLevel
    tangleTotal()
}

let numOfTangleSlimes = 0
let costOfTangleSlimes = 67108864000
document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
document.getElementById('tangle-slime-amount').innerText = numOfTangleSlimes.toLocaleString()

function buyTangleSlimes() {
    if (currentMoney >= costOfTangleSlimes) {
        currentMoney = currentMoney - costOfTangleSlimes
        numOfTangleSlimes = numOfTangleSlimes + 1
        playPurchaseSound()
        calcTanPS()
    }
    if (numOfTangleSlimes >= 250 && currentMoney >= costOfTangleSlimes) {
        costOfTangleSlimes = Math.floor(costOfTangleSlimes * 1.1)
        document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
    } else if (numOfTangleSlimes >= 100 && !(numOfTangleSlimes >= 250)) {
        costOfTangleSlimes = 536870912000
        document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
    } else if (numOfTangleSlimes >= 50 && !(numOfTangleSlimes >= 250)) {
        costOfTangleSlimes = 268435456000
        document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
    } else if (numOfTangleSlimes >= 10 && !(numOfTangleSlimes >= 250)) {
        costOfTangleSlimes = 134217728000
        document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
    }
    document.getElementById('tangle-slime-amount').innerText = numOfTangleSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfTangleSlimes >= 50 && clickRank === 15 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let tangleLevel = 1
let autoTangleMultiplier = 0.2 * tangleLevel
let tangleLevelCost = 268435456000
document.getElementById('tangle-upgrade-price').innerText = tangleLevelCost.toLocaleString()

function levelUpTangle() {
    if (currentMoney >= tangleLevelCost) {
        tangleLevel = tangleLevel + 1
        autoTangleMultiplier = 0.2 * tangleLevel
        currentMoney = currentMoney - tangleLevelCost
        tangleLevelCost = tangleLevelCost * 5
        document.getElementById('tangle-upgrade-price').innerText = tangleLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcTanPS()
    }
    if (tangleLevel === 5) {
        document.getElementById('level-up-tangle').style.display = 'none'
        document.getElementById('buy-tangle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('tangle-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcTanPS() {
    let tanglePerSec = numOfTangleSlimes * autoTangleMultiplier
    document.getElementById('tangle-per-second').innerText = tanglePerSec.toFixed(1)
}
calcTanPS()

let autoTangleAmount = 0
let tanglePrice = 60000

function autoTangle() {
    autoTangleAmount = autoTangleAmount + numOfTangleSlimes * autoTangleMultiplier
    tangleTotal()
}

autoTangle()
setInterval(autoTangle, 1000);

function tangleTotal() {
    tangleAmountTotal = tangleAmount + autoTangleAmount
    tangleAmountTotal = Math.floor(tangleAmountTotal)
    document.getElementById('tangle-plorts').innerText = tangleAmountTotal.toLocaleString()
    calcTangleSellPrice = tangleAmountTotal * tanglePrice
    document.getElementById('tangle-sell-total').innerText = calcTangleSellPrice.toLocaleString()
}

let numOfTangleSoldTotal = 0

function tangleSell() {
    numOfTangleSoldTotal = numOfTangleSoldTotal + tangleAmountTotal
    currentMoney = currentMoney + tangleAmountTotal * tanglePrice
    tangleAmount = 0
    autoTangleAmount = 0
    tangleTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcTangleSellPrice = tangleAmountTotal * tanglePrice
    document.getElementById('tangle-sell-total').innerText = calcTangleSellPrice.toLocaleString()
}

let isFirstTimeTangle = true

function tangleStocks() {
    var tangleStocksUp = document.getElementById('stocks-up-tangle')
    var tangleStocksDown = document.getElementById('stocks-down-tangle')
    if (isFirstTimeTangle) {
        isFirstTimeTangle = false
    } else if (numOfTangleSoldTotal >= 2500) {
        tanglePrice = 40000
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'inline'
    } else if (numOfTangleSoldTotal >= 400) {
        tanglePrice = Math.max(40000, tanglePrice / 2)
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'inline'
    } else if (numOfTangleSoldTotal >= 300) {
        tanglePrice = Math.max(40000, tanglePrice / 1.75)
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'inline'
    } else if (numOfTangleSoldTotal >= 200) {
        tanglePrice = Math.max(40000, tanglePrice / 1.5)
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'inline'
    } else if (numOfTangleSoldTotal >= 100) {
        tanglePrice = Math.max(40000, tanglePrice / 1.25)
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'inline'
    } else if (numOfTangleSoldTotal > 50) {
        tanglePrice = tanglePrice / 1
        tangleStocksUp.style.display = 'none'
        tangleStocksDown.style.display = 'none'
    } else if (numOfTangleSoldTotal <= 50 && numOfTangleSoldTotal !== 0) {
        tanglePrice = Math.min(150000, tanglePrice * 1.5)
        tangleStocksUp.style.display = 'inline'
        tangleStocksDown.style.display = 'none'
    } else if (numOfTangleSoldTotal === 0) {
        tanglePrice = Math.min(150000, tanglePrice * 2)
        tangleStocksUp.style.display = 'inline'
        tangleStocksDown.style.display = 'none'
    }
    numOfTangleSoldTotal = 0
    tanglePrice = Math.floor(tanglePrice)
    calcTangleSellPrice = tangleAmountTotal * tanglePrice
    document.getElementById('tangle-sell-total').innerText = calcTangleSellPrice.toLocaleString()
    document.getElementById('current-tangle-price').innerText = tanglePrice.toLocaleString()
}
tangleStocks()
setInterval(tangleStocks, 61000);

var calcTangleSellPrice = tangleAmountTotal * tanglePrice
document.getElementById('tangle-sell-total').innerText = calcTangleSellPrice.toLocaleString()

// Mosaic Slime Section

let mosaicAmount = 0
let mosaicAmountTotal = 0

function clickMosaic() {
    mosaicAmount = mosaicAmount + clickLevel
    mosaicTotal()
}

let numOfMosaicSlimes = 0
let costOfMosaicSlimes = 268435456000
document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
document.getElementById('mosaic-slime-amount').innerText = numOfMosaicSlimes.toLocaleString()

function buyMosaicSlimes() {
    if (currentMoney >= costOfMosaicSlimes) {
        currentMoney = currentMoney - costOfMosaicSlimes
        numOfMosaicSlimes = numOfMosaicSlimes + 1
        playPurchaseSound()
        calcMPS()
    }
    if (numOfMosaicSlimes >= 250 && currentMoney >= costOfMosaicSlimes) {
        costOfMosaicSlimes = Math.floor(costOfMosaicSlimes * 1.1)
        document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
    } else if (numOfMosaicSlimes >= 100 && !(numOfMosaicSlimes >= 250)) {
        costOfMosaicSlimes = 2147483648000
        document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
    } else if (numOfMosaicSlimes >= 50 && !(numOfMosaicSlimes >= 250)) {
        costOfMosaicSlimes = 1073741824000
        document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
    } else if (numOfMosaicSlimes >= 10 && !(numOfMosaicSlimes >= 250)) {
        costOfMosaicSlimes = 536870912000
        document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
    }
    document.getElementById('mosaic-slime-amount').innerText = numOfMosaicSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfMosaicSlimes >= 50 && clickRank === 16 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let mosaicLevel = 1
let autoMosaicMultiplier = 0.2 * mosaicLevel
let mosaicLevelCost = 1073741824000
document.getElementById('mosaic-upgrade-price').innerText = mosaicLevelCost.toLocaleString()

function levelUpMosaic() {
    if (currentMoney >= mosaicLevelCost) {
        mosaicLevel = mosaicLevel + 1
        autoMosaicMultiplier = 0.2 * mosaicLevel
        currentMoney = currentMoney - mosaicLevelCost
        mosaicLevelCost = mosaicLevelCost * 5
        document.getElementById('mosaic-upgrade-price').innerText = mosaicLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcMPS()
    }
    if (mosaicLevel === 5) {
        document.getElementById('level-up-mosaic').style.display = 'none'
        document.getElementById('buy-mosaic-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('mosaic-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcMPS() {
    let mosaicPerSec = numOfMosaicSlimes * autoMosaicMultiplier
    document.getElementById('mosaic-per-second').innerText = mosaicPerSec.toFixed(1)
}
calcMPS()

let autoMosaicAmount = 0
let mosaicPrice = 97500

function autoMosaic() {
    autoMosaicAmount = autoMosaicAmount + numOfMosaicSlimes * autoMosaicMultiplier
    mosaicTotal()
}

autoMosaic()
setInterval(autoMosaic, 1000);

function mosaicTotal() {
    mosaicAmountTotal = mosaicAmount + autoMosaicAmount
    mosaicAmountTotal = Math.floor(mosaicAmountTotal)
    document.getElementById('mosaic-plorts').innerText = mosaicAmountTotal.toLocaleString()
    calcMosaicSellPrice = mosaicAmountTotal * mosaicPrice
    document.getElementById('mosaic-sell-total').innerText = calcMosaicSellPrice.toLocaleString()
}

let numOfMosaicSoldTotal = 0

function mosaicSell() {
    numOfMosaicSoldTotal = numOfMosaicSoldTotal + mosaicAmountTotal
    currentMoney = currentMoney + mosaicAmountTotal * mosaicPrice
    mosaicAmount = 0
    autoMosaicAmount = 0
    mosaicTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcMosaicSellPrice = mosaicAmountTotal * mosaicPrice
    document.getElementById('mosaic-sell-total').innerText = calcMosaicSellPrice.toLocaleString()
}

let isFirstTimeMosaic = true

function mosaicStocks() {
    var mosaicStocksUp = document.getElementById('stocks-up-mosaic')
    var mosaicStocksDown = document.getElementById('stocks-down-mosaic')
    if (isFirstTimeMosaic) {
        isFirstTimeMosaic = false
    } else if (numOfMosaicSoldTotal >= 2500) {
        mosaicPrice = 65000
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'inline'
    } else if (numOfMosaicSoldTotal >= 400) {
        mosaicPrice = Math.max(65000, mosaicPrice / 2)
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'inline'
    } else if (numOfMosaicSoldTotal >= 300) {
        mosaicPrice = Math.max(65000, mosaicPrice / 1.75)
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'inline'
    } else if (numOfMosaicSoldTotal >= 200) {
        mosaicPrice = Math.max(65000, mosaicPrice / 1.5)
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'inline'
    } else if (numOfMosaicSoldTotal >= 100) {
        mosaicPrice = Math.max(65000, mosaicPrice / 1.25)
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'inline'
    } else if (numOfMosaicSoldTotal > 50) {
        mosaicPrice = mosaicPrice / 1
        mosaicStocksUp.style.display = 'none'
        mosaicStocksDown.style.display = 'none'
    } else if (numOfMosaicSoldTotal <= 50 && numOfMosaicSoldTotal !== 0) {
        mosaicPrice = Math.min(300000, mosaicPrice * 1.5)
        mosaicStocksUp.style.display = 'inline'
        mosaicStocksDown.style.display = 'none'
    } else if (numOfMosaicSoldTotal === 0) {
        mosaicPrice = Math.min(300000, mosaicPrice * 2)
        mosaicStocksUp.style.display = 'inline'
        mosaicStocksDown.style.display = 'none'
    }
    numOfMosaicSoldTotal = 0
    mosaicPrice = Math.floor(mosaicPrice)
    calcMosaicSellPrice = mosaicAmountTotal * mosaicPrice
    document.getElementById('mosaic-sell-total').innerText = calcMosaicSellPrice.toLocaleString()
    document.getElementById('current-mosaic-price').innerText = mosaicPrice.toLocaleString()
}
mosaicStocks()
setInterval(mosaicStocks, 61000);

var calcMosaicSellPrice = mosaicAmountTotal * mosaicPrice
document.getElementById('mosaic-sell-total').innerText = calcMosaicSellPrice.toLocaleString()

// Gold Slime Section

let goldAmount = 0
let goldAmountTotal = 0

function clickGold() {
    goldAmount = goldAmount + clickLevel
    goldTotal()
}

let numOfGoldSlimes = 0
let costOfGoldSlimes = 1073741824000
document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
document.getElementById('gold-slime-amount').innerText = numOfGoldSlimes.toLocaleString()

function buyGoldSlimes() {
    if (currentMoney >= costOfGoldSlimes) {
        currentMoney = currentMoney - costOfGoldSlimes
        numOfGoldSlimes = numOfGoldSlimes + 1
        playPurchaseSound()
        calcGPS()
    }
    if (numOfGoldSlimes >= 250 && currentMoney >= costOfGoldSlimes) {
        costOfGoldSlimes = Math.floor(costOfGoldSlimes * 1.1)
        document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
    } else if (numOfGoldSlimes >= 100 && !(numOfGoldSlimes >= 250)) {
        costOfGoldSlimes = 8589934600000
        document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
    } else if (numOfGoldSlimes >= 50 && !(numOfGoldSlimes >= 250)) {
        costOfGoldSlimes = 4294967296000
        document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
    } else if (numOfGoldSlimes >= 10 && !(numOfGoldSlimes >= 250)) {
        costOfGoldSlimes = 2147483648000
        document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
    }
    document.getElementById('gold-slime-amount').innerText = numOfGoldSlimes.toLocaleString()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    if (numOfGoldSlimes >= 50 && clickRank === 17 && clickRankBtn.style.display === 'none') {
        clickRankBtn.style.display = 'inline'
    }
}

let goldLevel = 1
let autoGoldMultiplier = 0.2 * goldLevel
let goldLevelCost = 4294967296000
document.getElementById('gold-upgrade-price').innerText = goldLevelCost.toLocaleString()

function levelUpGold() {
    if (currentMoney >= goldLevelCost) {
        goldLevel = goldLevel + 1
        autoGoldMultiplier = 0.2 * goldLevel
        currentMoney = currentMoney - goldLevelCost
        goldLevelCost = goldLevelCost * 5
        document.getElementById('gold-upgrade-price').innerText = goldLevelCost.toLocaleString()
        playPurchaseUpgradeSound()
        calcGPS()
    }
    if (goldLevel === 5) {
        document.getElementById('level-up-gold').style.display = 'none'
        document.getElementById('buy-gold-slimes').classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById('gold-purchase-section').classList = 'p-1 col-4'
    }
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
}

function calcGPS() {
    let goldPerSec = numOfGoldSlimes * autoGoldMultiplier
    document.getElementById('gold-per-second').innerText = goldPerSec.toFixed(1)
}
calcGPS()

let autoGoldAmount = 0
let goldPrice = 150000

function autoGold() {
    autoGoldAmount = autoGoldAmount + numOfGoldSlimes * autoGoldMultiplier
    goldTotal()
}

autoGold()
setInterval(autoGold, 1000);

function goldTotal() {
    goldAmountTotal = goldAmount + autoGoldAmount
    goldAmountTotal = Math.floor(goldAmountTotal)
    document.getElementById('gold-plorts').innerText = goldAmountTotal.toLocaleString()
    calcGoldSellPrice = goldAmountTotal * goldPrice
    document.getElementById('gold-sell-total').innerText = calcGoldSellPrice.toLocaleString()
}

let numOfGoldSoldTotal = 0

function goldSell() {
    numOfGoldSoldTotal = numOfGoldSoldTotal + goldAmountTotal
    currentMoney = currentMoney + goldAmountTotal * goldPrice
    goldAmount = 0
    autoGoldAmount = 0
    goldTotal()
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    calcGoldSellPrice = goldAmountTotal * goldPrice
    document.getElementById('gold-sell-total').innerText = calcGoldSellPrice.toLocaleString()
}

let isFirstTimeGold = true

function goldStocks() {
    var goldStocksUp = document.getElementById('stocks-up-gold')
    var goldStocksDown = document.getElementById('stocks-down-gold')
    if (isFirstTimeGold) {
        isFirstTimeGold = false
    } else if (numOfGoldSoldTotal >= 2500) {
        goldPrice = 100000
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'inline'
    } else if (numOfGoldSoldTotal >= 400) {
        goldPrice = Math.max(100000, goldPrice / 2)
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'inline'
    } else if (numOfGoldSoldTotal >= 300) {
        goldPrice = Math.max(100000, goldPrice / 1.75)
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'inline'
    } else if (numOfGoldSoldTotal >= 200) {
        goldPrice = Math.max(100000, goldPrice / 1.5)
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'inline'
    } else if (numOfGoldSoldTotal >= 100) {
        goldPrice = Math.max(100000, goldPrice / 1.25)
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'inline'
    } else if (numOfGoldSoldTotal > 50) {
        goldPrice = goldPrice / 1
        goldStocksUp.style.display = 'none'
        goldStocksDown.style.display = 'none'
    } else if (numOfGoldSoldTotal <= 50 && numOfGoldSoldTotal !== 0) {
        goldPrice = Math.min(1000000, goldPrice * 1.5)
        goldStocksUp.style.display = 'inline'
        goldStocksDown.style.display = 'none'
    } else if (numOfGoldSoldTotal === 0) {
        goldPrice = Math.min(1000000, goldPrice * 2)
        goldStocksUp.style.display = 'inline'
        goldStocksDown.style.display = 'none'
    }
    numOfGoldSoldTotal = 0
    goldPrice = Math.floor(goldPrice)
    calcGoldSellPrice = goldAmountTotal * goldPrice
    document.getElementById('gold-sell-total').innerText = calcGoldSellPrice.toLocaleString()
    document.getElementById('current-gold-price').innerText = goldPrice.toLocaleString()
}
goldStocks()
setInterval(goldStocks, 61000);

var calcGoldSellPrice = goldAmountTotal * goldPrice
document.getElementById('gold-sell-total').innerText = calcGoldSellPrice.toLocaleString()

// sfx

function playGenerationSound() {
    let snd = new Audio("sfx/generation.wav");
    snd.play();
}

function playSellSound() {
    let snd = new Audio("sfx/sell.wav");
    snd.play();
}

function playPurchaseSound() {
    let snd = new Audio("sfx/buy.wav");
    snd.play();
}

function playPurchaseUpgradeSound() {
    let snd = new Audio("sfx/upgrade.wav");
    snd.play();
}

// random chance when generating to find a lucky slime

function luckySlime() {
    let randomNumber = Math.floor(Math.random() * 1000)
    if (randomNumber === 0) {
        let priceArray = [pinkPrice, rockPrice, phosphorPrice, tabbyPrice, puddlePrice, firePrice, honeyPrice, boomPrice, hunterPrice, radPrice, crystalPrice, saberPrice, dervishPrice, quantumPrice, tanglePrice, mosaicPrice, goldPrice]
        let typeArray = ["pink", "rock", "phosphor", "tabby", "puddle", "fire", "honey", "boom", "hunter", "rad", "crystal", "saber", "dervish", "quantum", "tangle", "mosaic", "gold"]
        for (let i = 0; i < priceArray.length; i++) {
            priceArray[i] = priceArray[i] * 10
            document.getElementById(`current-${typeArray[i]}-price`).innerText = priceArray[i].toLocaleString()
        }
        document.getElementById('luckyPopup').classList.remove('d-none') // add a popup when it triggers telling you what happened
        let snd = new Audio("sfx/lucky_coins.wav");
        snd.play();
        setTimeout(() => {
            document.getElementById('luckyPopup').classList.add('d-none')
        }, 5000);
    }
}

let upgradeMenu = document.getElementById('upgrade-menu')
let secondSection = document.getElementById('second-section')
let expandMenuBtn = document.getElementById('expandMenu')
let retractMenuBtn = document.getElementById('retractMenu')
let upgradeMenu2 = document.getElementById('upgrade-menu2')
function expandUpgrades() {
    upgradeMenu.classList.add('expansion-anim')
    upgradeMenu2.classList.add('expansion-anim')
    upgradeMenu.classList.remove('retract-anim')
    upgradeMenu2.classList.remove('retract-anim')
    secondSection.classList.add('d-none')
    secondSection.classList.remove('fadein-anim')
    expandMenuBtn.classList.add('d-none')
    retractMenuBtn.classList.remove('d-none')
    upgradeMenu2.classList.remove('d-none')
}

function retractUpgrades() {
    upgradeMenu.classList.remove('expansion-anim')
    upgradeMenu2.classList.remove('expansion-anim')
    upgradeMenu.classList.add('retract-anim')
    upgradeMenu2.classList.add('retract-anim')
    secondSection.classList.remove('d-none')
    secondSection.classList.add('fadein-anim')
    expandMenuBtn.classList.remove('d-none')
    retractMenuBtn.classList.add('d-none')
    upgradeMenu2.classList.add('d-none')
}

// save the game when appropriate button is clicked, and before the page is closed
function saveGame() {
    localStorage.setItem("money", currentMoney); // saves current money

    localStorage.setItem("click-rank", clickRank); // saves current click rank, need to make variable for this to save
    localStorage.setItem("click-level", clickLevel); // saves current click level

    let typeArray = ["pink", "rock", "phosphor", "tabby", "puddle", "fire", "honey", "boom", "hunter", "rad", "crystal", "saber", "dervish", "quantum", "tangle", "mosaic", "gold"];
    let amountsTotal = [pinkAmountTotal, rockAmountTotal, phosphorAmountTotal, tabbyAmountTotal, puddleAmountTotal, fireAmountTotal, honeyAmountTotal, boomAmountTotal, hunterAmountTotal, radAmountTotal, crystalAmountTotal, saberAmountTotal, dervishAmountTotal, quantumAmountTotal, tangleAmountTotal, mosaicAmountTotal, goldAmountTotal];
    let prices = [pinkPrice, rockPrice, phosphorPrice, tabbyPrice, puddlePrice, firePrice, honeyPrice, boomPrice, hunterPrice, radPrice, crystalPrice, saberPrice, dervishPrice, quantumPrice, tanglePrice, mosaicPrice, goldPrice];
    let numOfSlimes = [numOfPinkSlimes, numOfRockSlimes, numOfPhosphorSlimes, numOfTabbySlimes, numOfPuddleSlimes, numOfFireSlimes, numOfHoneySlimes, numOfBoomSlimes, numOfHunterSlimes, numOfRadSlimes, numOfCrystalSlimes, numOfSaberSlimes, numOfDervishSlimes, numOfQuantumSlimes, numOfTangleSlimes, numOfMosaicSlimes, numOfGoldSlimes];
    let slimeCosts = [costOfPinkSlimes, costOfRockSlimes, costOfPhosphorSlimes, costOfTabbySlimes, costOfPuddleSlimes, costOfFireSlimes, costOfHoneySlimes, costOfBoomSlimes, costOfHunterSlimes, costOfRadSlimes, costOfCrystalSlimes, costOfSaberSlimes, costOfDervishSlimes, costOfQuantumSlimes, costOfTangleSlimes, costOfMosaicSlimes, costOfGoldSlimes];
    let levels = [pinkLevel, rockLevel, phosphorLevel, tabbyLevel, puddleLevel, fireLevel, honeyLevel, boomLevel, hunterLevel, radLevel, crystalLevel, saberLevel, dervishLevel, quantumLevel, tangleLevel, mosaicLevel, goldLevel];
    let levelCosts = [pinkLevelCost, rockLevelCost, phosphorLevelCost, tabbyLevelCost, puddleLevelCost, fireLevelCost, honeyLevelCost, boomLevelCost, hunterLevelCost, radLevelCost, crystalLevelCost, saberLevelCost, dervishLevelCost, quantumLevelCost, tangleLevelCost, mosaicLevelCost, goldLevelCost];
    for (let i = 0; i < typeArray.length; i++) {
        localStorage.setItem(`${typeArray[i]}-plorts`, amountsTotal[i]);
        localStorage.setItem(`${typeArray[i]}-price`, prices[i]);
        localStorage.setItem(`${typeArray[i]}-slimes`, numOfSlimes[i]);
        localStorage.setItem(`${typeArray[i]}-slime-price`, slimeCosts[i]);
        localStorage.setItem(`${typeArray[i]}-level`, levels[i]);
        localStorage.setItem(`${typeArray[i]}-level-price`, levelCosts[i]);
    }
}

// load the game if there are saved values
function loadSave() { //triggers on loading of page
    //replace variables with previously saved values
    if (localStorage.getItem("pink-price")) {
        currentMoney = parseInt(localStorage.getItem("money"));
        document.getElementById('current-money').innerText = currentMoney.toLocaleString()

        clickRank = parseInt(localStorage.getItem("click-rank"));
        clickLevel = parseInt(localStorage.getItem("click-level"));
        document.getElementById('click-level').innerText = clickLevel
        if (clickLevel === 5) {
            document.getElementById('level-up-click').style.display = 'none'
        }

        pinkAmount = parseInt(localStorage.getItem("pink-plorts"));
        pinkPrice = parseInt(localStorage.getItem("pink-price"));
        document.getElementById('current-pink-price').innerText = pinkPrice.toLocaleString()
        numOfPinkSlimes = parseInt(localStorage.getItem("pink-slimes"));
        document.getElementById('pink-slime-amount').innerText = numOfPinkSlimes.toLocaleString()
        costOfPinkSlimes = parseInt(localStorage.getItem("pink-slime-price"));
        document.getElementById('pink-slime-price').innerText = costOfPinkSlimes.toLocaleString()
        pinkLevel = parseInt(localStorage.getItem("pink-level"));
        autoPinkMultiplier = 0.2 * pinkLevel
        calcPPS()
        if (pinkLevel === 5) {
            document.getElementById('level-up-pink').style.display = 'none'
            document.getElementById('buy-pink-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('pink-purchase-section').classList = 'p-1 col-4'
        }
        pinkLevelCost = parseInt(localStorage.getItem("pink-level-price"));
        document.getElementById('pink-upgrade-price').innerText = pinkLevelCost.toLocaleString()

        rockAmount = parseInt(localStorage.getItem("rock-plorts"));
        rockPrice = parseInt(localStorage.getItem("rock-price"));
        document.getElementById('current-rock-price').innerText = rockPrice.toLocaleString()
        numOfRockSlimes = parseInt(localStorage.getItem("rock-slimes"));
        document.getElementById('rock-slime-amount').innerText = numOfRockSlimes.toLocaleString()
        costOfRockSlimes = parseInt(localStorage.getItem("rock-slime-price"));
        document.getElementById('rock-slime-price').innerText = costOfRockSlimes.toLocaleString()
        rockLevel = parseInt(localStorage.getItem("rock-level"));
        autoRockMultiplier = 0.2 * rockLevel
        calcRPS()
        if (rockLevel === 5) {
            document.getElementById('level-up-rock').style.display = 'none'
            document.getElementById('buy-rock-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        rockLevelCost = parseInt(localStorage.getItem("rock-level-price"));
        document.getElementById('rock-upgrade-price').innerText = rockLevelCost.toLocaleString()

        phosphorAmount = parseInt(localStorage.getItem("phosphor-plorts"));
        phosphorPrice = parseInt(localStorage.getItem("phosphor-price"));
        document.getElementById('current-phosphor-price').innerText = phosphorPrice.toLocaleString()
        numOfPhosphorSlimes = parseInt(localStorage.getItem("phosphor-slimes"));
        document.getElementById('phosphor-slime-amount').innerText = numOfPhosphorSlimes.toLocaleString()
        costOfPhosphorSlimes = parseInt(localStorage.getItem("phosphor-slime-price"));
        document.getElementById('phosphor-slime-price').innerText = costOfPhosphorSlimes.toLocaleString()
        autoPhosphorMultiplier = 0.2 * phosphorPrice
        calcPhPS()
        if (phosphorLevel === 5) {
            document.getElementById('level-up-phosphor').style.display = 'none'
            document.getElementById('buy-phosphor-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('phosphor-purchase-section').classList = 'p-1 col-4'
        }
        phosphorLevelCost = parseInt(localStorage.getItem("phosphor-level-price"));
        document.getElementById('phosphor-upgrade-price').innerText = phosphorLevelCost.toLocaleString()

        tabbyAmount = parseInt(localStorage.getItem("tabby-plorts"));
        tabbyPrice = parseInt(localStorage.getItem("tabby-price"));
        document.getElementById('current-tabby-price').innerText = tabbyPrice.toLocaleString()
        numOfTabbySlimes = parseInt(localStorage.getItem("tabby-slimes"));
        document.getElementById('tabby-slime-amount').innerText = numOfTabbySlimes.toLocaleString()
        costOfTabbySlimes = parseInt(localStorage.getItem("tabby-slime-price"));
        document.getElementById('tabby-slime-price').innerText = costOfTabbySlimes.toLocaleString()
        autoTabbyMultiplier = 0.2 * tabbyLevel
        calcTPS()
        if (tabbyLevel === 5) {
            document.getElementById('level-up-tabby').style.display = 'none'
            document.getElementById('buy-tabby-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('tabby-purchase-section').classList = 'p-1 col-4'
        }
        tabbyLevelCost = parseInt(localStorage.getItem("tabby-level-price"));
        document.getElementById('tabby-upgrade-price').innerText = tabbyLevelCost.toLocaleString()

        puddleAmount = parseInt(localStorage.getItem("puddle-plorts"));
        puddlePrice = parseInt(localStorage.getItem("puddle-price"));
        document.getElementById('current-puddle-price').innerText = puddlePrice.toLocaleString()
        numOfPuddleSlimes = parseInt(localStorage.getItem("puddle-slimes"));
        document.getElementById('puddle-slime-amount').innerText = numOfPuddleSlimes.toLocaleString()
        costOfPuddleSlimes = parseInt(localStorage.getItem("puddle-slime-price"));
        document.getElementById('puddle-slime-price').innerText = costOfPuddleSlimes.toLocaleString()
        puddleLevel = parseInt(localStorage.getItem("puddle-level"));
        autoPuddleMultiplier = 0.2 * puddleLevel
        calcPuPS()
        if (puddleLevel === 5) {
            document.getElementById('level-up-puddle').style.display = 'none'
            document.getElementById('buy-puddle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('puddle-purchase-section').classList = 'p-1 col-4'
        }
        puddleLevelCost = parseInt(localStorage.getItem("puddle-level-price"));
        document.getElementById('puddle-upgrade-price').innerText = puddleLevelCost.toLocaleString()

        fireAmount = parseInt(localStorage.getItem("fire-plorts"));
        firePrice = parseInt(localStorage.getItem("fire-price"));
        document.getElementById('current-fire-price').innerText = firePrice.toLocaleString()
        numOfFireSlimes = parseInt(localStorage.getItem("fire-slimes"));
        document.getElementById('fire-slime-amount').innerText = numOfFireSlimes.toLocaleString()
        costOfFireSlimes = parseInt(localStorage.getItem("fire-slime-price"));
        document.getElementById('fire-slime-price').innerText = costOfFireSlimes.toLocaleString()
        fireLevel = parseInt(localStorage.getItem("fire-level"));
        autoFireMultiplier = 0.2 * fireLevel
        calcFPS()
        if (fireLevel === 5) {
            document.getElementById('level-up-fire').style.display = 'none'
            document.getElementById('buy-fire-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('fire-purchase-section').classList = 'p-1 col-4'
        }
        fireLevelCost = parseInt(localStorage.getItem("fire-level-price"));
        document.getElementById('fire-upgrade-price').innerText = fireLevelCost.toLocaleString()

        honeyAmount = parseInt(localStorage.getItem("honey-plorts"));
        honeyPrice = parseInt(localStorage.getItem("honey-price"));
        document.getElementById('current-honey-price').innerText = honeyPrice.toLocaleString()
        numOfHoneySlimes = parseInt(localStorage.getItem("honey-slimes"));
        document.getElementById('honey-slime-amount').innerText = numOfHoneySlimes.toLocaleString()
        costOfHoneySlimes = parseInt(localStorage.getItem("honey-slime-price"));
        document.getElementById('honey-slime-price').innerText = costOfHoneySlimes.toLocaleString()
        honeyLevel = parseInt(localStorage.getItem("honey-level"));
        autoHoneyMultiplier = 0.2 * honeyLevel
        calcHPS()
        if (honeyLevel === 5) {
            document.getElementById('level-up-honey').style.display = 'none'
            document.getElementById('buy-honey-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('honey-purchase-section').classList = 'p-1 col-4'
        }
        honeyLevelCost = parseInt(localStorage.getItem("honey-level-price"));
        document.getElementById('honey-upgrade-price').innerText = honeyLevelCost.toLocaleString()

        boomAmount = parseInt(localStorage.getItem("boom-plorts"));
        boomPrice = parseInt(localStorage.getItem("boom-price"));
        document.getElementById('current-boom-price').innerText = boomPrice.toLocaleString()
        numOfBoomSlimes = parseInt(localStorage.getItem("boom-slimes"));
        document.getElementById('boom-slime-amount').innerText = numOfBoomSlimes.toLocaleString()
        costOfBoomSlimes = parseInt(localStorage.getItem("boom-slime-price"));
        document.getElementById('boom-slime-price').innerText = costOfBoomSlimes.toLocaleString()
        boomLevel = parseInt(localStorage.getItem("boom-level"));
        autoBoomMultiplier = 0.2 * boomLevel
        calcBPS()
        if (boomLevel === 5) {
            document.getElementById('level-up-boom').style.display = 'none'
            document.getElementById('buy-boom-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('boom-purchase-section').classList = 'p-1 col-4'
        }
        boomLevelCost = parseInt(localStorage.getItem("boom-level-price"));
        document.getElementById('boom-upgrade-price').innerText = boomLevelCost.toLocaleString()

        hunterAmount = parseInt(localStorage.getItem("hunter-plorts"));
        hunterPrice = parseInt(localStorage.getItem("hunter-price"));
        document.getElementById('current-hunter-price').innerText = hunterPrice.toLocaleString()
        numOfHunterSlimes = parseInt(localStorage.getItem("hunter-slimes"));
        document.getElementById('hunter-slime-amount').innerText = numOfHunterSlimes.toLocaleString()
        costOfHunterSlimes = parseInt(localStorage.getItem("hunter-slime-price"));
        document.getElementById('hunter-slime-price').innerText = costOfHunterSlimes.toLocaleString()
        hunterLevel = parseInt(localStorage.getItem("hunter-level"));
        autoHunterMultiplier = 0.2 * hunterLevel
        calcHuPS()
        if (hunterLevel === 5) {
            document.getElementById('level-up-hunter').style.display = 'none'
            document.getElementById('buy-hunter-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('hunter-purchase-section').classList = 'p-1 col-4'
        }
        hunterLevelCost = parseInt(localStorage.getItem("hunter-level-price"));
        document.getElementById('hunter-upgrade-price').innerText = hunterLevelCost.toLocaleString()

        radAmount = parseInt(localStorage.getItem("rad-plorts"));
        radPrice = parseInt(localStorage.getItem("rad-price"));
        document.getElementById('current-rad-price').innerText = radPrice.toLocaleString()
        numOfRadSlimes = parseInt(localStorage.getItem("rad-slimes"));
        document.getElementById('rad-slime-amount').innerText = numOfRadSlimes.toLocaleString()
        costOfRadSlimes = parseInt(localStorage.getItem("rad-slime-price"));
        document.getElementById('rad-slime-price').innerText = costOfRadSlimes.toLocaleString()
        radLevel = parseInt(localStorage.getItem("rad-level"));
        if (radLevel === 5) {
            document.getElementById('level-up-rad').style.display = 'none'
            document.getElementById('buy-rad-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rad-purchase-section').classList = 'p-1 col-4'
        }
        radLevelCost = parseInt(localStorage.getItem("rad-level-price"));
        document.getElementById('rad-upgrade-price').innerText = radLevelCost.toLocaleString()

        crystalAmount = parseInt(localStorage.getItem("crystal-plorts"));
        crystalPrice = parseInt(localStorage.getItem("crystal-price"));
        document.getElementById('current-crystal-price').innerText = crystalPrice.toLocaleString()
        numOfCrystalSlimes = parseInt(localStorage.getItem("crystal-slimes"));
        document.getElementById('crystal-slime-amount').innerText = numOfCrystalSlimes.toLocaleString()
        costOfCrystalSlimes = parseInt(localStorage.getItem("crystal-slime-price"));
        document.getElementById('crystal-slime-price').innerText = costOfCrystalSlimes.toLocaleString()
        crystalLevel = parseInt(localStorage.getItem("crystal-level"));
        autoCrystalMultiplier = 0.2 * crystalLevel
        calcCPS()
        if (crystalLevel === 5) {
            document.getElementById('level-up-crystal').style.display = 'none'
            document.getElementById('buy-crystal-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        crystalLevelCost = parseInt(localStorage.getItem("crystal-level-price"));
        document.getElementById('crystal-upgrade-price').innerText = crystalLevelCost.toLocaleString()

        saberAmount = parseInt(localStorage.getItem("saber-plorts"));
        saberPrice = parseInt(localStorage.getItem("saber-price"));
        document.getElementById('current-saber-price').innerText = saberPrice.toLocaleString()
        numOfSaberSlimes = parseInt(localStorage.getItem("saber-slimes"));
        document.getElementById('saber-slime-amount').innerText = numOfSaberSlimes.toLocaleString()
        costOfSaberSlimes = parseInt(localStorage.getItem("saber-slime-price"));
        document.getElementById('saber-slime-price').innerText = costOfSaberSlimes.toLocaleString()
        saberLevel = parseInt(localStorage.getItem("saber-level"));
        autoSaberMultiplier = 0.2 * saberLevel
        calcSPS()
        if (saberLevel === 5) {
            document.getElementById('level-up-saber').style.display = 'none'
            document.getElementById('buy-saber-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        saberLevelCost = parseInt(localStorage.getItem("saber-level-price"));
        document.getElementById('saber-upgrade-price').innerText = saberLevelCost.toLocaleString()

        dervishAmount = parseInt(localStorage.getItem("dervish-plorts"));
        dervishPrice = parseInt(localStorage.getItem("dervish-price"));
        document.getElementById('current-dervish-price').innerText = dervishPrice.toLocaleString()
        numOfDervishSlimes = parseInt(localStorage.getItem("dervish-slimes"));
        document.getElementById('dervish-slime-amount').innerText = numOfDervishSlimes.toLocaleString()
        costOfDervishSlimes = parseInt(localStorage.getItem("dervish-slime-price"));
        document.getElementById('dervish-slime-price').innerText = costOfDervishSlimes.toLocaleString()
        dervishLevel = parseInt(localStorage.getItem("dervish-level"));
        autoDervishMultiplier = 0.2 * dervishLevel
        calcDPS()
        if (dervishLevel === 5) {
            document.getElementById('level-up-dervish').style.display = 'none'
            document.getElementById('buy-dervish-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        dervishLevelCost = parseInt(localStorage.getItem("dervish-level-price"));
        document.getElementById('dervish-upgrade-price').innerText = dervishLevelCost.toLocaleString()

        quantumAmount = parseInt(localStorage.getItem("quantum-plorts"));
        quantumPrice = parseInt(localStorage.getItem("quantum-price"));
        document.getElementById('current-quantum-price').innerText = quantumPrice.toLocaleString()
        numOfQuantumSlimes = parseInt(localStorage.getItem("quantum-slimes"));
        document.getElementById('quantum-slime-amount').innerText = numOfQuantumSlimes.toLocaleString()
        costOfQuantumSlimes = parseInt(localStorage.getItem("quantum-slime-price"));
        document.getElementById('quantum-slime-price').innerText = costOfQuantumSlimes.toLocaleString()
        quantumLevel = parseInt(localStorage.getItem("quantum-level"));
        autoQuantumMultiplier = 0.2 * quantumLevel
        calcQPS()
        if (quantumLevel === 5) {
            document.getElementById('level-up-quantum').style.display = 'none'
            document.getElementById('buy-quantum-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        quantumLevelCost = parseInt(localStorage.getItem("quantum-level-price"));
        document.getElementById('quantum-upgrade-price').innerText = quantumLevelCost.toLocaleString()

        tangleAmount = parseInt(localStorage.getItem("tangle-plorts"));
        tanglePrice = parseInt(localStorage.getItem("tangle-price"));
        document.getElementById('current-tangle-price').innerText = tanglePrice.toLocaleString()
        numOfTangleSlimes = parseInt(localStorage.getItem("tangle-slimes"));
        document.getElementById('tangle-slime-amount').innerText = numOfTangleSlimes.toLocaleString()
        costOfTangleSlimes = parseInt(localStorage.getItem("tangle-slime-price"));
        document.getElementById('tangle-slime-price').innerText = costOfTangleSlimes.toLocaleString()
        tangleLevel = parseInt(localStorage.getItem("tangle-level"));
        autoTangleMultiplier = 0.2 * tangleLevel
        calcTPS()
        if (tangleLevel === 5) {
            document.getElementById('level-up-tangle').style.display = 'none'
            document.getElementById('buy-tangle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        tangleLevelCost = parseInt(localStorage.getItem("tangle-level-price"));
        document.getElementById('tangle-upgrade-price').innerText = tangleLevelCost.toLocaleString()

        mosaicAmount = parseInt(localStorage.getItem("mosaic-plorts"));
        mosaicPrice = parseInt(localStorage.getItem("mosaic-price"));
        document.getElementById('current-mosaic-price').innerText = mosaicPrice.toLocaleString()
        numOfMosaicSlimes = parseInt(localStorage.getItem("mosaic-slimes"));
        document.getElementById('mosaic-slime-amount').innerText = numOfMosaicSlimes.toLocaleString()
        costOfMosaicSlimes = parseInt(localStorage.getItem("mosaic-slime-price"));
        document.getElementById('mosaic-slime-price').innerText = costOfMosaicSlimes.toLocaleString()
        mosaicLevel = parseInt(localStorage.getItem("mosaic-level"));
        autoMosaicMultiplier = 0.2 * mosaicLevel
        calcMPS()
        if (mosaicLevel === 5) {
            document.getElementById('level-up-mosaic').style.display = 'none'
            document.getElementById('buy-mosaic-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        mosaicLevelCost = parseInt(localStorage.getItem("mosaic-level-price"));
        document.getElementById('mosaic-upgrade-price').innerText = mosaicLevelCost.toLocaleString()

        goldAmount = parseInt(localStorage.getItem("gold-plorts"));
        goldPrice = parseInt(localStorage.getItem("gold-price"));
        document.getElementById('current-gold-price').innerText = goldPrice.toLocaleString()
        numOfGoldSlimes = parseInt(localStorage.getItem("gold-slimes"));
        document.getElementById('gold-slime-amount').innerText = numOfGoldSlimes.toLocaleString()
        costOfGoldSlimes = parseInt(localStorage.getItem("gold-slime-price"));
        document.getElementById('gold-slime-price').innerText = costOfGoldSlimes.toLocaleString()
        goldLevel = parseInt(localStorage.getItem("gold-level"));
        autoGoldMultiplier = 0.2 * goldLevel
        calcGPS()
        if (goldLevel === 5) {
            document.getElementById('level-up-gold').style.display = 'none'
            document.getElementById('buy-gold-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        goldLevelCost = parseInt(localStorage.getItem("gold-level-price"));
        document.getElementById('gold-upgrade-price').innerText = goldLevelCost.toLocaleString()
        pinkTotal()
        rockTotal()
        phosphorTotal()
        tabbyTotal()
        puddleTotal()
        fireTotal()
        honeyTotal()
        boomTotal()
        hunterTotal()
        radTotal()
        crystalTotal()
        saberTotal()
        dervishTotal()
        quantumTotal()
        tangleTotal()
        mosaicTotal()
        goldTotal()
        checkRank()
    } else {
        currentMoney = 0
    }
}

loadSave()

function resetSave() {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to reset your progress? This action cannot be reversed.");
    // Check the user's choice
    if (confirmation) {
        //remove all saved data
        localStorage.removeItem("money");
        localStorage.removeItem("click-rank");
        localStorage.removeItem("click-level");

        let typeArray = ["pink", "rock", "phosphor", "tabby", "puddle", "fire", "honey", "boom", "hunter", "rad", "crystal", "saber", "dervish", "quantum", "tangle", "mosaic", "gold"];
        for (let i = 0; i < typeArray.length; i++) {
            localStorage.removeItem(`${typeArray[i]}-plorts`);
            localStorage.removeItem(`${typeArray[i]}-price`);
            localStorage.removeItem(`${typeArray[i]}-slimes`);
            localStorage.removeItem(`${typeArray[i]}-slime-price`);
            localStorage.removeItem(`${typeArray[i]}-level`);
            localStorage.removeItem(`${typeArray[i]}-level-price`);
        }
    }
}