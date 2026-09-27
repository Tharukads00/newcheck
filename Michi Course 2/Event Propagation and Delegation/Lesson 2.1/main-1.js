// ===== YOUR TASK =====
// Build a buy button for each product and keep a running cart total.
// Full details are in the problem description.
//

let total = 0;

const products = [
  { id: "laptop", name: "Laptop", price: 999 },
  { id: "mouse", name: "Wireless Mouse", price: 25 },
  { id: "keyboard", name: "Mechanical Keyboard", price: 75 },
];

const productList = document.querySelector("#productList");
const cartTotal = document.querySelector("#cartTotal");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const btn = document.createElement("button");
  btn.textContent = product.name + " for $" + product.price;
  btn.classList.add("product-button");

  btn.addEventListener("click", () => {
    total = total + product.price;
    cartTotal.textContent= "Total: $" + total;
  });
  productList.append(btn);
}
