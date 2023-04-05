"use strict";
class Table {
    constructor() {
        this.players = [];
        this.allBet = 0;
        this.rounds = 0;
        this.cardsTable = [];
        this.deck = []; //// new Deck
    }
    addPlayer() {
    }
    removePlayer() {
    }
    reset() {
        this.players = [];
        this.allBet = 0;
        this.rounds = 0;
        this.cardsTable = [];
        this.deck = []; /// Deck.reset()
    }
    putCards() {
        if (this.rounds === 0) {
            /// put two cards
            return;
        }
    }
}
