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
        if (slimes['rock'].numOfSlimes < 50) {
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
        if (slimes['phosphor'].numOfSlimes < 50) {
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
        if (slimes['tabby'].numOfSlimes < 50) {
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
        if (slimes['puddle'].numOfSlimes < 50) {
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
        if (slimes['fire'].numOfSlimes < 50) {
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
        if (slimes['honey'].numOfSlimes < 50) {
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
        if (slimes['boom'].numOfSlimes < 50) {
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
        if (slimes['hunter'].numOfSlimes < 50) {
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
        if (slimes['rad'].numOfSlimes < 50) {
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
        if (slimes['crystal'].numOfSlimes < 50) {
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
        if (slimes['saber'].numOfSlimes < 50) {
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
        if (slimes['dervish'].numOfSlimes < 50) {
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
        if (slimes['quantum'].numOfSlimes < 50) {
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
        if (slimes['tangle'].numOfSlimes < 50) {
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
        if (slimes['mosaic'].numOfSlimes < 50) {
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
            if (slimes['pink'].numOfSlimes === 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 2:
            clickerPink.style.display = 'none';
            clickerRock.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Rock';
            clickRankCost = clickRankCost * 4
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['rock'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 3:
            clickerPink.style.display = 'none';
            clickerPhosphor.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Phosphor';
            clickRankCost = clickRankCost * 4 ** 2
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['phosphor'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 4:
            clickerPink.style.display = 'none';
            clickerTabby.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Tabby';
            clickRankCost = clickRankCost * 4 ** 3
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['tabby'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 5:
            clickerPink.style.display = 'none';
            clickerPuddle.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Puddle';
            clickRankCost = clickRankCost * 4 ** 4
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['puddle'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 6:
            clickerPink.style.display = 'none';
            clickerFire.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Fire';
            clickRankCost = clickRankCost * 4 ** 5
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['fire'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 7:
            clickerPink.style.display = 'none';
            clickerHoney.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Honey';
            clickRankCost = clickRankCost * 4 ** 6
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['honey'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 8:
            clickerPink.style.display = 'none';
            clickerBoom.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Boom';
            clickRankCost = clickRankCost * 4 ** 7
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['boom'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 9:
            clickerPink.style.display = 'none';
            clickerHunter.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Hunter';
            clickRankCost = clickRankCost * 4 ** 8
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['hunter'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 10:
            clickerPink.style.display = 'none';
            clickerRad.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Rad';
            clickRankCost = clickRankCost * 4 ** 9
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['rad'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 11:
            clickerPink.style.display = 'none';
            clickerCrystal.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Crystal';
            clickRankCost = clickRankCost * 4 ** 10
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['crystal'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 12:
            clickerPink.style.display = 'none';
            clickerSaber.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Saber';
            clickRankCost = clickRankCost * 4 ** 11
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['saber'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 13:
            clickerPink.style.display = 'none';
            clickerDervish.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Dervish';
            clickRankCost = clickRankCost * 4 ** 12
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['dervish'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 14:
            clickerPink.style.display = 'none';
            clickerQuantum.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Quantum';
            clickRankCost = clickRankCost * 4 ** 13
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['quantum'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 15:
            clickerPink.style.display = 'none';
            clickerTangle.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Tangle';
            clickRankCost = clickRankCost * 4 ** 14
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['tangle'].numOfSlimes >= 50) {
                clickRankBtn.style.display = 'inline'
            }
            break;
        case 16:
            clickerPink.style.display = 'none';
            clickerMosaic.style.display = 'inline';
            document.getElementById('click-rank').innerText = 'Mosaic';
            clickRankCost = clickRankCost * 4 ** 15
            document.getElementById('click-rank-cost').innerText = clickRankCost.toLocaleString()
            if (slimes['mosaic'].numOfSlimes >= 50) {
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
        stocks('pink')
        stocks('rock')
        stocks('phosphor')
        stocks('tabby')
        stocks('puddle')
        stocks('fire')
        stocks('honey')
        stocks('boom')
        stocks('hunter')
        stocks('rad')
        stocks('crystal')
        stocks('saber')
        stocks('dervish')
        stocks('quantum')
        stocks('tangle')
        stocks('mosaic')
        stocks('gold')
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

const slimes = {
    pink: {
        type: 'pink',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 250,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 1000,
        price: 7,
        minPrice: 4,
        maxPrice: 25,
        soldTotal: 0,
        isFirstTime: true,
    },
    rock: {
        type: 'rock',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 1000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 4000,
        price: 25,
        minPrice: 15,
        maxPrice: 75,
        soldTotal: 0,
        isFirstTime: true,
    },
    phosphor: {
        type: 'phosphor',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 4000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 16000,
        price: 75,
        minPrice: 50,
        maxPrice: 260,
        soldTotal: 0,
        isFirstTime: true,
    },
    tabby: {
        type: 'tabby',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 16000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 64000,
        price: 225,
        minPrice: 150,
        maxPrice: 730,
        soldTotal: 0,
        isFirstTime: true,
    },
    puddle: {
        type: 'puddle',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 64000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 256000,
        price: 720,
        minPrice: 480,
        maxPrice: 1500,
        soldTotal: 0,
        isFirstTime: true,
    },
    fire: {
        type: 'fire',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 256000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 1024000,
        price: 1125,
        minPrice: 750,
        maxPrice: 3000,
        soldTotal: 0,
        isFirstTime: true,
    },
    honey: {
        type: 'honey',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 1024000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 4096000,
        price: 1875,
        minPrice: 1250,
        maxPrice: 6000,
        soldTotal: 0,
        isFirstTime: true,
    },
    boom: {
        type: 'boom',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 4096000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 16384000,
        price: 2625,
        minPrice: 1750,
        maxPrice: 12500,
        soldTotal: 0,
        isFirstTime: true,
    },
    hunter: {
        type: 'hunter',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 16384000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 65536000,
        price: 9000,
        minPrice: 6000,
        maxPrice: 25000,
        soldTotal: 0,
        isFirstTime: true,
    },
    rad: {
        type: 'rad',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 65536000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 262144000,
        price: 12750,
        minPrice: 8500,
        maxPrice: 40000,
        soldTotal: 0,
        isFirstTime: true,
    },
    crystal: {
        type: 'crystal',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 262144000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 1048576000,
        price: 15000,
        minPrice: 10000,
        maxPrice: 50000,
        soldTotal: 0,
        isFirstTime: true,
    },
    saber: {
        type: 'saber',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 1048576000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 4194304000,
        price: 18750,
        minPrice: 12500,
        maxPrice: 62500,
        soldTotal: 0,
        isFirstTime: true,
    },
    dervish: {
        type: 'dervish',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 4194304000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 16777216000,
        price: 22500,
        minPrice: 15000,
        maxPrice: 75000,
        soldTotal: 0,
        isFirstTime: true,
    },
    quantum: {
        type: 'quantum',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 16777216000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 67108864000,
        price: 30000,
        minPrice: 20000,
        maxPrice: 100000,
        soldTotal: 0,
        isFirstTime: true,
    },
    tangle: {
        type: 'tangle',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 67108864000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 268435456000,
        price: 60000,
        minPrice: 40000,
        maxPrice: 150000,
        soldTotal: 0,
        isFirstTime: true,
    },
    mosaic: {
        type: 'mosaic',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 268435456000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 1073741824000,
        price: 97500,
        minPrice: 65000,
        maxPrice: 300000,
        soldTotal: 0,
        isFirstTime: true,
    },
    gold: {
        type: 'gold',
        amount: 0,
        totalAmount: 0,
        numOfSlimes: 0,
        costOfSlimes: 1073741824000,
        level: 1,
        autoMultiplier: 0.2,
        levelCost: 4294967296000,
        price: 150000,
        minPrice: 100000,
        maxPrice: 1000000,
        soldTotal: 0,
        isFirstTime: true,
    }
}

function clickSlime(type) {
    slimes[type].amount += clickLevel;
    updateTotal(type);
}

updateSlimeInfo('pink')
updateSlimeInfo('rock')
updateSlimeInfo('phosphor')
updateSlimeInfo('tabby')
updateSlimeInfo('puddle')
updateSlimeInfo('fire')
updateSlimeInfo('honey')
updateSlimeInfo('boom')
updateSlimeInfo('hunter')
updateSlimeInfo('rad')
updateSlimeInfo('crystal')
updateSlimeInfo('saber')
updateSlimeInfo('dervish')
updateSlimeInfo('quantum')
updateSlimeInfo('tangle')
updateSlimeInfo('mosaic')
updateSlimeInfo('gold')

function buySlimes(type) {
    let slime = slimes[type];
    if (currentMoney >= slime.costOfSlimes) {
        currentMoney -= slime.costOfSlimes;
        document.getElementById('current-money').innerText = currentMoney.toLocaleString()
        slime.numOfSlimes += 1;
        playPurchaseSound();
        calcPPS(type);
    }

    if (slime.numOfSlimes >= 250) {
        slime.costOfSlimes = Math.floor(slime.costOfSlimes * 1.1);
    } else if (slime.numOfSlimes === 100) {
        slime.costOfSlimes *= 2;
    } else if (slime.numOfSlimes === 50) {
        slime.costOfSlimes *= 2;
    } else if (slime.numOfSlimes === 10) {
        slime.costOfSlimes *= 2;
    }

    updateSlimeInfo(type);
}

function updateSlimeInfo(type) {
    let slime = slimes[type];
    document.getElementById(`${type}-slime-price`).innerText = slime.costOfSlimes.toLocaleString()
    document.getElementById(`${type}-slime-amount`).innerText = slime.numOfSlimes.toLocaleString()
    document.getElementById(`${type}-upgrade-price`).innerText = slime.levelCost.toLocaleString()
    calcSellPrice = slime.totalAmount * slime.price
    document.getElementById(`${type}-sell-total`).innerText = calcSellPrice.toLocaleString()
}

function levelUp(type) {
    let slime = slimes[type];
    if (currentMoney >= slime.levelCost) {
        slime.level += 1;
        slime.autoMultiplier = 0.2 * slime.level;
        currentMoney -= slime.levelCost;
        document.getElementById('current-money').innerText = currentMoney.toLocaleString()
        slime.levelCost *= 5;
        playPurchaseUpgradeSound();
        calcPPS(type);
    }
    if (slime.level === 5) {
        document.getElementById(`level-up-${type}`).style.display = 'none'
        document.getElementById(`buy-${type}-slimes`).classList = 'w-100 btn btn-light p-0 h-100'
        document.getElementById(`${type}-purchase-section`).classList = 'p-1 col-4'
    }
    updateSlimeInfo(type)
}

function calcPPS(type) {
    let slime = slimes[type];
    let perSec = slime.numOfSlimes * slime.autoMultiplier;
    document.getElementById(`${type}-per-second`).innerText = perSec.toFixed(1);
}
calcPPS('pink')
calcPPS('rock')
calcPPS('phosphor')
calcPPS('tabby')
calcPPS('puddle')
calcPPS('fire')
calcPPS('honey')
calcPPS('boom')
calcPPS('hunter')
calcPPS('rad')
calcPPS('crystal')
calcPPS('saber')
calcPPS('dervish')
calcPPS('quantum')
calcPPS('tangle')
calcPPS('mosaic')
calcPPS('gold')

function autoSlime(type) {
    let slime = slimes[type];
    slime.amount += slime.numOfSlimes * slime.autoMultiplier;
    updateTotal(type);
}

setInterval(() => autoSlime('pink'), 1000);
setInterval(() => autoSlime('rock'), 1000);
setInterval(() => autoSlime('phosphor'), 1000);
setInterval(() => autoSlime('rock'), 1000);
setInterval(() => autoSlime('tabby'), 1000);
setInterval(() => autoSlime('puddle'), 1000);
setInterval(() => autoSlime('fire'), 1000);
setInterval(() => autoSlime('honey'), 1000);
setInterval(() => autoSlime('boom'), 1000);
setInterval(() => autoSlime('hunter'), 1000);
setInterval(() => autoSlime('rad'), 1000);
setInterval(() => autoSlime('crystal'), 1000);
setInterval(() => autoSlime('saber'), 1000);
setInterval(() => autoSlime('dervish'), 1000);
setInterval(() => autoSlime('quantum'), 1000);
setInterval(() => autoSlime('tangle'), 1000);
setInterval(() => autoSlime('mosaic'), 1000);
setInterval(() => autoSlime('gold'), 1000);

function updateTotal(type) {
    let slime = slimes[type];
    slime.totalAmount = slime.amount + (slime.numOfSlimes * slime.autoMultiplier);
    slime.totalAmount = Math.floor(slime.totalAmount);
    document.getElementById(`${type}-plorts`).innerText = slime.totalAmount.toLocaleString();
    let calcSellPrice = slime.totalAmount * slime.price;
    document.getElementById(`${type}-sell-total`).innerText = calcSellPrice.toLocaleString();
    updateSlimeInfo(type)
}

function sellSlimes(type) {
    let slime = slimes[type];
    slime.soldTotal += slime.totalAmount
    currentMoney += slime.totalAmount * slime.price;
    document.getElementById('current-money').innerText = currentMoney.toLocaleString()
    slime.amount = 0;
    updateTotal(type);
}

function stocks(type) {
    var stocksUp = document.getElementById(`stocks-up-${type}`)
    var stocksDown = document.getElementById(`stocks-down-${type}`)
    var slime = slimes[type]
    if (slime.isFirstTime) {
        slime.isFirstTime = false
    } else if (slime.soldTotal >= 2500) {
        slime.price = slime.minPrice
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'inline'
    } else if (slime.soldTotal >= 400) {
        slime.price = Math.max(slime.minPrice, slime.price / 2)
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'inline'
    } else if (slime.soldTotal >= 300) {
        slime.price = Math.max(slime.minPrice, slime.price / 1.75)
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'inline'
    } else if (slime.soldTotal >= 200) {
        slime.price = Math.max(slime.minPrice, slime.price / 1.5)
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'inline'
    } else if (slime.soldTotal >= 100) {
        slime.price = Math.max(slime.minPrice, slime.price / 1.25)
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'inline'
    } else if (slime.soldTotal > 50) {
        stocksUp.style.display = 'none'
        stocksDown.style.display = 'none'
    } else if (slime.soldTotal <= 50 && slime.soldTotal !== 0) {
        slime.price = Math.min(slime.maxPrice, slime.price * 1.5)
        stocksUp.style.display = 'inline'
        stocksDown.style.display = 'none'
    } else if (slime.soldTotal === 0) {
        slime.price = Math.min(slime.maxPrice, slime.price * 2)
        stocksUp.style.display = 'inline'
        stocksDown.style.display = 'none'
    }
    slime.soldTotal = 0
    slime.price = Math.floor(slime.price)
    calcSellPrice = slime.totalAmount * slime.price
    document.getElementById(`${type}-sell-total`).innerText = calcSellPrice.toLocaleString()
    document.getElementById(`current-${type}-price`).innerText = slime.price.toLocaleString()
}

stocks('pink')
stocks('rock')
stocks('phosphor')
stocks('tabby')
stocks('puddle')
stocks('fire')
stocks('honey')
stocks('boom')
stocks('hunter')
stocks('rad')
stocks('crystal')
stocks('saber')
stocks('dervish')
stocks('quantum')
stocks('tangle')
stocks('mosaic')
stocks('gold')

var calcPinkSellPrice = slimes['pink'].totalAmount * slimes['pink'].price
document.getElementById('pink-sell-total').innerText = calcPinkSellPrice.toLocaleString()
var calcRockSellPrice = slimes['rock'].totalAmount * slimes['rock'].price
document.getElementById('rock-sell-total').innerText = calcRockSellPrice.toLocaleString()
var calcPhosphorSellPrice = slimes['phosphor'].totalAmount * slimes['phosphor'].price
document.getElementById('phosphor-sell-total').innerText = calcPhosphorSellPrice.toLocaleString()
var calcTabbySellPrice = slimes['tabby'].totalAmount * slimes['tabby'].price
document.getElementById('tabby-sell-total').innerText = calcTabbySellPrice.toLocaleString()
var calcPuddleSellPrice = slimes['puddle'].totalAmount * slimes['puddle'].price
document.getElementById('puddle-sell-total').innerText = calcPuddleSellPrice.toLocaleString()
var calcFireSellPrice = slimes['fire'].totalAmount * slimes['fire'].price
document.getElementById('fire-sell-total').innerText = calcFireSellPrice.toLocaleString()
var calcHoneySellPrice = slimes['honey'].totalAmount * slimes['honey'].price
document.getElementById('honey-sell-total').innerText = calcHoneySellPrice.toLocaleString()
var calcBoomSellPrice = slimes['boom'].totalAmount * slimes['boom'].price
document.getElementById('boom-sell-total').innerText = calcBoomSellPrice.toLocaleString()
var calcHunterSellPrice = slimes['hunter'].totalAmount * slimes['hunter'].price
document.getElementById('hunter-sell-total').innerText = calcHunterSellPrice.toLocaleString()
var calcRadSellPrice = slimes['rad'].totalAmount * slimes['rad'].price
document.getElementById('rad-sell-total').innerText = calcRadSellPrice.toLocaleString()
var calcCrystalSellPrice = slimes['crystal'].totalAmount * slimes['crystal'].price
document.getElementById('crystal-sell-total').innerText = calcCrystalSellPrice.toLocaleString()
var calcSaberSellPrice = slimes['saber'].totalAmount * slimes['saber'].price
document.getElementById('saber-sell-total').innerText = calcSaberSellPrice.toLocaleString()
var calcDervishSellPrice = slimes['dervish'].totalAmount * slimes['dervish'].price
document.getElementById('dervish-sell-total').innerText = calcDervishSellPrice.toLocaleString()
var calcQuantumSellPrice = slimes['quantum'].totalAmount * slimes['quantum'].price
document.getElementById('quantum-sell-total').innerText = calcQuantumSellPrice.toLocaleString()
var calcTangleSellPrice = slimes['tangle'].totalAmount * slimes['tangle'].price
document.getElementById('tangle-sell-total').innerText = calcTangleSellPrice.toLocaleString()
var calcMosaicSellPrice = slimes['mosaic'].totalAmount * slimes['mosaic'].price
document.getElementById('mosaic-sell-total').innerText = calcMosaicSellPrice.toLocaleString()
var calcGoldSellPrice = slimes['gold'].totalAmount * slimes['gold'].price
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
        let priceArray = [slimes['pink'].price, slimes['rock'].price, slimes['phosphor'].price, slimes['tabby'].price, slimes['puddle'].price, slimes['fire'].price, slimes['honey'].price, slimes['boom'].price, slimes['hunter'].price, slimes['rad'].price, slimes['crystal'].price, slimes['saber'].price, slimes['dervish'].price, slimes['quantum'].price, slimes['tangle'].price, slimes['mosaic'].price, slimes['gold'].price]
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

// save the game when appropriate button is clicked
function saveGame() {
    localStorage.setItem("money", currentMoney); // saves current money

    localStorage.setItem("click-rank", clickRank); // saves current click rank, need to make variable for this to save
    localStorage.setItem("click-level", clickLevel); // saves current click level
    localStorage.setItem("click-level-cost", clickLevelCost);

    let typeArray = ["pink", "rock", "phosphor", "tabby", "puddle", "fire", "honey", "boom", "hunter", "rad", "crystal", "saber", "dervish", "quantum", "tangle", "mosaic", "gold"];
    let amountsTotal = [slimes['pink'].totalAmount, slimes['rock'].totalAmount, slimes['phosphor'].totalAmount, slimes['tabby'].totalAmount, slimes['puddle'].totalAmount, slimes['fire'].totalAmount, slimes['honey'].totalAmount, slimes['boom'].totalAmount, slimes['hunter'].totalAmount, slimes['rad'].totalAmount, slimes['crystal'].totalAmount, slimes['saber'].totalAmount, slimes['dervish'].totalAmount, slimes['quantum'].totalAmount, slimes['tangle'].totalAmount, slimes['mosaic'].totalAmount, slimes['gold'].totalAmount];
    let prices = [slimes['pink'].price, slimes['rock'].price, slimes['phosphor'].price, slimes['tabby'].price, slimes['puddle'].price, slimes['fire'].price, slimes['honey'].price, slimes['boom'].price, slimes['hunter'].price, slimes['rad'].price, slimes['crystal'].price, slimes['saber'].price, slimes['dervish'].price, slimes['quantum'].price, slimes['tangle'].price, slimes['mosaic'].price, slimes['gold'].price];
    let numOfSlimes = [slimes['pink'].numOfSlimes, slimes['rock'].numOfSlimes, slimes['phosphor'].numOfSlimes, slimes['tabby'].numOfSlimes, slimes['puddle'].numOfSlimes, slimes['fire'].numOfSlimes, slimes['honey'].numOfSlimes, slimes['boom'].numOfSlimes, slimes['hunter'].numOfSlimes, slimes['rad'].numOfSlimes, slimes['crystal'].numOfSlimes, slimes['saber'].numOfSlimes, slimes['dervish'].numOfSlimes, slimes['quantum'].numOfSlimes, slimes['tangle'].numOfSlimes, slimes['mosaic'].numOfSlimes, slimes['gold'].numOfSlimes];
    let slimeCosts = [slimes['pink'].costOfSlimes, slimes['rock'].costOfSlimes, slimes['phosphor'].costOfSlimes, slimes['tabby'].costOfSlimes, slimes['puddle'].costOfSlimes, slimes['fire'].costOfSlimes, slimes['honey'].costOfSlimes, slimes['boom'].costOfSlimes, slimes['hunter'].costOfSlimes, slimes['rad'].costOfSlimes, slimes['crystal'].costOfSlimes, slimes['saber'].costOfSlimes, slimes['dervish'].costOfSlimes, slimes['quantum'].costOfSlimes, slimes['tangle'].costOfSlimes, slimes['mosaic'].costOfSlimes, slimes['gold'].costOfSlimes];
    let levels = [slimes['pink'].level, slimes['rock'].level, slimes['phosphor'].level, slimes['tabby'].level, slimes['puddle'].level, slimes['fire'].level, slimes['honey'].level, slimes['boom'].level, slimes['hunter'].level, slimes['rad'].level, slimes['crystal'].level, slimes['saber'].level, slimes['dervish'].level, slimes['quantum'].level, slimes['tangle'].level, slimes['mosaic'].level, slimes['gold'].level];
    let levelCosts = [slimes['pink'].levelCost, slimes['rock'].levelCost, slimes['phosphor'].levelCost, slimes['tabby'].levelCost, slimes['puddle'].levelCost, slimes['fire'].levelCost, slimes['honey'].levelCost, slimes['boom'].levelCost, slimes['hunter'].levelCost, slimes['rad'].levelCost, slimes['crystal'].levelCost, slimes['saber'].levelCost, slimes['dervish'].levelCost, slimes['quantum'].levelCost, slimes['tangle'].levelCost, slimes['mosaic'].levelCost, slimes['gold'].levelCost];
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
        clickLevelCost = parseInt(localStorage.getItem("click-level-cost"));
        document.getElementById('click-level').innerText = clickLevel
        if (clickLevel === 5) {
            document.getElementById('level-up-click').style.display = 'none'
        }

        Object.values(slimes).forEach(slime => {
            slime.amount = parseInt(localStorage.getItem(`${slime.type}-plorts`));
            slime.price = parseInt(localStorage.getItem(`${slime.type}-price`));
            document.getElementById(`current-${slime.type}-price`).innerText = slime.price.toLocaleString();
            slime.numOfSlimes = parseInt(localStorage.getItem(`${slime.type}-slimes`));
            document.getElementById(`${slime.type}-slime-amount`).innerText = slime.numOfSlimes.toLocaleString();
            slime.costOfSlimes = parseInt(localStorage.getItem(`${slime.type}-slime-price`));
            document.getElementById(`${slime.type}-slime-price`).innerText = slime.costOfSlimes.toLocaleString();
            slime.level = parseInt(localStorage.getItem(`${slime.type}-level`));
            slime.autoMultiplier = 0.2 * slime.level;
            if (slime.level === 5) {
                document.getElementById(`level-up-${slime.type}`).style.display = 'none';
                document.getElementById(`buy-${slime.type}-slimes`).classList = 'w-100 btn btn-light p-0 h-100';
                document.getElementById(`${slime.type}-purchase-section`).classList = 'p-1 col-4';
            }
            slime.levelCost = parseInt(localStorage.getItem(`${slime.type}-level-price`));
            document.getElementById(`${slime.type}-upgrade-price`).innerText = slime.levelCost.toLocaleString();
            calcPPS(`${slime.type}`);
            updateTotal(`${slime.type}`);
        });        
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