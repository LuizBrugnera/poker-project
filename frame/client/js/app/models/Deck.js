"use strict";
class Deck {
    constructor() {
        this._cardsNum = [];
        this._cardsStr = [];
        this.reset();
    }
    reset() {
        this._cardsNum = [];
        for (let i = 1; i < 53; i++) {
            this._cardsNum.push(i);
        }
        this._shuffle(this._cardsNum);
        this._cardsStr = this._traduzir(this._cardsNum);
        ///console.table(this._cardsStr);
        ///console.table(this._cardsNum);
    }
    get getCardsNum() {
        return this._cardsNum;
    }
    get getCardsStr() {
        return this._cardsStr;
    }
    _traduzir(cardsNum) {
        const defaultDeck = [
            "null",
            "♥️AS DE COPAS♥️",
            "♥️2 DE COPAS♥️",
            "♥️3 DE COPAS♥️",
            "♥️4 DE COPAS♥️",
            "♥️5 DE COPAS♥️",
            "♥️6 DE COPAS♥️",
            "♥️7 DE COPAS♥️",
            "♥️8 DE COPAS♥️",
            "♥️9 DE COPAS♥️",
            "♥️10 DE COPAS♥️",
            "♥️J DE COPAS♥️",
            "♥️Q DE COPAS♥️",
            "♥️K DE COPAS♥️",
            "♣AS DE PAUS♣",
            "♣2 DE PAUS♣",
            "♣3 DE PAUS♣",
            "♣️4 DE PAUS♣",
            "♣5 DE PAUS♣",
            "♣6 DE PAUS♣",
            "♣7 DE PAUS♣",
            "♣8 DE PAUS♣",
            "♣9 DE PAUS♣",
            "♣10 DE PAUS♣",
            "♣J DE PAUS♣",
            "♣Q DE PAUS♣",
            "♣K DE PAUS♣",
            "♠AS DE ESPADAS♠",
            "♠2 DE ESPADAS♠",
            "♠3 DE ESPADAS♠",
            "♠️4 DE ESPADAS♠",
            "♠5 DE ESPADAS♠",
            "♠6 DE ESPADAS♠",
            "♠7 DE ESPADAS♠",
            "♠8 DE ESPADAS♠",
            "♠9 DE ESPADAS♠",
            "♠10 DE ESPADAS♠",
            "♠J DE ESPADAS♠",
            "♠Q DE ESPADAS♠",
            "♠K DE ESPADAS♠",
            "♦AS DE OUROS♦",
            "♦2 DE OUROS♦",
            "♦3 DE OUROS♦",
            "♦️4 DE OUROS♦",
            "♦5 DE OUROS♦",
            "♦6 DE OUROS♦",
            "♦7 DE OUROS♦",
            "♦8 DE OUROS♦",
            "♦9 DE OUROS♦",
            "♦10 DE OUROS♦",
            "♦J DE OUROS♦",
            "♦Q DE OUROS♦",
            "♦K DE OUROS♦",
        ];
        let cardsAux = [];
        for (let i = 0; i < 52; i++) {
            cardsAux.push(defaultDeck[cardsNum[i]]);
        }
        return cardsAux;
    }
    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}
