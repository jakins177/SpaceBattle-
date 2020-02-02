class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
    this.roundHit = false;

  }

  attack(alienShip) {
    console.log("%c You are attacking an alien!", 'color:green');
    let chanceAccuracy = Math.random();

    // console.log(`chance accuracy is ${chanceAccuracy}`);

    if (chanceAccuracy > this.accuracy) {
      console.log("%c You MISSED the alien!!!", 'color:red');

    } else {
      console.log("%c You HIT the alien!!!", 'color:green');
      alienShip.hull -= this.firepower;
      console.log(`%c You have done ${this.firepower} damage`,'font-style: italic; background: azure; border: 1px solid grey;');
      console.log(`%c The Alien has ${alienShip.hull} remaining`, 'font-style: italic;' );

    }

  }

  printShipStats() {
    console.log("~ Stats for human ship ~");
    console.log(`hull: ${this.hull}`);
    console.log(`firepower: ${this.firepower}`);
    console.log(`accuracy: ${this.accuracy}`);
    console.log("   ");

  }

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class AlienShip {

  constructor() {
    const alienMinHull = 3;
    const alienMaxHull = 6;

    const alienMinFirePower = 2;
    const alienMaxFirePower = 4;

    const alienMinAccuracy = 6;
    const alienMaxAccuracy = 8;

    this.hull = getRandomIntInclusive(alienMinHull, alienMaxHull);
    // this.hull = Math.random() * (alienMinHull - alienMaxHull) + alienMinHull;
    this.firepower = getRandomIntInclusive(alienMinFirePower, alienMaxFirePower);

    //Math.random() * (alienMinFirePower - alienMaxFirePower) + alienMinFirePower;
    this.accuracy = getRandomIntInclusive(alienMinAccuracy, alienMaxAccuracy) * 0.1;
  }


  attack(humanShip) {
    console.log("%c The alien is attacking you!", 'color: red');
    let chanceAccuracy = Math.random();

    //console.log(`chance accuracy is ${chanceAccuracy}`);

    if (chanceAccuracy > this.accuracy) {
      console.log("%c The alien MISSED you!!!", 'color: green');


    } else {
      console.log("%c The alien HIT you!!!", 'color: red;');
      humanShip.hull -= this.firepower;
      console.log(`%c The Alien has done ${this.firepower} damage`, 'font-style: italic; background: azure; border: 1px solid grey;');
      console.log(`%c You have ${humanShip.hull} remaining`, "font-style: italic" );

    }

  }


  printShipStats() {
    console.log("~ Stats for alien ship ~");
    console.log(`hull: ${this.hull}`);
    console.log(`firepower: ${this.firepower}`);
    console.log(`accuracy: ${this.accuracy}`);
    console.log("   ");

  }

}


let alienShip1 = new AlienShip();

let alienShip2 = new AlienShip();

let alienShip3 = new AlienShip();

let alienShip4 = new AlienShip();

let alienShip5 = new AlienShip();

let alienShip6 = new AlienShip();

let alienShip7 = new AlienShip();

let alienShip8 = new AlienShip();

let alienShip9 = new AlienShip();

let alienShip10 = new AlienShip();


let myShip = new USS_Schwarzenegger();
const MAX_NUMBER_OF_ALIEN_SHIPS = 10;
const MIN_NUMBER_OF_ALIEN_SHIPS = 6;


//alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];
//let alienShipAmount = 6;
let alienShipAmount = getRandomIntInclusive(MIN_NUMBER_OF_ALIEN_SHIPS, MAX_NUMBER_OF_ALIEN_SHIPS);


let alienShipArray = [];

switch (alienShipAmount) {
  case 6: 
    alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];
    
  break;
  case 7:
    alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6, alienShip7]; 
    
  break;
  case 8:
    alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6, alienShip7, alienShip8];  

  break;
  case 9:
    alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6, alienShip7, alienShip9]; 
    
  break;
  case 10:
    alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6, alienShip7, alienShip9, alienShip10]; 
    
    break;  

  default:
    break;
}


//alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6,alienShip7,alienShip8,alienShip9,alienShip10  ];

//alienShipArray = [alienShip1, alienShip2 ];


let currentAlienShip = "";

let round = 1;

let retreat = false;

console.log('%c spacebattle', 'font-size: 40px'); 

console.log("  ");

console.log(`%c There are ${alienShipAmount} alien ships to fight!`, 'font-size:16px;color:blue');

while (true) {
  if (alienShipArray.length == 0 || myShip.hull <= 0 || retreat) {
    break;
  } else {
    console.log("\n");
    console.log(`%c ***ROUND ${round}***`,'font-size:16px;color:blue');
    console.log("\n");

    currentAlienShip = alienShipArray[0];

    myShip.printShipStats();
    currentAlienShip.printShipStats();


  }

  while (true) {

    myShip.attack(currentAlienShip);
    if (currentAlienShip.hull < 1) {
      console.log("%c Alien ship defeated !!!", 'color:green');
      alienShipArray.splice(0, 1);
      

      if (window.confirm(`You defeated alien ${round} and you have ${myShip.hull} hull left. Do you want to make a hasty retreat now?`)) {
        retreat = true;
      }

      round++;
      break;
    }

    currentAlienShip.attack(myShip);
    if (myShip.hull < 1) {
      console.log("%c You have been defeated !!!", 'color:red');
      round++;
      break;
    }

  }
}

console.log(" ");
console.log("%c ~ GAME OVER !!!! ~", 'color:blue');