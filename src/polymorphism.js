// Polymorphism merupakan kemampuan objek, variabel, atau fungsi yang dapat memiliki berbagai bentuk. 
// Terdapat dua bagian -> 1. Overloading; 2. Overriding

// Sayangnya Overloading pada JS tidak bisa didefinisikan
// Karena JS tidak mengenali dengan tipe data spesifik

// Overriding -> sebuah kelas yang memiliki fungsi dengan nama sama dengan fungsi yang di dalam kelas induknya.
// Termasuk kedalam runtime polymorphism
// -> Proses di mana sebuah fungsi dipanggil pada saat runtime.

class Animal {
  walk() {
      console.log(`${this.constructor.name} walk!`);
  }
}

class Cat extends Animal {
  walk() {
      super.walk();
      console.log(`Yeay! ${this.constructor.name} walked!`);
  }
}

const main = () => {
  const cat = new Cat();
  cat.walk()
};

main();