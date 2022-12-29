// inheritance -> pewarisan sifat
// SuperClass -> Sebuah class yang fitur-fiturnya akan diwariskan.
// SubClass -> Anak/Children class yang akan mewarisi member milik Super Class.

// Single Inheritance -> class yang dibuat hanya mewarisi satu class.
// class Animal {
//   walk() {
//       console.log(`${this.constructor.name} walk!`);
//   }
// }

// class Cat extends Animal {
//   walk() {
//       console.log(`${this.constructor.name} walked!`);
//   }
// }

// const main = () => {
//   const animal = new Animal();
//   const cat = new Cat();
//   animal.walk();
//   cat.walk();
// }

// main()

// Multilevel Inheritance
// -> di mana SubClass dapat mewarisi SuperClass yang di mana merupakan sebuah SubClass dari SuperClass lain.

// class Animal {
//   walk() {
//       console.log(`${this.constructor.name} walk!`);
//   }
// }

// class Carnivore extends Animal {
//   eat() {
//     console.log(`${this.constructor.name} eat!`);
//   }
// }

// class Cat extends Carnivore {}


// const main = () => {
//   const animal = new Animal();
//   const carnivore = new Carnivore();
//   const cat = new Cat();
//   animal.walk();
//   carnivore.eat();
//   cat.eat(); // otomatis dapat dari class Carnivore (SubClass as SuperClass)
//   cat.walk(); // otomatis dapat dari class Animal (SuperClass)
// }

// main()

// Hierarchical Inheritance
// -> SuperClass yang diwarisi oleh beberapa SubClass.

class Animal {
  walk() {
      console.log(`${this.constructor.name} walk!`);
  }
}

class Carnivore extends Animal {
  eat() {
      console.log(`${this.constructor.name} eat!`);
  }
}

class Cat extends Carnivore { }

class Lion extends Carnivore { }


const main = () => {
  const cat = new Cat();
  const lion = new Lion()
  cat.walk();
  cat.eat();

  lion.walk();
  lion.eat();
}

main()