class Table {
    players : string[];
    allBet : number;
    rounds : number;
    cardsTable : number[];
    deck : string[];
    constructor() {
        this.players = [];
        this.allBet = 0;
        this.rounds = 0;
        this.cardsTable = [];
        this.deck = [];//// new Deck
    }

    public addPlayer() {

    }

    public removePlayer() {
        
    }

    public reset () {
        this.players = []; 
        this.allBet = 0;
        this.rounds = 0;
        this.cardsTable = [];
        this.deck = []; /// Deck.reset()
    }

    private putCards() {

        if(this.rounds === 0) {
            /// put two cards
            return
        }
         
    }
}