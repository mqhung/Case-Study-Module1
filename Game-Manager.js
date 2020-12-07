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
let player = new Bot('Hung', 20000, cardPlayer);
let brad = new Bot('BradPitt', 20000, cardBrad);
let david = new Bot('David Beckham', 20000, cardDavid);
let ronaldo = new Bot('Ronaldo', 20000, cardRonaldo);

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
let totalBet = document.getElementById('moneyBet');
function botBetMoney(bot) {
    let pointBot = checkPoint(bot.card);
    //Brad bet
    if (pointBot <= 10 && pointBot > 0) {
        bot.foulCard();
    } else if (pointBot <= 20) {
        bot.betMoney(200);
        totalBet.innerHTML = `200`;/*------------------------------------*/
        bot.money.innerHTML -= totalBet;
    } else if (pointBot <= 30) {
        bot.betMoney(300);
        totalBet.innerHTML = `300`;
    } else if (pointBot < 40) {
        bot.betMoney(400);
        totalBet.innerHTML = `400`;
    }
}
// //next game
//     function nextGame() {
//     }
//
// //end game






