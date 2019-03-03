/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/



class GameObject{
    constructor(baseAttributes){
        this.createdAt = baseAttributes.createdAt;
        this.name = baseAttributes.name;
        this.dimensions = baseAttributes.dimensions;
  }
  destroy()  {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes);
        this.healthPoints = characterAttributes.healthPoints;
  }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
 // prototype method -> returns the string '<object name> took damage.'

  class Humanoid extends CharacterStats {
    constructor (humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}
// should inherit destroy() from GameObject through CharacterStats
  // should inherit takeDamage() from CharacterStats

  // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
 

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Humanoid ({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 15,
    name: 'Commoner',
    team: 'Team Hero',
    weapons: [
      'Swoard of Destiny',
      'Fists of Brass Knuckles',
      'Big Rock',
    ],
    language: 'Common Tongue',
    superpower: 'POWER OF THE GODS!!!'
  });

  const villain = new Humanoid ({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6,
    },
    healthPoints: 35,
    name: 'BBEG',
    team: 'Team Anti-Hero',
    weapons: [
      'Death Claws',
      'Death Flaming Sword',
      'Biggest Rock',
    ],
    language: 'The Screams of Death',
  });


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!




  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(hero.destroy()); // Sir Mustachio was removed from the game.
  console.log(hero.takeDamage()); // Sir Mustachio was removed from the game.
  console.log(villain.greet()); // Lilith offers a greeting in Elvish.
  console.log(hero.greet()); // Lilith offers a greeting in Elvish.
  console.log(hero.weapons); // Staff of Shamalama
  console.log(villain.weapons); // Staff of Shamalama
  console.log(hero.powerHit); // Staff of Shamalama