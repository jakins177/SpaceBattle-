class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
    this.roundHit = false;

  }

  attack(alienShip) {
    console.log("You are attacking an alien!");
    let chanceAccuracy = Math.random();

    // console.log(`chance accuracy is ${chanceAccuracy}`);

    if (chanceAccuracy > this.accuracy) {
      console.log("You MISSED the alien!!!");

    } else {
      console.log("You HIT the alien!!!");
      alienShip.hull -= this.firepower;
      console.log(`You have done ${this.firepower} damage`);
      console.log(`The Alien has ${alienShip.hull} remaining`);

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
    console.log("The alien is attacking you!");
    let chanceAccuracy = Math.random();

    //console.log(`chance accuracy is ${chanceAccuracy}`);

    if (chanceAccuracy > this.accuracy) {
      console.log("The alien MISSED you!!!");


    } else {
      console.log("The alien HIT you!!!");
      humanShip.hull -= this.firepower;
      console.log(`The Alien has done ${this.firepower} damage`);
      console.log(`You have ${humanShip.hull} remaining`);

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

alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6];


//alienShipArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6,alienShip7,alienShip8,alienShip9,alienShip10  ];

//alienShipArray = [alienShip1, alienShip2 ];

let currentAlienShip = "";

let round = 1;

let retreat = false;

while (true) {
  if (alienShipArray.length == 0 || myShip.hull <= 0 || retreat) {
    break;
  } else {
    console.log("\n");
    console.log(`***ROUND ${round}***`);
    console.log("\n");

    currentAlienShip = alienShipArray[0];

    myShip.printShipStats();
    currentAlienShip.printShipStats();


  }

  while (true) {

    myShip.attack(currentAlienShip);
    if (currentAlienShip.hull < 1) {
      console.log("Alien ship defeated !!!");
      alienShipArray.splice(0, 1);
      round++;

      if (window.confirm("Do you want to make a hasty retreat?")) {
        retreat = true;
      }

      break;
    }

    currentAlienShip.attack(myShip);
    if (myShip.hull < 1) {
      console.log("You have been defeated !!!");
      round++;
      break;
    }

  }
}


console.log("~ GAME OVER !!!! ~");