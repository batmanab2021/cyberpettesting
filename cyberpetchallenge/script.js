class pet {
    constructor (name) {
      this._name = name;
      this._drinkLvl = 20;
      this._foodLvl = 20;
      this._happiness = 20;
      this._health = 20;
    }  
    
    get startInfo() {
      return `Here is your pet info.\n Drink Level:${this._drinkLvl} \n Food Level: ${this._foodLvl} \n Happiness: ${this._happiness} \n Health: ${this._health}\n\nKeep feeding, playing, giving them drinks and ensure any of these levels don't get to 0. if you dont feed them they die`;
    }
    
    //setting timeout when pet has not been looked after
    hungerDrain() {
      setInterval(() => {this._foodLvl-=5}, 1000);
    }
    
    healthDrain() {
      setInterval(() => {this._health-=5}, 1000);
    }
    
    happinessDrain() {
      setInterval(() => {this._happiness-=5}, 1000);
    }
    
    thirstDrain() {
      setInterval(() => {this._drinkLvl-=5}, 1000);
    }
    
    
    //action functions (require buttons) to look after the pets
    feed() {
      this._foodLvl+=2;
    }
    
    drink() {
      this._drinkLvl+=2;
    }
    
    play() {
      this._happiness+=5;
    }
    
    sleep() {
      this._health+=2;
    }
    
    
    //checker if the pet is still alive
    get didPetdie() {
      if (this._health === 0 || this._happiness === 0 || this._drinkLvl === 0 || this._foodLvl === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  const startGame = () => {
    let whatAnimal = prompt("Choose your virtual pet type:\ndog\ncat\nrabbit");
    let petName = prompt("Please name your pet");
    userAnimal(whatAnimal, petName);
    playGame();
  }
  
  const userAnimal = (whatAnimal, petName) => {
    let newPet = new pet(petName);
    console.log("Your " + whatAnimal +" is called " + petName + ".\n" + newPet.startInfo );
  }
  
  const playGame = () => {
    let game = prompt("Play with your pet? Yes or No");
    if (game === "Yes") {
      console.log (newPet.play())
      console.log (newPet._happiness);
    } else {
      console.log("Your pet's happiness will decrease!")
      newPet.happinessDrain();
      console.log(newPet._happiness)
    }
  }
  
  startGame()