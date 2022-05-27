function solve() {
    const mageOrFighter = {

        mage: function (name) {
            return {
                name: name,
                health: 100,
                mana: 100,
 
                cast: function (name) {
                    console.log(`${this.name} cast ${name}`);
                    this.mana -= 1;
                }
            }
        },
        
        fighter: function(name) {
            return {
                name: name,
                health: 100,
                stamina: 100,
 
                fight: function () {
                    console.log(`${name} slashes at the foe!`);
                    this.stamina -= 1
                }
            }
        }
    }

    return mageOrFighter;
}