class Player {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
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