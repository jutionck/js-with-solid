class Product {
  constructor() {
    if (this.constructor.name === "Product") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }

  getName() {
    throw new Error("Method not implemented!");
  }

  /**
   * Function to get all of information about product
   */
  getProductInfo() {
    // some magic code
  }

  getExpiredDate() {
    throw new Error("Method not implemented!");
  }
}

class Vegetable extends Product {
  getName() {
    return "Broccoli";
  }

  getExpiredDate() {
    return new Date();
  }
}

class Smartphone extends Product {
  getName() {
    return "Samsung S10+ Special Edition";
  }

  // Ini seharusnya tidak ada karena Smartphone tidak ada expired
  getExpiredDate() {
    return new Date(); // ?????
  }
}
