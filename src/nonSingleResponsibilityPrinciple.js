class Item {}

// Semua di bebankan dalam 1 class
class Order {
  calculateTotalSum() {
    /* ... */
  }

  getItems() {
    /* ... */
  }

  getItemCount() {
    /* ... */
  }

  addItem(item) {
    /* ... */
  }

  deleteItem(item) {
    /* ... */
  }

  printOrder() {
    /* ... */
  }

  showOrder() {
    /* ... */
  }

  getDailyHistory() {
    /* ... */
  }

  getMonthlyHistory() {
    /* ... */
  }
}

const main = () => {
  const order = new Order();
  order.calculateTotalSum();
};

main();
