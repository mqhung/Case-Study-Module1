// bo bai goc
let card = ['<img src="bobai/2bich.png" class="anh"/>','<img src="bobai/2co.png" class="anh"/>',
    '<img src="bobai/2ro.png" class="anh"/>','<img src="bobai/2tep.png" class="anh"/>',
    '<img src="bobai/3bich.png" class="anh"/>','<img src="bobai/3co.png" class="anh"/>',
    '<img src="bobai/3ro.png" class="anh"/>','<img src="bobai/3tep.png" class="anh"/>',
    '<img src="bobai/4bich.png" class="anh"/>','<img src="bobai/4co.png" class="anh"/>',
    '<img src="bobai/4ro.png" class="anh"/>','<img src="bobai/4tep.png" class="anh"/>',
    '<img src="bobai/5bich.png" class="anh"/>','<img src="bobai/5co.png" class="anh"/>',
    '<img src="bobai/5ro.png" class="anh"/>','<img src="bobai/5tep.png" class="anh"/>',
    '<img src="bobai/6bich.png" class="anh"/>','<img src="bobai/6co.png" class="anh"/>',
    '<img src="bobai/6ro.png" class="anh"/>','<img src="bobai/6tep.png" class="anh"/>',
    '<img src="bobai/7bich.png" class="anh"/>','<img src="bobai/7co.png" class="anh"/>',
    '<img src="bobai/7ro.png" class="anh"/>','<img src="bobai/7tep.png" class="anh"/>',
    '<img src="bobai/8bich.png" class="anh"/>','<img src="bobai/8co.png" class="anh"/>',
    '<img src="bobai/8ro.png" class="anh"/>','<img src="bobai/8tep.png" class="anh"/>',
    '<img src="bobai/9bich.png" class="anh"/>','<img src="bobai/9co.png" class="anh"/>',
    '<img src="bobai/9ro.png" class="anh"/>','<img src="bobai/9tep.png" class="anh"/>',
    '<img src="bobai/10bich.png" class="anh"/>','<img src="bobai/10co.png" class="anh"/>',
    '<img src="bobai/10ro.png" class="anh"/>','<img src="bobai/10tep.png" class="anh"/>',
    '<img src="bobai/jbich.png" class="anh"/>','<img src="bobai/jco.png" class="anh"/>',
    '<img src="bobai/jro.png" class="anh"/>','<img src="bobai/jtep.png" class="anh"/>',
    '<img src="bobai/qbich.png" class="anh"/>','<img src="bobai/qco.png" class="anh"/>',
    '<img src="bobai/qro.png" class="anh"/>','<img src="bobai/qtep.png" class="anh"/>',
    '<img src="bobai/kbich.png" class="anh"/>','<img src="bobai/kco.png" class="anh"/>',
    '<img src="bobai/kro.png" class="anh"/>','<img src="bobai/ktep.png" class="anh"/>',
    '<img src="bobai/atbich.png" class="anh"/>','<img src="bobai/atco.png" class="anh"/>',
    '<img src="bobai/atro.png" class="anh"/>','<img src="bobai/attep.png" class="anh"/>'];
//bo bai cua bot
let cardBot = card;
let cardBot1 = [];
let cardBot2 = [];
let cardBot3 = [];
for (let i=0;i<3;i++){
    let index1 = Math.floor(Math.random()*cardBot.length);
    cardBot1.push(cardBot[index1]);
    cardBot.splice(index1,1);
}
for (let i=0;i<3;i++){
    let index2 = Math.floor(Math.random()*cardBot.length);
    cardBot2.push(cardBot[index2]);
    cardBot.splice(index2,1);
}
for (let i=0;i<3;i++){
    let index3 = Math.floor(Math.random()*cardBot.length);
    cardBot3.push(cardBot[index3]);
    cardBot.splice(index3,1);
}
let bot1 = new Bot('David Beckham', 2000, cardBot1);
let bot2 = new Bot('Steven Gerrard', 2000, cardBot2);
let bot3 = new Bot('Ronaldo', 2000, cardBot3);
