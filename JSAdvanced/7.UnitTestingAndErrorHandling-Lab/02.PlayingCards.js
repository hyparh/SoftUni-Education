function createCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (faces.indexOf(face) == -1) {
        throw new Error('Invalid face: ' + face);
    }

    if (suits[suit] == undefined) {
        throw new Error('Invalid suit: ' + face);
    }

    let result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };

    return result
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());