const items = [
  { name: "Smarties", code: "A01", quantity: 1, price: 0.6 },
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
    let selectedObj = this.items.find(item => item.code === selection);
    console.log(selectedObj);

    const { name, quantity, price } = selectedObj

    if (itemMoney < price) return "Not enough money!";
    if (quantity === 0) return `${name}: Out of stock!`;

    selectedObj.quantity -= 1
    this.money += price

    let change = (itemMoney - price).toFixed(2)
    const message = `Vending ${name}`

    return change > 0 ? `${message} with ${change} change.` : message
  }
}

const VMOne = new VendingMachine(items, 10);

console.log(VMOne.vend("A01", 0.7));
