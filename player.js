class Player {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
    }
    //tinh diem
    checkCardPlayer(card){
        let sum = 0;
        for (let i=0;i<card.length; i++){
            sum += card[i];
        }
        return sum;
    }
}
