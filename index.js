// Your code here
class Cat {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      if (this.gender === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  let cat, dog, bird, bird2;
  
  describe("cat", () => {
    beforeEach(() => {
      cat = new Cat("Sasha", "female");
    });
  
    // ... rest of your test cases ...
  });
  