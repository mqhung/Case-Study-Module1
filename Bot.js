class Bot {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
        this._status = true;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get money() {
        return this._money;
    }

    set money(value) {
        this._money = value;
    }

    get card() {
        return this._card;
    }

    set card(value) {
        this._card = value;
    }

//dat cuoc tien
    betMoney(value){
            this._money -= value;
    }
    //bo bai
    foulCard(){ //up bai
            this._card = [];
            }
    //het tien roi game
    getOutGame(){
        if (this._money <= 0){
            this._status = false;
        }
    }
}