// bo bai goc
let cardImg = [
    ['<img src="bobai/atbich.png"/>', '<img src="bobai/attep.png"/>', '<img src="bobai/atco.png"/>', '<img src="bobai/atro.png"/>'],
    ['<img src="bobai/2bich.png"/>', '<img src="bobai/2tep.png"/>', '<img src="bobai/2co.png"/>', '<img src="bobai/2ro.png"/>'],
    ['<img src="bobai/3bich.png"/>', '<img src="bobai/3tep.png"/>', '<img src="bobai/3co.png"/>', '<img src="bobai/3ro.png"/>'],
    ['<img src="bobai/4bich.png"/>', '<img src="bobai/4tep.png"/>', '<img src="bobai/4co.png"/>', '<img src="bobai/4ro.png"/>'],
    ['<img src="bobai/5bich.png"/>', '<img src="bobai/5tep.png"/>', '<img src="bobai/5co.png"/>', '<img src="bobai/5ro.png"/>'],
    ['<img src="bobai/6bich.png"/>', '<img src="bobai/6tep.png"/>', '<img src="bobai/6co.png"/>', '<img src="bobai/6ro.png"/>'],
    ['<img src="bobai/7bich.png"/>', '<img src="bobai/7tep.png"/>', '<img src="bobai/7co.png"/>', '<img src="bobai/7ro.png"/>'],
    ['<img src="bobai/8bich.png"/>', '<img src="bobai/8tep.png"/>', '<img src="bobai/8co.png"/>', '<img src="bobai/8ro.png"/>'],
    ['<img src="bobai/9bich.png"/>', '<img src="bobai/9tep.png"/>', '<img src="bobai/9co.png"/>', '<img src="bobai/9ro.png"/>'],
    ['<img src="bobai/10bich.png"/>', '<img src="bobai/10tep.png"/>', '<img src="bobai/10co.png"/>', '<img src="bobai/10ro.png"/>'],
    ['<img src="bobai/jbich.png"/>', '<img src="bobai/jtep.png"/>', '<img src="bobai/jco.png"/>', '<img src="bobai/jro.png"/>'],
    ['<img src="bobai/qbich.png"/>', '<img src="bobai/qtep.png"/>', '<img src="bobai/qco.png"/>', '<img src="bobai/qro.png"/>'],
    ['<img src="bobai/kbich.png"/>', '<img src="bobai/ktep.png"/>', '<img src="bobai/kco.png"/>', '<img src="bobai/kro.png"/>']
];
//tao bo bai hoan chinh
let deck = [];
let index = 1;
for (let i = 0; i < cardImg.length; i++) {
    let point = index;
    for (let j = 0; j < cardImg[i].length; j++) {
        let card = new Card();
        card.img = cardImg[i][j];
        card.point = point;
        deck.push(card);
    }
    index++;
}

//tron bai
function randomCard(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

//la bai cua 4 nguoi choi
let cardPlayer = [];
let cardBrad = [];
let cardDavid = [];
let cardRonaldo = [];

for (let j = 0; j < 3; j++) {
    let index = Math.floor(Math.random() * deck.length);
    cardPlayer.push(deck[index]);
    deck.splice(index, 1);
    index = Math.floor(Math.random() * deck.length);
    cardBrad.push(deck[index]);
    deck.splice(index, 1);
    index = Math.floor(Math.random() * deck.length);
    cardDavid.push(deck[index]);
    deck.splice(index, 1);
    index = Math.floor(Math.random() * deck.length);
    cardRonaldo.push(deck[index]);
    deck.splice(index, 1);
}
//tao doi tuong
let player = new Bot('Hung', 19900, cardPlayer);
let brad = new Bot('BradPitt', 19900, cardBrad);
let david = new Bot('David Beckham', 19900, cardDavid);
let ronaldo = new Bot('Ronaldo', 19900, cardRonaldo);
//tong tien cuoc
let totalBet = document.getElementById('moneyBet');
totalBet = 400;
let arrSum = [];

// start game
function startGame() {
    randomCard(deck);
    //bai player
    document.getElementById('card1').innerHTML = cardPlayer[0].img;
    document.getElementById('card2').innerHTML = cardPlayer[1].img;
    document.getElementById('card3').innerHTML = cardPlayer[2].img;
    //bai Brad
    document.getElementById('card4').innerHTML = cardBrad[0].img;
    document.getElementById('card5').innerHTML = cardBrad[1].img;
    document.getElementById('card6').innerHTML = cardBrad[2].img;
    //bai David
    document.getElementById('card7').innerHTML = cardDavid[0].img;
    document.getElementById('card8').innerHTML = cardDavid[1].img;
    document.getElementById('card9').innerHTML = cardDavid[2].img;
    //bai Ronaldo
    document.getElementById('card10').innerHTML = cardRonaldo[0].img;
    document.getElementById('card11').innerHTML = cardRonaldo[1].img;
    document.getElementById('card12').innerHTML = cardRonaldo[2].img;
    //tien cua 4 nguoi choi
    document.getElementById('moneyPlayer').innerHTML = player.money;
    document.getElementById('moneyBrad').innerHTML = brad.money;
    document.getElementById('moneyDavid').innerHTML = david.money;
    document.getElementById('moneyRonaldo').innerHTML = ronaldo.money;
    document.getElementById('moneyBet').innerHTML = totalBet;
    //mang chua tong diem cua 4 nguoi
    arrSum = [checkPoint(cardPlayer), checkPoint(cardBrad),
        checkPoint(cardDavid), checkPoint(cardRonaldo)];
}

//check win
function checkWin() {
    document.getElementById('moneyBrad').innerHTML = brad.money;
    document.getElementById('moneyDavid').innerHTML = david.money;
    document.getElementById('moneyRonaldo').innerHTML = ronaldo.money;
    document.getElementById('moneyBet').innerHTML = totalBet;
    // let isWinner = checkSum();
    // if (isWinner == arrSum[0]){
    //     document.getElementById('result').innerHTML = "You win"
    //     player.money += totalBet;
    //     document.getElementById('moneyPlayer').innerHTML = player.money;
    //     totalBet = '';
    // }
    // if (isWinner == arrSum[1]){
    //     document.getElementById('result').innerHTML = "Brad win"
    //     brad.money += totalBet;
    //     document.getElementById('moneyBrad').innerHTML = brad.money;
    //     totalBet = '';
    // }
    // if (isWinner == arrSum[2]){
    //     document.getElementById('result').innerHTML = "David win"
    //     david.money += totalBet;
    //     document.getElementById('moneyDavid').innerHTML = david.money;
    //     totalBet = '';
    // }
    // if (isWinner == arrSum[3]){
    //     document.getElementById('result').innerHTML = "Ronaldo win"
    //     ronaldo.money += totalBet;
    //     document.getElementById('moneyDavid').innerHTML = ronaldo.money;
    //     totalBet = '';
    // }
}

//check point
function checkPoint(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]._point;
    }
    return sum;
}

//bet money
function botBetMoney(bot) {
    let pointBot = checkPoint(bot.card);
    //Brad bet
    if (pointBot <= 10 && pointBot > 0) {
        bot.foulCard();
    } else if (pointBot <= 20) {
        bot.betMoney(200);
        totalBet += 200;
    } else if (pointBot <= 30) {
        bot.betMoney(300);
        totalBet += 300;
    } else {
        bot.betMoney(400);
        totalBet += 400;
    }
}

//bot cuoc tien
function bradBet() {
    botBetMoney(brad);
    document.getElementById('moneyBrad').innerHTML = brad.money;
    document.getElementById('moneyBet').innerHTML = totalBet;
}
function davidBet() {
    botBetMoney(david);
    document.getElementById('moneyDavid').innerHTML = david.money;
    document.getElementById('moneyBet').innerHTML = totalBet;
}
function ronaldoBet() {
    botBetMoney(ronaldo);
    document.getElementById('moneyRonaldo').innerHTML = ronaldo.money;
    document.getElementById('moneyBet').innerHTML = totalBet;
}

//tinh tong diem bai
function checkSum() {
    let maxSum = arrSum[0];
    for (let i = 0; i < arrSum.length; i++) {
        if (maxSum < arrSum[i]) {
            maxSum = arrSum[i];
        }
    }
    return maxSum;
}






