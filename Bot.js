class Bot {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
        this._status = true;
    }
    checkCard(card){
        let sum = 0;
        for (let i=0;i<card.length; i++){
            sum += card[i];
        }
        return sum;
    }
    betMoney(value){
        if (this.checkCard() >=7) {
            this._money -= value;
        } else {
           this.foulCard()
        }
    }
    foulCard(){ //up bai
        if (this.checkCard(this._card) <= 4){
            this._card = [];
        }
    }
    getOutGame(){ //het tien roi game
        if (this._money <= 0){
            this._status = false;
        }
    }
}