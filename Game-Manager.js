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
for ( let i = 0; i<cardImg; i++){
    for (let j = 0; j<cardImg[i].length;j++){
        let point = index;
        point = index + (0.01+i)*j;
        let card = new Card();
        card.img = cardImg[i][j];
        card.point = point;
        deck.push(card);
    }
}
console.log(deck);

// let card = [];
// for (let i = 0;i<3;i++){
//     let row = Math.random();
//     let column = Math.random();
// //tao doi tuong la bai
//     let cardPlayer = new Card(deck[row][column], cardPoint[row][column]);
// }

// //tao doi tuong
// let player = new Player("Hung", 2000, cardPointPlayer);
// let brad = new Bot('BradPitt', 2000, cardPointBrad);
// let david = new Bot('David Beckham', 2000, cardPointDavid);
// let ronaldo = new Bot('Ronaldo', 2000, cardPointRonaldo);
// //start game
// function displayGame() {
//     function startGame() {
//
//     }
// }
// //bet money
//     function botBetMoney() {
//         //Brad bet
//         if (pointBrad <= 10 && pointBrad > 0) {
//             brad.foulCard();
//         } else if (pointBrad <= 20) {
//             brad.betMoney(200);
//             totalbet += 200;
//         } else if (pointBrad <= 30) {
//             brad.betMoney(300);
//             totalbet += 300;
//         } else if (pointBrad < 40) {
//             brad.betMoney(400);
//             totalbet += 400;
//         }
//         //David bet
//         if (pointDavid <= 5 && pointDavid > 0) {
//             david.foulCard();
//         } else if (pointDavid <= 15) {
//             david.betMoney(200);
//             totalbet += 200;
//         } else if (pointDavid <= 25) {
//             david.betMoney(300);
//             totalbet += 300;
//         } else if (pointDavid < 35) {
//             david.betMoney(400);
//             totalbet += 400;
//         }
//         //Ronaldo bet
//         if (pointRonaldo <= 8 && pointRonaldo > 0) {
//             ronaldo.foulCard();
//         } else if (pointRonaldo <= 18) {
//             ronaldo.betMoney(200);
//             totalbet += 200;
//         } else if (pointRonaldo <= 28) {
//             ronaldo.betMoney(300);
//             totalbet += 300;
//         } else if (pointRonaldo < 38) {
//             ronaldo.betMoney(400);
//             totalbet += 400;
//         }
//     }
//
// //check point
//     function checkPoint(arr) {
//         let max = arr[0].score;
//         for (let i = 0; i < arr.length; i++) {
//             if (max < arr[i].score) {
//                 max = arr[i].score;
//             }
//         }
//         return max;
//     }
//
// //check win
//     function checkWin() {
//         checkPoint(point);
//     }
//
// //next game
//     function nextGame() {
//     }
//
// //end game






