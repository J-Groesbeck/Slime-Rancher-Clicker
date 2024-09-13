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
};

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

        slimes['pink'].amount = parseInt(localStorage.getItem("pink-plorts"));
        slimes['pink'].price = parseInt(localStorage.getItem("pink-price"));
        document.getElementById('current-pink-price').innerText = slimes['pink'].price.toLocaleString()
        slimes['pink'].numOfSlimes = parseInt(localStorage.getItem("pink-slimes"));
        document.getElementById('pink-slime-amount').innerText = slimes['pink'].numOfSlimes.toLocaleString()
        slimes['pink'].costOfSlimes = parseInt(localStorage.getItem("pink-slime-price"));
        document.getElementById('pink-slime-price').innerText = slimes['pink'].costOfSlimes.toLocaleString()
        slimes['pink'].level = parseInt(localStorage.getItem("pink-level"));
        slimes['pink'].autoMultiplier = 0.2 * slimes['pink'].level
        if (slimes['pink'].level === 5) {
            document.getElementById('level-up-pink').style.display = 'none'
            document.getElementById('buy-pink-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('pink-purchase-section').classList = 'p-1 col-4'
        }
        slimes['pink'].levelCost = parseInt(localStorage.getItem("pink-level-price"));
        document.getElementById('pink-upgrade-price').innerText = slimes['pink'].levelCost.toLocaleString()

        slimes['rock'].amount = parseInt(localStorage.getItem("rock-plorts"));
        slimes['rock'].price = parseInt(localStorage.getItem("rock-price"));
        document.getElementById('current-rock-price').innerText = slimes['rock'].price.toLocaleString()
        slimes['rock'].numOfSlimes = parseInt(localStorage.getItem("rock-slimes"));
        document.getElementById('rock-slime-amount').innerText = slimes['rock'].numOfSlimes.toLocaleString()
        slimes['rock'].costOfSlimes = parseInt(localStorage.getItem("rock-slime-price"));
        document.getElementById('rock-slime-price').innerText = slimes['rock'].costOfSlimes.toLocaleString()
        slimes['rock'].level = parseInt(localStorage.getItem("rock-level"));
        slimes['rock'].autoMultiplier = 0.2 * slimes['rock'].level
        if (slimes['rock'].level === 5) {
            document.getElementById('level-up-rock').style.display = 'none'
            document.getElementById('buy-rock-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['rock'].levelCost = parseInt(localStorage.getItem("rock-level-price"));
        document.getElementById('rock-upgrade-price').innerText = slimes['rock'].levelCost.toLocaleString()

        slimes['phosphor'].amount = parseInt(localStorage.getItem("phosphor-plorts"));
        slimes['phosphor'].price = parseInt(localStorage.getItem("phosphor-price"));
        document.getElementById('current-phosphor-price').innerText = slimes['phosphor'].price.toLocaleString()
        slimes['phosphor'].numOfSlimes = parseInt(localStorage.getItem("phosphor-slimes"));
        document.getElementById('phosphor-slime-amount').innerText = slimes['phosphor'].numOfSlimes.toLocaleString()
        slimes['phosphor'].costOfSlimes = parseInt(localStorage.getItem("phosphor-slime-price"));
        document.getElementById('phosphor-slime-price').innerText = slimes['phosphor'].costOfSlimes.toLocaleString()
        slimes['phosphor'].autoMultiplier = 0.2 * slimes['phosphor'].level
        if (slimes['phosphor'].level === 5) {
            document.getElementById('level-up-phosphor').style.display = 'none'
            document.getElementById('buy-phosphor-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('phosphor-purchase-section').classList = 'p-1 col-4'
        }
        slimes['phosphor'].levelCost = parseInt(localStorage.getItem("phosphor-level-price"));
        document.getElementById('phosphor-upgrade-price').innerText = slimes['phosphor'].levelCost.toLocaleString()

        slimes['tabby'].amount = parseInt(localStorage.getItem("tabby-plorts"));
        slimes['tabby'].price = parseInt(localStorage.getItem("tabby-price"));
        document.getElementById('current-tabby-price').innerText = slimes['tabby'].price.toLocaleString()
        slimes['tabby'].numOfSlimes = parseInt(localStorage.getItem("tabby-slimes"));
        document.getElementById('tabby-slime-amount').innerText = slimes['tabby'].numOfSlimes.toLocaleString()
        slimes['tabby'].costOfSlimes = parseInt(localStorage.getItem("tabby-slime-price"));
        document.getElementById('tabby-slime-price').innerText = slimes['tabby'].costOfSlimes.toLocaleString()
        slimes['tabby'].autoMultiplier = 0.2 * slimes['tabby'].level
        if (slimes['tabby'].level === 5) {
            document.getElementById('level-up-tabby').style.display = 'none'
            document.getElementById('buy-tabby-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('tabby-purchase-section').classList = 'p-1 col-4'
        }
        slimes['tabby'].levelCost = parseInt(localStorage.getItem("tabby-level-price"));
        document.getElementById('tabby-upgrade-price').innerText = slimes['tabby'].levelCost.toLocaleString()

        slimes['puddle'].amount = parseInt(localStorage.getItem("puddle-plorts"));
        slimes['puddle'].price = parseInt(localStorage.getItem("puddle-price"));
        document.getElementById('current-puddle-price').innerText = slimes['puddle'].price.toLocaleString()
        slimes['puddle'].numOfSlimes = parseInt(localStorage.getItem("puddle-slimes"));
        document.getElementById('puddle-slime-amount').innerText = slimes['puddle'].numOfSlimes.toLocaleString()
        slimes['puddle'].costOfSlimes = parseInt(localStorage.getItem("puddle-slime-price"));
        document.getElementById('puddle-slime-price').innerText = slimes['puddle'].costOfSlimes.toLocaleString()
        slimes['puddle'].level = parseInt(localStorage.getItem("puddle-level"));
        slimes['puddle'].autoMultiplier = 0.2 * slimes['puddle'].level
        if (slimes['puddle'].level === 5) {
            document.getElementById('level-up-puddle').style.display = 'none'
            document.getElementById('buy-puddle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('puddle-purchase-section').classList = 'p-1 col-4'
        }
        slimes['puddle'].levelCost = parseInt(localStorage.getItem("puddle-level-price"));
        document.getElementById('puddle-upgrade-price').innerText = slimes['puddle'].levelCost.toLocaleString()

        slimes['fire'].amount = parseInt(localStorage.getItem("fire-plorts"));
        slimes['fire'].price = parseInt(localStorage.getItem("fire-price"));
        document.getElementById('current-fire-price').innerText = slimes['fire'].price.toLocaleString()
        slimes['fire'].numOfSlimes = parseInt(localStorage.getItem("fire-slimes"));
        document.getElementById('fire-slime-amount').innerText = slimes['fire'].numOfSlimes.toLocaleString()
        slimes['fire'].costOfSlimes = parseInt(localStorage.getItem("fire-slime-price"));
        document.getElementById('fire-slime-price').innerText = slimes['fire'].costOfSlimes.toLocaleString()
        slimes['fire'].level = parseInt(localStorage.getItem("fire-level"));
        slimes['fire'].autoMultiplier = 0.2 * slimes['fire'].level
        if (slimes['fire'].level === 5) {
            document.getElementById('level-up-fire').style.display = 'none'
            document.getElementById('buy-fire-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('fire-purchase-section').classList = 'p-1 col-4'
        }
        slimes['fire'].levelCost = parseInt(localStorage.getItem("fire-level-price"));
        document.getElementById('fire-upgrade-price').innerText = slimes['fire'].levelCost.toLocaleString()

        slimes['honey'].amount = parseInt(localStorage.getItem("honey-plorts"));
        slimes['honey'].price = parseInt(localStorage.getItem("honey-price"));
        document.getElementById('current-honey-price').innerText = slimes['honey'].price.toLocaleString()
        slimes['honey'].numOfSlimes = parseInt(localStorage.getItem("honey-slimes"));
        document.getElementById('honey-slime-amount').innerText = slimes['honey'].numOfSlimes.toLocaleString()
        slimes['honey'].costOfSlimes = parseInt(localStorage.getItem("honey-slime-price"));
        document.getElementById('honey-slime-price').innerText = slimes['honey'].costOfSlimes.toLocaleString()
        slimes['honey'].level = parseInt(localStorage.getItem("honey-level"));
        slimes['honey'].autoMultiplier = 0.2 * slimes['honey'].level
        if (slimes['honey'].level === 5) {
            document.getElementById('level-up-honey').style.display = 'none'
            document.getElementById('buy-honey-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('honey-purchase-section').classList = 'p-1 col-4'
        }
        slimes['honey'].levelCost = parseInt(localStorage.getItem("honey-level-price"));
        document.getElementById('honey-upgrade-price').innerText = slimes['honey'].levelCost.toLocaleString()

        slimes['boom'].amount = parseInt(localStorage.getItem("boom-plorts"));
        slimes['boom'].price = parseInt(localStorage.getItem("boom-price"));
        document.getElementById('current-boom-price').innerText = slimes['boom'].price.toLocaleString()
        slimes['boom'].numOfSlimes = parseInt(localStorage.getItem("boom-slimes"));
        document.getElementById('boom-slime-amount').innerText = slimes['boom'].numOfSlimes.toLocaleString()
        slimes['boom'].costOfSlimes = parseInt(localStorage.getItem("boom-slime-price"));
        document.getElementById('boom-slime-price').innerText = slimes['boom'].costOfSlimes.toLocaleString()
        slimes['boom'].level = parseInt(localStorage.getItem("boom-level"));
        slimes['boom'].autoMultiplier = 0.2 * slimes['boom'].level
        if (slimes['boom'].level === 5) {
            document.getElementById('level-up-boom').style.display = 'none'
            document.getElementById('buy-boom-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('boom-purchase-section').classList = 'p-1 col-4'
        }
        slimes['boom'].levelCost = parseInt(localStorage.getItem("boom-level-price"));
        document.getElementById('boom-upgrade-price').innerText = slimes['boom'].levelCost.toLocaleString()

        slimes['hunter'].amount = parseInt(localStorage.getItem("hunter-plorts"));
        slimes['hunter'].price = parseInt(localStorage.getItem("hunter-price"));
        document.getElementById('current-hunter-price').innerText = slimes['hunter'].price.toLocaleString()
        slimes['hunter'].numOfSlimes = parseInt(localStorage.getItem("hunter-slimes"));
        document.getElementById('hunter-slime-amount').innerText = slimes['hunter'].numOfSlimes.toLocaleString()
        slimes['hunter'].costOfSlimes = parseInt(localStorage.getItem("hunter-slime-price"));
        document.getElementById('hunter-slime-price').innerText = slimes['hunter'].costOfSlimes.toLocaleString()
        slimes['hunter'].level = parseInt(localStorage.getItem("hunter-level"));
        slimes['hunter'].autoMultiplier = 0.2 * slimes['hunter'].level
        if (slimes['hunter'].level === 5) {
            document.getElementById('level-up-hunter').style.display = 'none'
            document.getElementById('buy-hunter-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('hunter-purchase-section').classList = 'p-1 col-4'
        }
        slimes['hunter'].levelCost = parseInt(localStorage.getItem("hunter-level-price"));
        document.getElementById('hunter-upgrade-price').innerText = slimes['hunter'].levelCost.toLocaleString()

        slimes['rad'].amount = parseInt(localStorage.getItem("rad-plorts"));
        slimes['rad'].price = parseInt(localStorage.getItem("rad-price"));
        document.getElementById('current-rad-price').innerText = slimes['rad'].price.toLocaleString()
        slimes['rad'].numOfSlimes = parseInt(localStorage.getItem("rad-slimes"));
        document.getElementById('rad-slime-amount').innerText = slimes['rad'].numOfSlimes.toLocaleString()
        slimes['rad'].costOfSlimes = parseInt(localStorage.getItem("rad-slime-price"));
        document.getElementById('rad-slime-price').innerText = slimes['rad'].costOfSlimes.toLocaleString()
        slimes['rad'].level = parseInt(localStorage.getItem("rad-level"));
        slimes['rad'].autoMultiplier = 0.2 * slimes['hunter'].level
        if (slimes['rad'].level === 5) {
            document.getElementById('level-up-rad').style.display = 'none'
            document.getElementById('buy-rad-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rad-purchase-section').classList = 'p-1 col-4'
        }
        slimes['rad'].levelCost = parseInt(localStorage.getItem("rad-level-price"));
        document.getElementById('rad-upgrade-price').innerText = slimes['rad'].levelCost.toLocaleString()

        slimes['crystal'].amount = parseInt(localStorage.getItem("crystal-plorts"));
        slimes['crystal'].price = parseInt(localStorage.getItem("crystal-price"));
        document.getElementById('current-crystal-price').innerText = slimes['crystal'].price.toLocaleString()
        slimes['crystal'].numOfSlimes = parseInt(localStorage.getItem("crystal-slimes"));
        document.getElementById('crystal-slime-amount').innerText = slimes['crystal'].numOfSlimes.toLocaleString()
        slimes['crystal'].costOfSlimes = parseInt(localStorage.getItem("crystal-slime-price"));
        document.getElementById('crystal-slime-price').innerText = slimes['crystal'].costOfSlimes.toLocaleString()
        slimes['crystal'].level = parseInt(localStorage.getItem("crystal-level"));
        slimes['crystal'].autoMultiplier = 0.2 * slimes['crystal'].level
        if (slimes['crystal'].level === 5) {
            document.getElementById('level-up-crystal').style.display = 'none'
            document.getElementById('buy-crystal-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['crystal'].levelCost = parseInt(localStorage.getItem("crystal-level-price"));
        document.getElementById('crystal-upgrade-price').innerText = slimes['crystal'].levelCost.toLocaleString()

        slimes['saber'].amount = parseInt(localStorage.getItem("saber-plorts"));
        slimes['saber'].price = parseInt(localStorage.getItem("saber-price"));
        document.getElementById('current-saber-price').innerText = slimes['saber'].price.toLocaleString()
        slimes['saber'].numOfSlimes = parseInt(localStorage.getItem("saber-slimes"));
        document.getElementById('saber-slime-amount').innerText = slimes['saber'].numOfSlimes.toLocaleString()
        slimes['saber'].costOfSlimes = parseInt(localStorage.getItem("saber-slime-price"));
        document.getElementById('saber-slime-price').innerText = slimes['saber'].costOfSlimes.toLocaleString()
        slimes['saber'].level = parseInt(localStorage.getItem("saber-level"));
        slimes['saber'].autoMultiplier = 0.2 * slimes['saber'].level
        if (slimes['saber'].level === 5) {
            document.getElementById('level-up-saber').style.display = 'none'
            document.getElementById('buy-saber-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['saber'].levelCost = parseInt(localStorage.getItem("saber-level-price"));
        document.getElementById('saber-upgrade-price').innerText = slimes['saber'].levelCost.toLocaleString()

        slimes['dervish'].amount = parseInt(localStorage.getItem("dervish-plorts"));
        slimes['dervish'].price = parseInt(localStorage.getItem("dervish-price"));
        document.getElementById('current-dervish-price').innerText = slimes['dervish'].price.toLocaleString()
        slimes['dervish'].numOfSlimes = parseInt(localStorage.getItem("dervish-slimes"));
        document.getElementById('dervish-slime-amount').innerText = slimes['dervish'].numOfSlimes.toLocaleString()
        slimes['dervish'].costOfSlimes = parseInt(localStorage.getItem("dervish-slime-price"));
        document.getElementById('dervish-slime-price').innerText = slimes['dervish'].costOfSlimes.toLocaleString()
        slimes['dervish'].level = parseInt(localStorage.getItem("dervish-level"));
        slimes['dervish'].autoMultiplier = 0.2 * slimes['dervish'].level
        if (slimes['dervish'].level === 5) {
            document.getElementById('level-up-dervish').style.display = 'none'
            document.getElementById('buy-dervish-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['dervish'].levelCost = parseInt(localStorage.getItem("dervish-level-price"));
        document.getElementById('dervish-upgrade-price').innerText = slimes['dervish'].levelCost.toLocaleString()

        slimes['quantum'].amount = parseInt(localStorage.getItem("quantum-plorts"));
        slimes['quantum'].price = parseInt(localStorage.getItem("quantum-price"));
        document.getElementById('current-quantum-price').innerText = slimes['quantum'].price.toLocaleString()
        slimes['quantum'].numOfSlimes = parseInt(localStorage.getItem("quantum-slimes"));
        document.getElementById('quantum-slime-amount').innerText = slimes['quantum'].numOfSlimes.toLocaleString()
        slimes['quantum'].costOfSlimes = parseInt(localStorage.getItem("quantum-slime-price"));
        document.getElementById('quantum-slime-price').innerText = slimes['quantum'].costOfSlimes.toLocaleString()
        slimes['quantum'].level = parseInt(localStorage.getItem("quantum-level"));
        slimes['quantum'].autoMultiplier = 0.2 * slimes['quantum'].level
        if (slimes['quantum'].level === 5) {
            document.getElementById('level-up-quantum').style.display = 'none'
            document.getElementById('buy-quantum-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['quantum'].levelCost = parseInt(localStorage.getItem("quantum-level-price"));
        document.getElementById('quantum-upgrade-price').innerText = slimes['quantum'].levelCost.toLocaleString()

        slimes['tangle'].amount = parseInt(localStorage.getItem("tangle-plorts"));
        slimes['tangle'].price = parseInt(localStorage.getItem("tangle-price"));
        document.getElementById('current-tangle-price').innerText = slimes['tangle'].price.toLocaleString()
        slimes['tangle'].numOfSlimes = parseInt(localStorage.getItem("tangle-slimes"));
        document.getElementById('tangle-slime-amount').innerText = slimes['tangle'].numOfSlimes.toLocaleString()
        slimes['tangle'].costOfSlimes = parseInt(localStorage.getItem("tangle-slime-price"));
        document.getElementById('tangle-slime-price').innerText = slimes['tangle'].costOfSlimes.toLocaleString()
        slimes['tangle'].level = parseInt(localStorage.getItem("tangle-level"));
        slimes['tangle'].autoMultiplier = 0.2 * slimes['tangle'].level
        if (slimes['tangle'].level === 5) {
            document.getElementById('level-up-tangle').style.display = 'none'
            document.getElementById('buy-tangle-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['tangle'].levelCost = parseInt(localStorage.getItem("tangle-level-price"));
        document.getElementById('tangle-upgrade-price').innerText = slimes['tangle'].levelCost.toLocaleString()

        slimes['mosaic'].amount = parseInt(localStorage.getItem("mosaic-plorts"));
        slimes['mosaic'].price = parseInt(localStorage.getItem("mosaic-price"));
        document.getElementById('current-mosaic-price').innerText = slimes['mosaic'].price.toLocaleString()
        slimes['mosaic'].numOfSlimes = parseInt(localStorage.getItem("mosaic-slimes"));
        document.getElementById('mosaic-slime-amount').innerText = slimes['mosaic'].numOfSlimes.toLocaleString()
        slimes['mosaic'].costOfSlimes = parseInt(localStorage.getItem("mosaic-slime-price"));
        document.getElementById('mosaic-slime-price').innerText = slimes['mosaic'].costOfSlimes.toLocaleString()
        slimes['mosaic'].level = parseInt(localStorage.getItem("mosaic-level"));
        slimes['mosaic'].autoMultiplier = 0.2 * slimes['mosaic'].level
        if (slimes['mosaic'].level === 5) {
            document.getElementById('level-up-mosaic').style.display = 'none'
            document.getElementById('buy-mosaic-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['mosaic'].levelCost = parseInt(localStorage.getItem("mosaic-level-price"));
        document.getElementById('mosaic-upgrade-price').innerText = slimes['mosaic'].levelCost.toLocaleString()

        slimes['gold'].amount = parseInt(localStorage.getItem("gold-plorts"));
        slimes['gold'].price = parseInt(localStorage.getItem("gold-price"));
        document.getElementById('current-gold-price').innerText = slimes['gold'].price.toLocaleString()
        slimes['gold'].numOfSlimes = parseInt(localStorage.getItem("gold-slimes"));
        document.getElementById('gold-slime-amount').innerText = slimes['gold'].numOfSlimes.toLocaleString()
        slimes['gold'].costOfSlimes = parseInt(localStorage.getItem("gold-slime-price"));
        document.getElementById('gold-slime-price').innerText = slimes['gold'].costOfSlimes.toLocaleString()
        slimes['gold'].level = parseInt(localStorage.getItem("gold-level"));
        slimes['gold'].autoMultiplier = 0.2 * slimes['gold'].level
        if (slimes['gold'].level === 5) {
            document.getElementById('level-up-gold').style.display = 'none'
            document.getElementById('buy-gold-slimes').classList = 'w-100 btn btn-light p-0 h-100'
            document.getElementById('rock-purchase-section').classList = 'p-1 col-4'
        }
        slimes['gold'].levelCost = parseInt(localStorage.getItem("gold-level-price"));
        document.getElementById('gold-upgrade-price').innerText = slimes['gold'].levelCost.toLocaleString()
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
        updateTotal('pink')
        updateTotal('rock')
        updateTotal('phosphor')
        updateTotal('tabby')
        updateTotal('puddle')
        updateTotal('fire')
        updateTotal('honey')
        updateTotal('boom')
        updateTotal('hunter')
        updateTotal('rad')
        updateTotal('crystal')
        updateTotal('saber')
        updateTotal('dervish')
        updateTotal('quantum')
        updateTotal('tangle')
        updateTotal('mosaic')
        updateTotal('gold')
        
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