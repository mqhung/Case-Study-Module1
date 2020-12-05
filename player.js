class Player {
    constructor(name, money, card) {
        this._name = name;
        this._money = money;
        this._card = card;
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
}

