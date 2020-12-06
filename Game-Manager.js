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
        point += 0.2;
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

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; i++) {
        let index = Math.floor(Math.random() * 52);
        cardPlayer.push(deck[index]);
        deck.splice(index, 1);
        index = Math.floor(Math.random() * 52);
        cardBrad.push(deck[index]);
        deck.splice(index, 1);
        index = Math.floor(Math.random() * 52);
        cardDavid.push(deck[index]);
        deck.splice(index, 1);
        index = Math.floor(Math.random() * 52);
        cardRonaldo.push(deck[index]);
        deck.splice(index, 1);
    }
}
//tao doi tuong
let player = new Bot('Hung', 2000, cardPlayer);
let brad = new Bot('BradPitt', 2000, cardBrad);
let david = new Bot('David Beckham', 2000, cardDavid);
let ronaldo = new Bot('Ronaldo', 2000, cardRonaldo);

// start game
function startGame() {
    randomCard(deck);
    //bai player
    document.getElementById('card1').innerHTML = cardPlayer[0].img;
    document.getElementById('card2').innerHTML = cardPlayer[1].img;
    document.getElementById('card3').innerHTML = cardPlayer[2].img;
    //bai Brad
    document.getElementById('card4').innerHTML = cardBrad[3].img;
    document.getElementById('card5').innerHTML = cardBrad[4].img;
    document.getElementById('card6').innerHTML = cardBrad[5].img;
    //bai David
    document.getElementById('card7').innerHTML = cardDavid[6].img;
    document.getElementById('card8').innerHTML = cardDavid[7].img;
    document.getElementById('card9').innerHTML = cardDavid[8].img;
    //bai Ronaldo
    document.getElementById('card10').innerHTML = cardRonaldo[9].img;
    document.getElementById('card11').innerHTML = cardRonaldo[10].img;
    document.getElementById('card12').innerHTML = cardRonaldo[11].img;
    //tien cua 4 nguoi choi
    document.getElementById('moneyPlayer').innerHTML = player.money;
    document.getElementById('moneyBrad').innerHTML = brad.money;
    document.getElementById('moneyDavid').innerHTML = david.money;
    document.getElementById('moneyRonaldo').innerHTML = ronaldo.money;
}

//check point
function checkPoint(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].point;
    }
    return sum;
}

//bet money
let totalBet = document.getElementById('moneyBet').value;

function botBetMoney() {
    let pointBrad = checkPoint(cardBrad);
    //Brad bet
    if (pointBrad <= 10 && pointBrad > 0) {
        brad.foulCard();
    } else if (pointBrad <= 20) {
        brad.betMoney(200);
        totalBet += 200;
    } else if (pointBrad <= 30) {
        brad.betMoney(300);
        totalBet += 300;
    } else if (pointBrad < 40) {
        brad.betMoney(400);
        totalBet += 400;
    }
    //David bet
    let pointDavid = checkPoint(cardDavid);
    if (pointDavid <= 5 && pointDavid > 0) {
        david.foulCard();
    } else if (pointDavid <= 15) {
        david.betMoney(200);
        totalBet += 200;
    } else if (pointDavid <= 25) {
        david.betMoney(300);
        totalBet += 300;
    } else if (pointDavid < 35) {
        david.betMoney(400);
        totalBet += 400;
    }
    //Ronaldo bet
    let pointRonaldo = checkPoint(cardRonaldo);
    if (pointRonaldo <= 8 && pointRonaldo > 0) {
        ronaldo.foulCard();
    } else if (pointRonaldo <= 18) {
        ronaldo.betMoney(200);
        totalBet += 200;
    } else if (pointRonaldo <= 28) {
        ronaldo.betMoney(300);
        totalBet += 300;
    } else if (pointRonaldo < 38) {
        ronaldo.betMoney(400);
        totalBet += 400;
    }
}

// //next game
//     function nextGame() {
//     }
//
// //end game






