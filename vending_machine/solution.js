const items = [
  { name: "Smarties", code: "A01", quantity: 0, price: 0.6 },
  { name: "Caramac Bar", code: "A02", quantity: 5, price: 0.6 },
  { name: "Dairy Milk", code: "A03", quantity: 1, price: 0.65 },
  { name: "Freddo", code: "A04", quantity: 1, price: 0.25 },
];

class VendingMachine {
  constructor(items, money) {
    this.items = items;
    this.money = money;
  }

  vend(selection, itemMoney) {
    console.log(selection, itemMoney);
    let selectedObj = this.items.find((e) => e.code === selection);
    console.log(selectedObj);
    if (itemMoney < selectedObj.price) return "Not enough money!";
    if (selectedObj.quantity === 0) return `${selectedObj.name}: Out of stock!`;
  }
}

const VMOne = new VendingMachine(items, 10);

console.log(VMOne.vend("A01", 0.7));
