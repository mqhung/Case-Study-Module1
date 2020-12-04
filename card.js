class Card{
    constructor(img, point) {

        this._img = img;
        this._point = point;
    }
    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get point() {
        return this._point;
    }

    set point(value) {
        this._point = value;
    }

}