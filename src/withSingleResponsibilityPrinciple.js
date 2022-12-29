// Single Responsibility Principle
// -> kita harus membagi fungsionalitas yang berbeda tersebut dengan cara memisahkannya
// -> artinya tidak bisa 1 class membebani semua method

class Item {}
 
class Order {
  calculateTotalSum() {}
 
  getItems() {}
 
  getItemCount() {}
 
  addItem(item) {}
 
  deleteItem(item) {}
}
 
class OrderHistory {
  getDailyHistory() {}
 
  getMonthlyHistory() {}
}
 
class OrderPreview {
  printOrder(order) {}
 
  showOrder(order) {}
}
 
const main = () => {
  const item = new Item();
  const order = new Order();
  order.addItem(item);
  const history = new OrderHistory();
  history.getDailyHistory();
  const viewer = new OrderPreview();
  viewer.printOrder(order);
};