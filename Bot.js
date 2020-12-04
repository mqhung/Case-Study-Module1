class Bot {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
        this._status = true;
    }
    //tinh diem
    checkCardBot(card){
        let sum = 0;
        for (let i=0;i<card.length; i++){
                sum += card[i];
        }
        return sum;
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