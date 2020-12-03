// bo bai goc
let card = [
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

//bo bai cua bot va player
let cardBot = card;
let cardPlayer = [[]];
let cardBot1 = [[]];
let cardBot2 = [[]];
let cardBot3 = [[]];

for (let i = 0; i < cardBot.length; i++) {
    let index = Math.floor(Math.random() * cardBot.length);
    for (let j = 0; j < cardBot[i].length; j++) {
        let index2 = Math.floor(Math.random() * cardBot[i].length);
        let temp = cardBot[i][j];
        cardBot[i][j] = cardBot[index][index2];
        cardBot[index][index2] = temp;
    }

}
cardPlayer = [[cardBot[9][1], cardBot[10][0], cardBot[11][3]]];
cardBot1 = [[cardBot[0][0], cardBot[1][1], cardBot[2][2]]];
cardBot2 = [[cardBot[3][1], cardBot[4][2], cardBot[5][3]]];
cardBot3 = [[cardBot[6][3], cardBot[7][3], cardBot[8][2]]];


//tao doi tuong
let player = new Player("Hung", 2000, cardPlayer)
let bot1 = new Bot('BradPitt', 2000, cardBot1);
let bot2 = new Bot('David Beckham', 2000, cardBot2);
let bot3 = new Bot('Ronaldo', 2000, cardBot3);

//gan gia tri cho la bai
function imgToValue() {
    let value = 1;
    cardBot[0][0] = value;
    for (let i = 0; i < cardBot.length; i++) {
        for (let j = 0; j < cardBot[i].length; j++) {
            cardBot[i][j] +=0.2;
        }
        value +=1;
    }
}



